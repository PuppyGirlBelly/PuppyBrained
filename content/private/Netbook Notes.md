---
title: Todos
created: Tuesday, June 20th 2023, 11:37:29 am
modified: Tuesday, June 20th 2023, 4:52:45 pm
aliases:
  - Todos
---
# Todos

- TODO: Checkout [antiX Linux – Proudly anti-fascist "antiX Magic" in an environment suitable for old and new computers.](https://antixlinux.com/)
- TODO: Checkout [Crunchbangplusplus | Debian Based Minimal Linux Distro](https://crunchbangplusplus.org/)
- TODO: Setup `st` terminal again
- TODO: use [GitHub - starship/starship: ☄🌌️ The minimal, blazing-fast, and infinitely customizable prompt for any shell!](https://github.com/starship/starship) instead of oh-my-zsh
- TODO: Get `exa` [GitHub - ogham/exa: A modern replacement for 'ls'.](https://github.com/ogham/exa)

> [!note] bash-sensible
> Seems like this document is turning into a handful of scripts that are turning into bash-sensible
> [GitHub - mrzool/bash-sensible: An attempt at saner Bash defaults](https://github.com/mrzool/bash-sensible)

## Pre-Setup

Set the BIOS clock to UTC time

## Setup
### Create Swap Space

A 3-4GB swap partition should have been made as a part of the install process.

``` bash
# If a swap partition has not been formatted, then run `sudo mkswap /dev/sdxy`
sudo blkid | grep swap
swapon /dev/sdxy
sudo echo "UUID=<device_UUID> none swap defaults 0 0" >> /etc/fstab
```

### Install Repos

``` bash
sudo xbps-install void-repo-nonfree
sudo xbps-install void-repo-multilib
sudo xbps-install void-repo-multilib-nonfree
```

### Install Intel Microcode and Use Stable Linux Kernel

``` bash
sudo xbps-install linux-lts-headers linux-lts
# TODO: Find out how to do the following: "then you can add `linux` and `linux-headers` to an `ignorepkg` entry in [xbps.d(5)](https://man.voidlinux.org/xbps.d) and uninstall those packages.""
sudo xbps-remove linux-headers linux
sudo xbps-reconfigure --force 
```

### Add Another User

``` bash
# The '-m' flag creates the user home directory; copying it from /etc/skel
# The '-g' flag makes the user's primary group the listed group
# The '-G' flag makes the user's secondary groups the following roups
sudo useradd -m -g users -G wheel,audio,video,storage,kvm,cdrom,optical
sudo passwd <username>
```

TODO: Continue reading docs from here; [Solid State Drives - Void Linux Handbook](https://docs.voidlinux.org/config/ssd.html)

### Sensible Bash Config
#### Before Anything Else

```bash
echo "# If not running interactively, don't do anything" >> ~/.bashrc
echo "case $- in" >> ~/.bashrc
echo "    *i*) ;;" >> ~/.bashrc
echo "      *) return;;" >> ~/.bashrc
echo "esac" >> ~/.bashrc
```

#### Zsh-like Completion

> [!cite]- Sources
> - Most tweaks: [Bash Shell Tweaks & Tips - The musings of bluz71](https://bluz71.github.io/2018/03/15/bash-shell-tweaks-tips.html)
> - History completion: [bash - Command-line completion from command history - Unix & Linux Stack Exchange](https://unix.stackexchange.com/a/5367)
> - Script Format: [Can I make Tab auto-completion case-insensitive in Bash? - Ask Ubuntu](https://askubuntu.com/a/87066)

Run the following script to make your completion settings match that of `zsh`.

``` bash
if [ ! -a ~/.inputrc ]; then echo '$include /etc/inputrc' > ~/.inputrc; fi- 

echo '# Case insensitive completion' >> ~/.inputrc
echo 'set completion-ignore-case on' >> ~/.inputrc

echo '# Treat hypens and underscores as equivalent in completion' >> ~/.inputrc
echo 'set completion-map-case on' >> ~/.inputrc

echo '# Ambiguous completion menu' >> ~/.inputrc
echo 'set show-all-if-ambiguous on' >> ~/.inputrc

echo '# Completes first option before showing menu' >> ~/.inputrc
echo 'set  menu-complete-display-prefix on' >> ~/.inputrc

echo '# Highlight common matching prefix' >> ~/.inputrc
echo 'set colored-completion-prefix on' >> ~/.inputrc

echo '# Use <tab> and <shift+tab> for navigating completion menu' >> ~/.inputrc
echo 'TAB:menu-complete' >> ~/.inputrc
echo '"\e[Z": menu-complete-backward' >> ~/.inputrc

echo '# Key bindings, up/down arrow searches through history' >> ~/.inputrc
echo '"\e[A": history-search-backward' >> ~/.inputrc
echo '"\e[B": history-search-forward' >> ~/.inputrc
echo '"\eOA": history-search-backward' >> ~/.inputrc
echo '"\eOB": history-search-forward' >> ~/.inputrc
```

> [!tip] System-wide settings
> To make the above settings apply system-wide, replace `~/.inputrc` with `/etc/inputrc` tto place these settings in there instead

- Tab File Path Completion: [GitHub - sio/bash-complete-partial-path: Enhanced file path completion in bash (like in zsh)](https://github.com/sio/bash-complete-partial-path)

#### History Settings

These settings are vital to help history search become useful;

``` bash
echo "# Append to the history file, don't overwrite it" >> ~/.bashrc
echo "shopt -s histappend" >> ~/.bashrc

echo "# Save multi-line commands as one command" >> ~/.bashrc
echo "shopt -s cmdhist" >> ~/.bashrc

echo "# Record each line as it gets issued" >> ~/.bashrc
echo "PROMPT_COMMAND='history -a'" >> ~/.bashrc

echo "# Huge history. Doesn't appear to slow things down, so why not?" >> ~/.bashrc
echo "HISTSIZE=500000" >> ~/.bashrc
echo "HISTFILESIZE=100000" >> ~/.bashrc

echo "# Avoid duplicate entries" >> ~/.bashrc
echo "HISTCONTROL="erasedups:ignoreboth"" >> ~/.bashrc

echo "# Don't record some commands" >> ~/.bashrc
echo "export HISTIGNORE="&:[ ]*:exit:ls:bg:fg:history:clear"" >> ~/.bashrc

echo "# Use standard ISO 8601 timestamp" >> ~/.bashrc
echo "# %F equivalent to %Y-%m-%d" >> ~/.bashrc
echo "# %T equivalent to %H:%M:%S (24-hours format)" >> ~/.bashrc
echo "HISTTIMEFORMAT='%F %T '" >> ~/.bashrc
```

#### Additional Bash Settings

``` bash
echo '# prevent file overwrite on stdout redirection (use `>|` to force redirection)' >> ~/.bashrc
echo 'set -o noclobber' >> ~/.bashrc

echo '# Update window size after every command' >> ~/.bashrc
echo 'shopt -s checkwinsize' >> ~/.bashrc

echo '# Typing a directory\'s name will make it cd into it' >> ~/.bashrc
echo 'shopt -s autocd' >> ~/.bashrc

echo '# Automatically fix typos when using cd, fix typos when completing, and automatically expand globs' >> ~/.bashrc
echo 'shopt -s cdspell' >> ~/.bashrc
echo 'shopt -s direxpand dirspell globstar nocaseglob' >> ~/.bashrc

echo '# Concatenate long paths' >> ~/.bashrc
echo 'PROMPT_DIRTRIM=4' >> ~/.bashrc

echo '# Disable bell, hide control characters, append `/` to symlinked directories' >> ~/.inputrc
echo 'set bell-style none' >> ~/.inputrc
echo 'set echo-control-characters off' >> ~/.inputrc
echo 'set mark-symlinked-directories on' >> ~/.inputrc

echo "# Enable Dir Colors" >> ~/.bashrc
echo "test -r ~/.dir_colors && eval $(dircolors -b ~/.dir_colors)" >> ~/.bashrc
echo "" >> ~/.bashrc

echo "# Source other configurations" >> ~/.bashrc
echo "source $HOME/.profile" >> ~/.bashrc
echo "source $HOME/.aliases" >> ~/.bashrc
echo "source $HOME/.exports" >> ~/.bashrc
echo "source $HOME/.inputrc" >> ~/.bashrc
```

#### Useful Aliases

``` bash
if [ ! -a ~/.aliases ]; then echo '# Aliases' > ~/.aliases; fi- 

echo '# Smart git alias; `g` does `git status` and adding arguments will change it to `git <arguments>`' >> ~/.inputrc
echo "alias g='_f() { if [[ $# == 0 ]]; then git status --short --branch; else git "$@"; fi }; _f'" >> ~/.aliases
echo "alias grm='git rebase -i main'" >> ~/.aliases
echo "alias grr='git rebase -i --root'" >> ~/.aliases

echo '# Vim shortcuts' >> ~/.inputrc
echo "alias vi=lvim" >> ~/.aliases
echo "alias vimconfig="lvim ~/.config/lvim/config.lua"" >> ~/.aliases

echo '# Confirm unsafe file operations' >> ~/.inputrc
echo "alias cp='/bin/cp -i'" >> ~/.aliases
echo "alias mv='/bin/mv -i'" >> ~/.aliases
echo "alias rm='/bin/rm -i'" >> ~/.aliases

echo "# Use dots to navigate back, and use `--` to navigate to previous directory" >> ~/.aliases
echo "alias -- -='cd -'" >> ~/.aliases
echo "alias ..='cd ..'" >> ~/.aliases
echo "alias ...='cd ../..'" >> ~/.aliases
echo "alias ....='cd ../../..'" >> ~/.aliases
echo "alias .....='cd ../../../..'" >> ~/.aliases

echo "# Directory listing" >> ~/.aliases
echo "alias l="ls -lF --color --classify --human-readable"" >> ~/.aliases
echo "alias ll="ls -l"" >> ~/.aliases
echo "alias ll.='ls -la'" >> ~/.aliases
echo "alias lls='ls -la --sort=size'" >> ~/.aliases
echo "alias llt='ls -la --sort=time'" >> ~/.aliases

echo "# Print each PATH entry on a separate line" >> ~/.aliases
echo "alias path='echo -e ${PATH//:/\\n}'" >> ~/.aliases
```

#### Useful Exports

``` bash
if [ ! -a ~/.exports ]; then echo '# Exports' > ~/.exports; fi- 

echo "export EDITOR="$HOME/.local/bin/lvim"" >> ~/.exports
echo "export TERMINAL="xterm"" >> ~/.exports
```

### Scripts for other Config
- Installing Cozette font

``` bash
mkdir -p .local/share/fonts
curl -L https://github.com/slavfox/Cozette/releases/download/v.1.19.2/cozette.otb > .local/share/fonts/cozette.otb
mkfontdir .local/share/fonts
xset +fp $HOME/share/fonts
fc-cache -f

# Add font to .Xresources
echo "*faceName: Cozette:pixelsize=12:antialias=false" >> ~/.Xresources
```

- Setting.Xresources to use Nord Colours

``` bash
echo "*.foreground:   #D8DEE9" >> ~/.Xresources
echo "*.background:   #2E3440" >> ~/.Xresources
echo "*.cursorColor:  #D8DEE9" >> ~/.Xresources
echo "*fading: 35" >> ~/.Xresources
echo "*fadeColor: #4C566A" >> ~/.Xresources
echo "*.color0: #3B4252" >> ~/.Xresources
echo "*.color1: #BF616A" >> ~/.Xresources
echo "*.color2: #A3BE8C" >> ~/.Xresources
echo "*.color3: #EBCB8B" >> ~/.Xresources
echo "*.color4: #81A1C1" >> ~/.Xresources
echo "*.color5: #B48EAD" >> ~/.Xresources
echo "*.color6: #88C0D0" >> ~/.Xresources
echo "*.color7: #E5E9F0" >> ~/.Xresources
echo "*.color8: #4C566A" >> ~/.Xresources
echo "*.color9: #BF616A" >> ~/.Xresources
echo "*.color10: #A3BE8C" >> ~/.Xresources
echo "*.color11: #EBCB8B" >> ~/.Xresources
echo "*.color12: #81A1C1" >> ~/.Xresources
echo "*.color13: #B48EAD" >> ~/.Xresources
echo "*.color14: #8FBCBB" >> ~/.Xresources
echo "*.color15: #ECEFF4" >> ~/.Xresources
```

- Adding message to shell login

```
sudo echo "\n\nLogin with one of the following users:\nroot\npuppy\n" >> /etc/issue
```

- Setting Nord Dircolors

```
curl -LO https://github.com/arcticicestudio/nord-dircolors/releases/download/v0.2.0/dir_colors
```

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
