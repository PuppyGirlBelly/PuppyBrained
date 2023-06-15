---
title: Home
created: Saturday, June 10th 2023, 11:05:56 am
modified: Monday, June 12th 2023, 3:09:24 pm
tags: []
enableToc: false
---

# Home

[[posts/2ndPage.md]]

# H1 Heading 8-)
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading

## Horizontal Rules

___

---

***

## Typographic Replacements

Enable typographer option to see result.

test.. test… test….. test?….. test!….

-- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

**This is bold text**

*This is italic text*

*This is italic text*

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested…
> 
> > …by using additional greater-than signs right next to each other…
> > 
> > > …or with spaces between arrows.



## Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
	- Ac tristique libero volutpat at
	- Facilisis in pretium nisl aliquet
	- Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. You can use sequential numbers…
5….or keep all the numbers as `1.`

Start numbering with offset:

1. foo
2. bar

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link <https://github.com/nodeca/pica> (enable linkify to see)

## Images

![Minion](/8539fc2364a6deb0d63e6fa6bd60aaf0_MD5.png)
!["The Stormtroopocat"](d45f91af580deb773c11b9fea4eabd4c_MD5.png)

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: <https://octodex.github.com/images/dojocat.jpg> "The Dojocat"

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link.[^1]

Footnote 2 link.[^2]

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference.[^2]

[^1]: Footnote **can have markup**

	and multiple paragraphs.

[^2]: Footnote text.
