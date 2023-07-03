---
title: My Netbook
aliases:
  - My Netbook
created: Tuesday, June 20th 2023, 12:01:08 pm
modified: Tuesday, June 20th 2023, 1:16:45 pm
---
# My Netbook

My Netbook is a Lenovo S10-3 running Void Linux

![My netbook showing neofetch, output below](private/Netbook/test.png)

The neofetch output;
> - **OS**: Void Linux x86_64
> - **Host**: S10-3 Lenovo
> - **Kernel**: 6.1.31_1
> - **Uptime**: 1 day, 1 hour, 41 mins
> - **Packages:** 420 (xbps-query)
> - **Shell**: zsh 5.9
> - **Resolution**: 1024x600
> - **Terminal**: [xterm - Wikipedia](https://en.wikipedia.org/wiki/Xterm)
> - **CPU**: Intel Atom N455 (2) @1.667GHz
> - **GPU**: Intel Atom Process D4xx/D5xx/N4xx/N5xx
> - **Memory**: 173MiB / 963MiB

And additional information: 

## Additional Setup Info
- Installed via 'Void Linux x86_64 glibc Live image'
	- I use `glibc` rather than `musl` to help ensure maximum compatibility.
- Uses 4GB swap partition (more than enough for hibernate and regular swap). 
	- Since my primary goal is to use it for writing and text editing, I don't worry too much about space. And I have a 256GB spinning rust drive for anything that might require significant space.
- ~~Installed oh-my-zsh~~ (Gonna try to use sensible bash settings)
- Installed cozette bitmap font
- added message pre-login (to fix issues with autologin, may have to re-attempt autologin after trying to swap back to bash)
- Text Editor: [LunarVim](https://www.lunarvim.org/)

> [!aside] Why I use LunarVim
> I use LunarVim since I adore Neovim and the features it introduced (e.g. async, terminals, LSP integration). However I found the process of setting up LSP servers, formatters, and linters tedious and confusing. Plus my old configuration introduced pain-points that I couldn't figure out. 
> 
> So I place my trust in a team who have more knowledge on the Neovim plugin space, how to integrate everything better, and would ensure that the configuration will work pretty consistently. And likewise, it limits the amount of troubleshooting and configuration on my end for all the tweaks that I prefer in my Neovim config.

- Terminal Font: [GitHub - slavfox/Cozette: A bitmap programming font optimized for coziness 💜](https://github.com/slavfox/Cozette)
	- On small screens with lower resolutions, I prefer a bitmap font since it looks much cleaner and easier to read than truetype fonts. That said, I do like how clean they look on larger 1080p+ screens as well; but they can be a bit too small in size.
- Window Manager: [GitHub - aesophor/wmderland: 🌳 X11 tiling window manager using space partitioning trees](https://github.com/aesophor/Wmderland)
	- I was using i3; but with how low power this device is I figured a lighter weight alternative that performs as little as needed would be preferable.
- Bar: [GitHub - LemonBoy/bar: A featherweight, lemon-scented, bar based on xcb](https://github.com/LemonBoy/bar) (AKA: lemonbar)
	- Like above, a lighter weight alternative than other status bars. Provides as little as needed.
- Colorscheme: [Nord](https://www.nordtheme.com/)
	- Set `.Xresources` to have Nord
	- Set `.dir_colors` to use Nord
	- Use the `onenord` theme in Neovim/LunarVim
 
> [!note] Why I use Nord
> I use Nord for similar reasons to LunarVim above, I can rely on the Nord theme being consistently available across devices. So all my applications can have a consistent look, and it reduces cognitive load when choosing colorschemes. Plus I like the "winter" aesthetic as a 🇨🇦 
