# ~/.bashrc: executed by bash(1) for non-login shells.
# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

PS1='[\u@\h \W]\$ '

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

# Disable bell, hide control characters, append `/` to symlinked directories
set bell-style none
set echo-control-characters off
set mark-symlinked-directories on

# Enable Dir Colors
test -r ~/.dir_colors && eval $(dircolors -b ~/.dir_colors)

# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

# Source other configurations
source $HOME/.profile
source $HOME/.aliases
source $HOME/.exports
source $HOME/.inputrc
