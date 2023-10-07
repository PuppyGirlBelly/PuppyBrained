---
title: Working on a Netbook in 2023
created: Monday, June 19th 2023, 3:05:24 pm
modified: Friday, October 6th 2023, 7:59:01 am
---
# Working on a Netbook in 2023

## What is a Netbook, and why should I care?
The humble [netbook](https://en.wikipedia.org/wiki/Netbook), the most humble of all laptops in 2023. Not as powerful as the [modern powerhouses](https://www.tomshardware.com/reviews/macbook-pro-14-16-m2-pro-max-2023) we all come to expect. Not as slight as the [Toshiba Libretto](https://www.theverge.com/2013/8/2/4566062/status-symbols-toshiba-libretto). Nor nearly as internet-capable as your [chromebook](https://en.wikipedia.org/wiki/Chromebook#Chromebase). After 15–20 years since their relevance, they are difficult to recommend for any task these days.

> [!definition] What is a "Netbook"
> Netbooks were a classification of laptop that quickly sprung up in the mid-to-late 2000s, starting with (ASUS' Eee PC)<TODO: LINK TO WIKIPEDIA ARTICLE>. Often around 10" in screen size, using under powered intel atom and Celeron CPUs, and running either custom Linux distros or Windows XP (well after the introduction of Vista and Windows 7). Netbooks were successful in spite of their limitations because they filled a niche by being cheap and having long-lasting batteries. Which appealed to people who's only computing tasks involved checking email, writing word documents, and light media consumption (back when "media" consumption on a PC involved MP3s, DVDs, and 240p YouTube).

Yet, there are a small contingent of nerds who may want to revive these devices in spite of such limitations. They are just the right size between "too small to type on" like many palmtop/ultra-mobile PCs and the modern laptop that actively weighs you down and requires a large and/or dedicated bag. Making them easy to carry and pack in small bags (and even some purses!). 

More importantly, they are also superior solutions to tablets and phones for tasks like writing and coding. As the on-screen keyboard on touch devices range from "okay for about a paragraph or two" to "actively aggrivating". Meanwhile tasks that require precision when typing (like coding) very much crash headlong into the software assistance and automation that makes prose somewhat bearable on a touch keyboard. 

But even then, you can just get a bluetooth keyboard and use that to type on a touch device. So why do a contingent of ultranerds like using these devices? First, they are cheap as dirt, and they often run FOSS operating systems. So while you need to rely on an app for whichever workflow you have on a phone or tablet, you can craft and customize your workflow to exactly your wants and needs using Linux or BSD.

## So, What Can You Do on a Netbook?

Well, to quote Gravis (AKA: Cathode Ray Dude) <TODO: GET QUOTE AND LINK FROM VIDEO WHERE HE TALKS ABOUT THE CARD THAT TURNS A WINDOWS WORKSTATION INTO A MULTI-USER SERVER>. Anything you would do on a Netbook back in their hayday (2007-2012) will work great!

- Listening to MP3s and watching DVDs.
- Editing Word Documents using Office 2007.
- Browsing the internet… as long as none of the websites assume any modern web standards like TLS, modern JS frameworks, and a web client more recent than 2010.
- Reading email… as long as the client isn't web based for the reasons above.

> [!tip] How to find vintage websites
> If you do want to browse vintage websites, use [FrogFind!](https://www.frogfind.com/)

So pretty much nothing involving the internet. Which is a hard pill to swallow considering how much the internet is a vital part of our daily productivity. However, the majority of us own a device that ***is*** powerful enough to browse the modern web; and is capable of performing a number of productivity tasks that our ancient netbooks cannot.

## The Problems with Phones

Your cell phone should be capable of many productivity tasks, and is capable of browsing the modern web. However, as mentioned previously, a phone is a dreadful device to type on. But also as mentioned earlier, you can supplement it with a Bluetooth keyboard. Which is fine when you want to exclusively use an app that is used for typing, but some may not support keyboard navigation nor alternative forms of input.

Additionally, using a phone with a keyboard may still be less "portable" in reality. As each time you want to work, you'll have to

1) Unpack your keyboard.
2) Pair the keyboard with your phone (or plug in a USB cable).
3) Unpack your stand (because, for some reason, very few bluetooth keyboards have a place to hold your phone).
4) Place your phone and/or stand in a place where the phone is easy to look at while being sturdy enough to remain stable.

That last part, certainly does not describe most busses and environments I may find myself during the day. Not to mention you may need up to four items to get set up, and then pack away when you're done.

Meanwhile a netbook requires;
1) Pull it out of a bag
2) Unfold it

And you can be ready to be productive within moments. And when you're done you can be packed upwithin a minutes. However, that is not the only benefit of a barely-capable device.

Take for example, the issue of distractions. Notifications from your friends messaging you resulting in a multi-hour drag out flame war. The urge of a quick run on a game that drains all your enegery for working. Or the result of a quick google search turning into a multi-hour wikipedia trawl. The fact that a netbook can't do many of these things, or at least do them poorly, makes the fact that you can work much more rewarding than struggling to engage in distractions.

Even if you can't do some work, a netbook can be an excellent writing tool. For the same reasons <TODO: Link to this fact> that George R. R. Martin uses Word Perfect for writing his books.

## Enter, My Netbook

My personal device was a Lenovo S10-3 that was sent to the e-waste pile at work. I had run Linux on underpowered Chromebooks in the past, using one as a daily driver for a time. So I was curious if it was possible to run an underpowered CPU <TODO: Get GHz of the CPU> with 1GB of RAM. I thought, if nothing else, it would allow me to have essentially a modern Neovim-powered Word Processor. With excitement I immediately went about installing Distros.

But in spite of what I had been taught about Linux, I got to learn a few more things.
1) Small Debian based distros can still be painfully slow. As Xubuntu and Lubuntu each took multiple minutes to finish booting and become usable.
2) I love Puppy Linux conceptually; I hate using Puppy Linux.
	2.1 My motivation for learning Linux was browsing /r/unixporn and so having a beautiful OS (in my opinion) is vital for my enjoyment. Puppy Linux's UI is still stuck in the pre-Unity Ubuntu world.
	2.2 Puppy Linux doesn't follow typical \*nix file conventions. So installing software from source or outside it's typical package manager causes major headaches.
3) Gentoo is terrible for a low-end netbook; it may work if you cross-compile everything from a powerful computer. But I gave up after two hours of compiling before installation was completed.
4) The only good option I found was [Void Linux](private/Netbook/Void%20Linux.md) is great, and I would consider using it for a daily driver.
	- The XBPS package manger is very intuitive, powerful, and quite easy to use compared to Apt.
	- I love the BSD-style way it handles services (i.e. linking them)
	- Similar to Arch, you can start with a very minimal install, which let me build up what I needed piece-by-piece.

Soon, I had exactly what I needed. Neovim, a tiling Window Manager, and a lightweight browser for the odd search query. With it, I wrote a few stories, and was able to use Git to sync and back up my writing across devices. Though I stopped using it after a couple of months when I finally stopped writing once more. 

But recently I picked it back up in order to write once more after reading <TODO: find blog post found on HN about using a netbook as a thin client>. I tried to use it for code writing and editing. However I found the process of running Neovim and running code painful. I thought about my phone, how it is so much more powerful than this glorified typewriter I have. Yet it only permits me to do a fraction of what the OS on my netbook has. If only, I could harness the power of my phone in the form factor of a netbook... <TODO: Write about using a netbook as a thin client for a phone>.

^1: This is what we call *foreshadowing*.
