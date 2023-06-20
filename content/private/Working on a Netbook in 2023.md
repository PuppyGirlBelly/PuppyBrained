---
title: Working on a Netbook in 2023
aliases:
  - Working on a netbook in 2023
created: Monday, June 19th 2023, 3:05:24 pm
modified: Monday, June 19th 2023, 4:57:44 pm
---
# Working on a Netbook in 2023

The humble [netbook](https://en.wikipedia.org/wiki/Netbook), the most humble of all laptops in 2023. Not as powerful as the [modern powerhouses](https://www.tomshardware.com/reviews/macbook-pro-14-16-m2-pro-max-2023) we all come to expect. Not as slight as the [Toshiba Libretto](https://www.theverge.com/2013/8/2/4566062/status-symbols-toshiba-libretto). Nor nearly as internet-capable as your [chromebook](https://en.wikipedia.org/wiki/Chromebook#Chromebase). After 15–20 years since their relevance, they are difficult to recommend for any task these days.

> [!definition] What is a "Netbook"
> Netbooks were a classification of laptop that quickly sprung up in the mid-to-late 2000s, starting with ASUS' Eee PC. Often around 10" in screen size, using under powered intel atom and Celeron CPUs, and running either custom Linux distros or Windows XP after the introduction of Vista and Windows 7. Netbooks were successful in spite of these limitations because they filled a niche for low-powered, long battery life, and cheap computers. Which appealed to people who's only computing tasks involved email, write word documents, and light media consumption (back when "media" consumption on a PC involved MP3s, DVDs, and 480p YouTube).

Yet, there are a small contingent of nerds who may want to revive these devices in spite of such limitations. They were just the right size between "too small to type on" like many palmtop/ultra-mobile PCs; and easy to carry and pack, unlike some Ultrabook computers. For myself, I find they fit the right balance between "easily packed in a purse" while being usable for tasks like writing and coding.

And likewise, I do not care for tablets and phones for many of my daily work. As the on-screen keyboard ranges from "okay for casual chat" to "aggravating", and your discomfort can grow exponentially when writing text longer than a few sentences. And a phone/tablet is difficult to work on when riding a bus or train, compared to a laptop.

And the biggest benefit to a popular class of computer that is 15+ years obsolete; it is cheap as dirt.

## So, What Can You Do on a Netbook?

Well, to quote Gravis (AKA: Cathode Ray Dude) <TODO: GET QUOTE AND LINK FROM VIDEO WHERE HE TALKS ABOUT THE CARD THAT TURNS A WINDOWS WORKSTATION INTO A MULTI-USER SERVER>. Anything you did on it back in 2006-2010 will work great!

- Listening to MP3s and watching DVDs.
- Editing Word Documents using Office 2007.
- Browsing the internet… as long as none of the websites assume any modern web standards like TLS, modern JS, and a web client more recent than 2010.
- Reading email… as long as the client isn't web based and can run on underpowered computers.

> [!tip] How to find vintage websites
> If you want to browse vintage websites, use [FrogFind!](https://www.frogfind.com/)

So pretty much nothing involving the internet, which is difficult considering how much the internet is a vital part of our daily productivity. However, the majority of us own a device that ***is*** powerful enough to browse the modern web; and is capable of performing a number of productivity tasks that our ancient netbooks cannot.

## The Problems with Phones

Your cell phone should be capable of many productivity tasks, and is capable of browsing the modern web. However, as mentioned previously, a phone is a dreadful device to type on. You can supplement it with a Bluetooth keyboard; however, the OS and apps are not designed around a physical keyboard and may act unusually when you do type.

Additionally, few options are nearly as portable as a laptop. In many cases, with a phone and a keyboard, you need to unpack and set up your workspace (which may involve as many items as a folding Bluetooth keyboard, a phone stand, and a mouse). Meanwhile, a netbook is able to just fold in half, and then open back up when you want to work.

To some, there is the issue of distractions. As having notifications pop up on your screen can lead to a coding session coming to a halt as you get caught up in sharing Linux memes to half a dozen websites and private chats.

Instead, what if you could just "borrow" the power of your phone and allow your netbook to utilize it? **Make your phone a server, and your netbook a client.**

Because that is what I did. I took an old Lenovo S10-3 destined for the trash, and tethered it to my phone to act as a thin client.

## Enter, My Netbook

My personal device is a Lenovo S10-3 that was sent to the e-waste pile at work. At the opportunity for a new device with limitations that I wasn't familiar with, I decided to try and see if I could turn it into a usable device.

Knowing that Linux was often used to revive old computers that couldn't run contemporary operating systems and programs; I was curious about how far it could go. So an underpowered laptop that is 15 years out of date is a perfect candidate.

That initial experiment made me discover a few things;
1) Small Debian based distros can still be painfully slow (e.g. Xubuntu)
2) I love Puppy Linux conceptually; I hate using Puppy Linux.
	- It's GUI is stuck in the mid-2000s, which would be acceptable if it wasn't stuck in the 'Pre-Ubuntu' era of GUI design.
	- It doesn't follow typical \*nix file conventions and installing software from source or outside it's typical package manager causes major headaches.
3) Gentoo is terrible for a low-end netbook; it may work if you cross-compile everything from a powerful computer. But I gave up after two hours of compiling before installation was completed.
3) [Void Linux](private/Void%20Linux.md) is great, and I would consider using it for a daily driver.
	- The XBPS package manger is actually pretty cool, and pretty easy to use.
	- The way it handles services (i.e. linking them)
	- Very minimal, which let me build up what I needed piece-by-piece

> [!note] Todo: Experiment with antiX
> I haven't tried it yet, but I heard reccommendations for AntiX. 
>
> [antiX](https://en.wikipedia.org/wiki/AntiX) is a linux distro that was originally designed for live booting via USB drive. However, it seems to have very low resource utilization and seems suitable for netbooks. Also seems like a more "install and go" distro than Void Linux.

I put that notebook away, after using it as effectively a digital typewriter with git capabilities for an old creative writing project. But recently I picked it back up to use for this website. So I wiped it from scratch and set it up.

1) Install Void Linux