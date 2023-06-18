---
title: Setting Up a Personal Site with Hugo and GitHub Pages
tags: [archive, hugo, github, website, instructions]
created: Wednesday, June 2nd 2021, 10:52:39 am
modified: Sunday, June 18th 2023, 5:01:44 pm
---

# Setting Up a Personal Site with Hugo and GitHub Pages

{{ youtube -LgYzva-xq8 }}

Alright, so a friend was asking if I could make a site for them after crafting this one and showing it off. So instead of doing that, I'll instead write an absolute beginner's step-by-step tutorial on how to install Hugo and get your site uploaded to GitHub pages!

So this tutorial assumes you are using Ubuntu or Debian, and will primarily be based of of Hugo's own [quick start tutorial](https://gohugo.io/getting-started/quick-start/). Likewise if you need to work on Windows proper or MacOS then follow Hugo's [installation guide](https://gohugo.io/getting-started/installing) to get that part setup.

Likewise, it assumes you've already installed git and have an account with GitHub already!

So with that said, lets get started!

## 1) Installing Hugo

So first thing first, you'll need to install Hugo onto your machine. So a major caveat is that you **shouldn't** install via apt; the repos are out of date and you'll likely find issues with themes (like I did).

So the recommendation is to download via snap, homebrew, or the latest.deb archive itself.

- To install via snap just run;
	- `sudo snap install hugo`
- To install via homebrew run;
	- `sudo brew install hugo`
- To install via.deb;
	- Download the.deb by going to the [releases page](https://GitHub.com/gohugoio/hugo/releases) and downloading the package titled something like `hugo_<version number>_Linux-64bit.deb`
	- Go to the directory that the file was downloaded to in your terminal and run the following command;
	- `sudo apt install hugo_<version number>_Linux-64bit.deb`

With that all done, you've installed Hugo onto your system! 😊

## 2) Creating Your Site and Installing a Theme

So now you're all ready to prepare your site!

So before you go forwards; you may want to create a directory for your websites and projects. But it's up to you!

To create a site run, though feel free to replace `my_site` with whatever you want to call the folder that will hold your site;

```
hugo new site my_site
```

Once that's done, navigate inside and initialize the git repository to allow for uploading to GitHub.

``` 
cd my_site 
git init
```

Next is for adding the theme; you can use the following commands to use the [Ananke theme](https://themes.gohugo.io/gohugo-theme-ananke/) as default. If you want to use a different one then take a look at [this gallery of themes hosted by hugo](https://themes.gohugo.io) to select one! But just replace the link to the GitHub repo, directory, and theme declaration with one corresponding to the proper theme.

```
git submodule add https://GitHub.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke 
echo theme = \"ananke\" >> config.toml
```

## 3) Adding Content

So with that out of the way, might as well add some content to let you test the website and theme!

The default theme will let you add new pages/entries with the following command;

```
hugo new posts/my-first-post.md
```

But if you're using a custom theme, make sure to take a look at it's documentation/README.md in case it uses a different command!

So next, open the file within your website's directory `content/posts/my-first-post.md` in your favorite editor and add whatever text to the bottom of the file and that will be the first post to your new website!

**BIG NOTE:** the header of the file will often feature a line like;

```
draft: true
```

That line will prevent your pages/posts from actually being shown when you upload your site. So whenever you complete your drafts, make sure to change the `true` to `false`.

### 3.5) Previewing Your Website before Uploading

So uploading your repo to GitHub, and then having to wait for it to compile can be a lengthy and annoying process. So to speed up the process, you can instead set up a local web server to preview your site without needing to upload. The local updates automatically which allows for instantaneous previews!

To run the server, just go to your site's directory within the terminal and run the command and line and enter the command;

```
hugo server
``` 

Then enter the address `http://localhost:1313` into your browser, and you should see your website! Now if you make any changes to your post, you should see them happen instantly! If not, then just refresh the page!

## 4) Preparing GitHub Pages

Alright, so you got the site ready. Now to host it!

So you'll need to go to GitHub and create a new public repo; now the important thing is that you'll need to name it `<your_username>.GitHub.io`. Replacing `<your_username>` with your actual GitHub user name. Otherwise it may not work properly with Hugo.

So next you'll run the following commands (once again, replacing `<your_username>` with your actual GitHub user name);

```
git remote add origin https://GitHub.com/<your_username>/<your_username>.GitHub.io
git branch -M main
git push -u origin main
```

This will let you use git to upload your site to the GitHub repo now. But it still won't make the site work properly yet! For that, we need to make it so that GitHub generates a branch on your repo that actually holds the website itself!

## 5) Setting up GitHub Actions

So! GitHub Actions! If you aren't familiar, it's basically automation for your builds. Often used to compile and test code on push; and in our case, we're gonna set it up so that pushing our repo will make GitHub use Hugo to generate it's own copy of your site on a separate branch!

To do this; go to your repo and select the `Actions` tab at the top. Then inside, click the link `set up a workflow yourself`. Finally copy the following code and paste it into the text box that shows up; replacing the already present code.

```
name: GitHub pages

on:
  push:
    branches:
      - main  # Set a branch to deploy
  pull_request:

jobs:
  deploy:
    runs-on: ubuntu-20.04
    steps:
      - uses: actions/checkout@v2
        with:
          submodules: true  # Fetch Hugo themes (true OR recursive)
          fetch-depth: 0    # Fetch all history for .GitInfo and .Lastmod

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          # extended: true

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        if: GitHub.ref == 'refs/heads/main'
        with:
          GitHub_token: $\{\{ secrets.GitHub_TOKEN \}\}
          publish_dir: ./public
```

Then click the green `Start Commit` button in the top right corner.

## 6) Enabling GitHub Pages

So, for the final step. Go to the settings page of your repository; and on the sidebar select `Pages`.

Then inside the following page, click the drop down under "Source" and select the `gh-pages` branch of your repo. Then click the "Save" button. It should show a banner at the top of the settings page saying "Your site is published at https://<your_username>.github.io". Click the link, and you should now be redirected to your website! Congrats! Now you can add and edit content on your site, and your content should show up on your site each time you push the git repo! Have fun!
