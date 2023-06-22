xbps-install -y void-repo-nonfree void-repo-multilib void-repo-multilib-nonfree 
xbps-install -Sy
xbps-install -y intel-ucode openntpd acpid tlp dbus NetworkManager linux-firmware-intel mesa-dri intel-media-driver lemonbar noto-fonts-emoji noto-fonts-ttf wmderland xclip xclipboard xf86-video-intel xinit xorg-fonts xorg-minimal xrdb xset xterm xtermcontrol cargo gcc git go lazygit make nodejs python3 python3-dbus python3-devel ripgrep rust rustup unzip android-tools android-udev-rules github-cli hugo bat fd htop lolcat-c neofetch neovim vsv wget

# xbps-reconfigure --force 
# 
# vsv disable dhcpcd
# ln -s /etc/sv/dbus /var/service/.
# ln -s /etc/sv/NetworkManager /var/service/.
# ln -s /etc/sv/openntpd /var/service/.
# ln -s /etc/sv/acpid /var/service/.
# ln -s /etc/sv/tlp /var/service/.
# 
# useradd -m -g users -G wheel,audio,video,storage,kvm,cdrom,optical
# passwd <username>
# 
# touch ~/.xinitrc
# echo "exec /bin/wmderland" >> ~/.xinitrc
# echo "xrdb -load ~/.Xresources" >> ~/.xinitrc
# cp /usr/share/examples/wmderland/config ~/.config/wmderland/.
# 
# mkdir -p .local/share/fonts
# curl -L https://github.com/slavfox/Cozette/releases/download/v.1.19.2/cozette.otb > .local/share/fonts/cozette.otb
# mkfontdir .local/share/fonts
# xset +fp $HOME/share/fonts
# fc-cache -f
# 
# touch ~/adb_connect.sh
# echo "adb forward tcp:8022 tcp:8022 && adb forward tcp:8080 tcp:8080 && ssh localhost -p 8022" >> ~/adb_connect.sh
# 
# echo "\n\nLogin with one of the following users:\nroot\npuppy\n" >> /etc/issue
# 
# curl -LO https://github.com/arcticicestudio/nord-dircolors/releases/download/v0.2.0/dir_colors
# 
# LV_BRANCH='release-1.3/neovim-0.9' bash <(curl -s https://raw.githubusercontent.com/LunarVim/LunarVim/release-1.3/neovim-0.9/utils/installer/install.sh)
