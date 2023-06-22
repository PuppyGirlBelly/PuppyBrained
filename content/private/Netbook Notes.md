---
title: Netbook Notes
created: Tuesday, June 20th 2023, 11:37:29 am
modified: Thursday, June 22nd 2023, 12:03:03 am
aliases:
  - Todos
---
# Todos

- TODO: Checkout [antiX Linux – Proudly anti-fascist "antiX Magic" in an environment suitable for old and new computers.](https://antixlinux.com/)
- TODO: Checkout [Crunchbangplusplus | Debian Based Minimal Linux Distro](https://crunchbangplusplus.org/)
- TODO: Setup `st` terminal again
- TODO: use [GitHub - starship/starship: ☄🌌️ The minimal, blazing-fast, and infinitely customizable prompt for any shell!](https://github.com/starship/starship) instead of oh-my-zsh
- TODO: Get `exa` [GitHub - ogham/exa: A modern replacement for 'ls'.](https://github.com/ogham/exa)
- Add part about skipping GRUB timeout
- Add part about usb auto mounting
- Do audio setup

> [!note] bash-sensible
> Seems like this document is turning into a handful of scripts that are turning into bash-sensible
> [GitHub - mrzool/bash-sensible: An attempt at saner Bash defaults](https://github.com/mrzool/bash-sensible)

# Netbook Notes
## Pre-Install
Set the BIOS clock to UTC time

## Setup
### Create Swap Space

A 3-4GB swap partition should have been made as a part of the install process.

1. Determine the partition meant for swap, and find it's uuid;
	- `sudo blkid | grep swap`
2. Enable the swap partition for immediate use
	- `swapon /dev/sdxy`
3. Add the swap to /etc/fstab to ensure it's enabled on all future boots.
	- `sudo echo "UUID=<device_UUID> none swap defaults 0 0" >> /etc/fstab`
4. Change any ssd drive's entry in /etc/fstab/ from 'defaults' to 'defaults,discard' to enable TRIM.
	- Be careful that your drive properly handles NCQ correctly, see more [here](https://docs.voidlinux.org/config/ssd.html#continuous-trim-with-fstab-discard)

### Install Repos

You will need to install nonfree and multilib repos to ensure you have access to all software you need. Skip if you want to ensure only free software lives on your machine; or if you are running a 32-bit CPU.

``` bash
sudo xbps-install void-repo-nonfree
sudo xbps-install void-repo-multilib
sudo xbps-install void-repo-multilib-nonfree
```

### Install Intel Microcode and Use Stable Linux Kernel

You should enable intel microcode and use an LTS kernel to reduce security vulnerabilities and help ensure that your CPU is running effectivley.

``` bash
sudo xbps-install intel-ucode
sudo xbps-install linux-lts-headers linux-lts
# TODO: Find out how to do the following: "then you can add `linux` and `linux-headers` to an `ignorepkg` entry in [xbps.d(5)](https://man.voidlinux.org/xbps.d) and uninstall those packages.""
sudo xbps-remove linux-headers linux
sudo xbps-reconfigure --force 
```

### Add Another User

After login, you will be logged in as root. If you'd prefer to use a secondary user who isn't admin (which you should to avoid any potential security issues) then add another user.

``` bash
# The '-m' flag creates the user home directory; copying it from /etc/skel
# The '-g' flag makes the user's primary group the listed group
# The '-G' flag makes the user's secondary groups the following roups
sudo useradd -m -g users -G wheel,audio,video,network,disk,storage
sudo passwd <username>
```

### Time

Install and enable NTP to make your time sync properly

``` bash
sudo xbps-install openntpd 
sudo ln -s /etc/sv/openntpd /var/service/.
```

### Power

Install and enable `acpid` to enable hibernation and power management.
Install and enable `tlp` to automatically enable power settings that make laptop battery life more efficient.

``` bash
sudo xbps-install acpid tlp
sudo ln -s /etc/sv/acpid /var/service/.
sudo ln -s /etc/sv/tlp /var/service/.
```

### Networking

Install and enable `dbus` to enable NetworkManager to work. And install and enable `NetworkManager` to have it manage your networking hardware; and use `nmtui` to have a terminal-based GUI to manage your network settings.
Also disable dhcpcd to avoid issues with the two tools conflicting.

``` bash
sudo xbps-install dbus NetworkManager
sudo vsv disable dhcpcd
sudo ln -s /etc/sv/dbus /var/service/.
sudo ln -s /etc/sv/NetworkManager /var/service/.
```

### Intel Graphics

Installing intel graphics drivers

``` bash
sudo xbps-install linux-firmware-intel mesa-dri intel-media-driver xf86-video-intel 
```

### Desktop Environment

So this does a number of things, but the primary things it installs are;

- `xorg-minimal`: The fewest parts of xorg needed in order to show a desktop. As well as other X packages to make your life prettier and easier.
- `wmderland`: A minimal and lightweight tiling window manager, much like i3.
- `lemonbar`: A lightweight status bar to show time, battery, workspace, and other netbook statuses.
- `xclip` and `xclipboard`: A Clipboard manager to ensure copy-paste works correctly; as well as the `xclip` cli tool for getting and setting clipboard contents.
- `xterm`: The xterminal to ensure you have the lightest weight setup for text editing.
- A variety of fonts to ensure that you will be able to see anything that pops up.

It also sets X to start `wmderland` on startup, and copies the configuration file to ensure that `wmderland` is able to show screens on startup.

``` bash
sudo xbps-install lemonbar noto-fonts-emoji noto-fonts-ttf wmderland xclip xclipboard xinit xorg-fonts xorg-minimal xrdb xset xterm xtermcontrol
touch ~/.xinitrc
echo "exec /bin/wmderland" >> ~/.xinitrc
mkdir -p ~/.config/wmderland
cp /etc/defaults/wmderland/config .config/
```

### Other Important Packages

The other packages below are added to help install LunarVim, connect to Android via SSH over USB, setup an environment for editing a Hugo site hosted on GitHub Pages, and other quality of life packages.

Highlights include;

- `bat`: A better `cat` alternative with syntax highlighting, line numbers, and automatic pagination.
	- [GitHub - sharkdp/bat: A cat(1) clone with wings.](https://github.com/sharkdp/bat)
- `fd`: A faster, more user-friendly, `find` written in rust.
	- [GitHub - sharkdp/fd: A simple, fast and user-friendly alternative to 'find'](https://github.com/sharkdp/fd)
- `htop`: A better `top` ui with search and tree view
	- [htop - an interactive process viewer](https://htop.dev/)
- `lazygit`: A terminal-based GUI for managing Git repos.
	- [GitHub - jesseduffield/lazygit: simple terminal UI for git commands](https://github.com/jesseduffield/lazygit)
- `neofetch`: A cool and highly configurable system information tool.
	- [GitHub - dylanaraps/neofetch: 🖼️ A command-line system information tool written in bash 3.2+](https://github.com/dylanaraps/neofetch)
- `ranger`: A terminal-based GUI file manager. Helps when navigating and exploring folders.
	- [GitHub - ranger/ranger: A VIM-inspired filemanager for the console](https://github.com/ranger/ranger)
- `ripgrep`: A fast grep alternative written in rust. Call it with `rg`
	- [GitHub - BurntSushi/ripgrep: ripgrep recursively searches directories for a regex pattern while respecting your gitignore](https://github.com/BurntSushi/ripgrep)

``` bash
### Needed for LunarVim
sudo xbps-install cargo gcc git go lazygit make nodejs python3 python3-dbus python3-devel ripgrep rust rustup unzip 
### Needed for communciating with android
sudo xbps-install android-tools android-udev-rules
### Needed for editing GitHub Pages websites
sudo xbps-install github-cli hugo
### Quality of life packages
sudo xbps-install bat fd htop neofetch neovim ranger vsv wget
```

### Lunarvim

``` bash
LV_BRANCH='release-1.3/neovim-0.9' bash <(curl -s https://raw.githubusercontent.com/LunarVim/LunarVim/release-1.3/neovim-0.9/utils/installer/install.sh)
```

### Android USB Connection

To understand what is going on in these commands better, I recommend reading the following posts;

- [Run an ssh Server on Your Android with Termux](http://glow.li/posts/run-an-ssh-server-on-your-android-with-termux)
- [Access Termux via USB](http://glow.li/posts/access-termux-via-usb)
This creates a script that you use whenever you connect your phone via USB, and have an ssh server open on your phone, to SSH into your phone.

``` bash
touch ~/adb_connect.sh
echo "adb forward tcp:8022 tcp:8022 && adb forward tcp:8080 tcp:8080 && ssh localhost -p 8022" >> ~/adb_connect.sh
```

### Consolidated Script

``` bash
sudo xbps-install void-repo-nonfree void-repo-multilib void-repo-multilib-nonfree
sudo xbps-install intel-ucode linux-lts-headers linux-lts linux-firmware-intel mesa-dri intel-media-driver xf86-video-intel 
# TODO: Find out how to do the following: "then you can add `linux` and `linux-headers` to an `ignorepkg` entry in [xbps.d(5)](https://man.voidlinux.org/xbps.d) and uninstall those packages."
sudo xbps-remove linux-headers linux
sudo xbps-reconfigure --force 

sudo xbps-install openntpd acpid tlp dbus NetworkManager lemonbar noto-fonts-emoji noto-fonts-ttf openntpd wmderland xclip xclipboard xinit xorg-fonts xorg-minimal xrdb xset xterm xtermcontrol cargo gcc git go lazygit make nodejs python3 python3-dbus python3-devel ripgrep rust rustup unzip android-tools android-udev-rules github-cli hugo bat fd htop lolcat neofetch neovim vsv wget
sudo vsv disable dhcpcd
sudo ln -s /etc/sv/openntpd /var/service/.
sudo ln -s /etc/sv/dbus /var/service/.
sudo ln -s /etc/sv/NetworkManager /var/service/.
sudo ln -s /etc/sv/acpid /var/service/.
sudo ln -s /etc/sv/openntpd /var/service/.
sudo ln -s /etc/sv/tlp /var/service/.

touch ~/.xinitrc
touch ~/adb_connect.sh
echo "exec /bin/wmderland" >> ~/.xinitrc
echo "adb forward tcp:8022 tcp:8022 && adb forward tcp:8080 tcp:8080 && ssh localhost -p 8022" >> ~/adb_connect.sh
LV_BRANCH='release-1.3/neovim-0.9' bash <(curl -s https://raw.githubusercontent.com/LunarVim/LunarVim/release-1.3/neovim-0.9/utils/installer/install.sh)

sudo useradd -m -g users -G wheel,audio,video,network,disk,storage
sudo passwd <username>
```

### Additional Configuration Commands

The following commands are less to make the netbook work; but either configuration I did to make the environment look better or provide some quality of life. Feel free to skip or change these.

#### Setting Nord Dircolors

See more here: [Nord - dircolors](https://www.nordtheme.com/ports/dircolors)

``` bash
curl -LO https://github.com/arcticicestudio/nord-dircolors/releases/download/v0.2.0/dir_colors
```

#### Installing the Font

See the font here: [GitHub - slavfox/Cozette: A bitmap programming font optimized for coziness 💜](https://github.com/slavfox/Cozette)

``` bash
sudo mkdir -p /etc/fonts
curl -L https://github.com/slavfox/Cozette/releases/download/v.1.19.2/cozette.otb > .local/share/fonts/cozette.otb
mkfontdir .local/share/fonts
xset +fp $HOME/share/fonts
fc-cache -f
```

#### Changing /etc/issue

I change /etc/issue to help provide a cleaner login experience without a login screen. I display the machine, machine name, date, time, and hardcode the available logins (to help remind me what the username is when I haven't opened up the machine in months).

``` bash
sudo echo "clear" >> /etc/issue
sudo echo "Welcome to \n, running \s \m \v" >> /etc/issue
sudo echo "\n\nToday is \d \t @" >> /etc/issue
# replace <username> with the name of the user you set up earlier
sudo echo "\n\n\l: Login with one of the following users:\nroot\n<username>\n" >> /etc/issue
```

## Sensible Dotfile Configs

> [!cite]- Sources
> - Most tweaks: [Bash Shell Tweaks & Tips - The musings of bluz71](https://bluz71.github.io/2018/03/15/bash-shell-tweaks-tips.html)
> - History completion: [bash - Command-line completion from command history - Unix & Linux Stack Exchange](https://unix.stackexchange.com/a/5367)

- TODO: Tab File Path Completion - [GitHub - sio/bash-complete-partial-path: Enhanced file path completion in bash (like in zsh)](https://github.com/sio/bash-complete-partial-path)

### `.bashrc`

```bash
# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

### HISTORY SETTINGS ###
# Settings to make history completion useful

# Append to the history file, don't overwrite it
shopt -s histappend

# Save multi-line commands as one command
shopt -s cmdhist

# Record each line as it gets issued
PROMPT_COMMAND='history -a'

# Huge history. Doesn't appear to slow things down, so why not?
HISTSIZE=500000
HISTFILESIZE=100000

# Avoid duplicate entries
HISTCONTROL="erasedups:ignoreboth"

# Don't record some commands
export HISTIGNORE="&:[ ]*:exit:ls:bg:fg:history:clear"

# Use standard ISO 8601 timestamp
# %F equivalent to %Y-%m-%d
# %T equivalent to %H:%M:%S (24-hours format)
HISTTIMEFORMAT='%F %T '

### OTHER SETTINGS ###
# prevent file overwrite on stdout redirection (use `>|` to force redirection)
set -o noclobber

# Update window size after every command
shopt -s checkwinsize

# Typing a directory\'s name will make it cd into it
shopt -s autocd

# Automatically fix typos when using cd, fix typos when completing, and automatically expand globs
shopt -s cdspell
shopt -s direxpand dirspell globstar nocaseglob

# Concatenate long paths
PROMPT_DIRTRIM=4

# Enable Dir Colors
test -r ~/.dir_colors && eval $(dircolors -b ~/.dir_colors)

# Source other configurations
source $HOME/.profile
source $HOME/.aliases
source $HOME/.exports
source $HOME/.inputrc
```

### `.inputrc`

``` bash
# Case insensitive completion
set completion-ignore-case on

# Treat hypens and underscores as equivalent in completion
set completion-map-case on

# Ambiguous completion menu
set show-all-if-ambiguous on

# Completes first option before showing menu
set  menu-complete-display-prefix on

# Highlight common matching prefix
set colored-completion-prefix on

# Use <tab> and <shift+tab> for navigating completion menu
TAB:menu-complete
"\e[Z": menu-complete-backward

# Key bindings, up/down arrow searches through history
"\e[A": history-search-backward
"\e[B": history-search-forward
"\eOA": history-search-backward
"\eOB": history-search-forward

# Disable bell, hide control characters, append `/` to symlinked directories
set bell-style none
set echo-control-characters off
set mark-symlinked-directories on

```

> [!tip] System-wide settings
> To make the above settings apply system-wide, place them in `/etc/inputrc`.

## `.aliases`

``` bash
# Smart git alias. `g` outputs `git status`, but adding arguments will change it to `git <arguments>`
alias g='_f() { if [[ $# == 0 ]]; then git status --short --branch; else git "$@"; fi }; _f'
alias grm='git rebase -i main'
alias grr='git rebase -i --root'

# Vim shortcuts
alias vi=lvim
alias vimconfig="lvim ~/.config/lvim/config.lua"

# Confirm unsafe file operations
alias cp='/bin/cp -i'
alias mv='/bin/mv -i'
alias rm='/bin/rm -i'

# Use dots to navigate back, and use `--` to navigate to previous directory
alias -- -='cd -'
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias .....='cd ../../../..'

# Directory listing
alias l="ls -lF --color --classify --human-readable"
alias ll="ls -l"
alias ll.='ls -la'
alias lls='ls -la --sort=size'
alias llt='ls -la --sort=time'

# Print each PATH entry on a separate line
alias path='echo -e ${PATH//:/\\n}'
```

## `.exports`

``` bash
export EDITOR="$HOME/.local/bin/lvim"
export TERMINAL="xterm"
```

## `.Xresources`

``` bash
# Setting terminal font
*faceName: Cozette:pixelsize=12:antialias=false

# Setting .Xresources to use nord colors
*.foreground:   #D8DEE9
*.background:   #2E3440
*.cursorColor:  #D8DEE9
*fading: 35
*fadeColor: #4C566A
*.color0: #3B4252
*.color1: #BF616A
*.color2: #A3BE8C
*.color3: #EBCB8B
*.color4: #81A1C1
*.color5: #B48EAD
*.color6: #88C0D0
*.color7: #E5E9F0
*.color8: #4C566A
*.color9: #BF616A
*.color10: #A3BE8C
*.color11: #EBCB8B
*.color12: #81A1C1
*.color13: #B48EAD
*.color14: #8FBCBB
*.color15: #ECEFF4
```

## Things to Try Later
### Getting Autologin to Work

> [!cite]- Source for the following info
> [terminal - What are the practical differences between Bash and Zsh? - Ask Different](https://apple.stackexchange.com/questions/361870/what-are-the-practical-differences-between-bash-and-zsh)

#### Bash Info
- `.bashrc` - Read on non-login interactive shells
- `.profile` - Read on login shells

#### Zsh Files
- `.zshrc` - Read on all interactive shells
- `.zprofile` - Read in login shells

#### Both Files
- `.inputrc` - Read by all GNU readline library programs

### Login Banner

Seems like you can set the login script to run by placing a script in `/etc/profile.d`

``` bash
sudo xbps-install lolcat
# Download figlet fonts
wget -c https://github.com/xero/figlet-fonts/archive/refs/heads/master.tar.gz -O - | sudo tar -xz --strip-components=1 -C /usr/share/figlet/.

figlet -otcf Georgia11 Puppy | lolcat
```

### Todos
- TODO: Checkout [antiX Linux – Proudly anti-fascist "antiX Magic" in an environment suitable for old and new computers.](https://antixlinux.com/)
- TODO: Checkout [Crunchbangplusplus | Debian Based Minimal Linux Distro](https://crunchbangplusplus.org/)
- TODO: Setup `st` terminal again
- TODO: use [GitHub - starship/starship: ☄🌌️ The minimal, blazing-fast, and infinitely customizable prompt for any shell!](https://github.com/starship/starship) instead of oh-my-zsh
- TODO: Get `exa` [GitHub - ogham/exa: A modern replacement for 'ls'.](https://github.com/ogham/exa)

> [!note] bash-sensible
> Seems like this document is turning into a handful of scripts that are turning into bash-sensible
> [GitHub - mrzool/bash-sensible: An attempt at saner Bash defaults](https://github.com/mrzool/bash-sensible)
