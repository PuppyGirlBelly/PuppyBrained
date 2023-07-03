---
title: Site Setup Notes
created: Saturday, June 10th 2023, 11:05:56 am
modified: Tuesday, June 20th 2023, 11:51:14 am
---

# Site Setup Notes

Took a look at settings to reduce the amount of tracking and additional requests.

1. In the file `assets/styles/base.scss`, I removed the google fonts import with roughly equivalent [Modern Font Stacks](https://modernfontstacks.com/#font-stacks)
2. Disabled the following settings in `data/config.yaml`:
	1. `enableLinkPreview`: true -> false
	2. `enableLatex`: true -> false
	3. `enableCodeBlockCopy`: true -> false
	4. `enableSPA`: true -> false
	5. `enableContextualBacklinks`: true -> false
	6. `enableMermaid`: true -> false
 3. Commented out the following lines of code from `layouts/partials/head.html`:

``` html

` 74` <!-- <script src="https://cdn.jsdelivr.net/npm/@floating-ui/core@1.2.1"></script> -->
` 75` <!-- <script src="https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.2.1"></script> -->

...

`188` // plausible("Link Click", {
`189` //           props: {
`190` //             href: target.href,
`191` //             broken,
`192` //             internal,
`193` //             graph: false,
`194` //           }
`195` //         })

... 

`250`  <!-- <script defer data-domain="{{$trimmedURL}}" src="https://plausible.io/js/script.js"></script> -->
`251`  <!-- <script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script> -->
```

Went through the process of identifying all external requests on the website, and then imported them and bundled into the website. Had the added benefit of allowing me to update packages if they are out of date or unsafe.

TODO: Look at other digital gardens [on jzhao's website](https://quartz.jzhao.xyz/notes/showcase/)
