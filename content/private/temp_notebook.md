---
id: "temp_notebook"
aliases:
  - "Drive management"
  - "Kernel"
tags: []
---

# Kernel
``` bash
sudo xbps-install intel-ucode
```

# Drive management
- (TODO: move swap partition steps to here)
- Change an ssd drive's entry in /etc/fstab/ from 'defaults' to 'defaults,discard'

# Time 
- Install and enable NTP
``` bash
sudo xbps-install openntpd 
sudo ln -s /etc/sv/openntpd /var/service/.
```

# Power
``` bash
sudo xbps-install acpid tlp
sudo ln -s /etc/sv/acpid /var/service/.
sudo ln -s /etc/sv/tlp /var/service/.
```

# Networking
- TODO: Make user a part of the network group
``` bash
sudo xbps-install dbus NetworkManager
sudo vsv disable dhcpcd
sudo ln -s /etc/sv/dbus /var/service/.
sudo ln -s /etc/sv/NetworkManager /var/service/.

# Intel Graphics
``` bash
sudo xbps-install linux-firmware-intel mesa-dri intel-media-driver
```
# Desktop Environment
``` bash
sudo xbps-install lemonbar noto-fonts-emoji noto-fonts-ttf wmderland xclip xclipboard xf86-video-intel xinit xorg-fonts xorg-minimal xrdb xset xterm xtermcontrol
touch ~/.xinitrc
echo "exec /bin/wmderland" >> ~/.xinitrc
```
# Other important packages
``` bash
# Needed for LunarVim
sudo xbps-install cargo gcc git go lazygit make nodejs python3 python3-dbus python3-devel ripgrep rust rustup unzip 
# Needed for communciating with android
sudo xbps-install android-tools android-udev-rules
# Needed for obsididan editing
sudo xbps-install github-cli hugo
# Quality of life packages
sudo xbps-install bat fd htop lolcat neofetch neovim vsv wget
```

# Lunarvim
``` bash
LV_BRANCH='release-1.3/neovim-0.9' bash <(curl -s https://raw.githubusercontent.com/LunarVim/LunarVim/release-1.3/neovim-0.9/utils/installer/install.sh)
```

# Android USB connection 
(Run an ssh Server on Your Android with Termux)[http://glow.li/posts/run-an-ssh-server-on-your-android-with-termux]
(Access Termux via USB)[http://glow.li/posts/access-termux-via-usb]
``` bash
touch ~/adb_connect.sh
echo "adb forward tcp:8022 tcp:8022 && adb forward tcp:8080 tcp:8080 && ssh localhost -p 8022" >> ~/adb_connect.sh
```

# Consolidated Script
``` bash
sudo xbps-install intel-ucode openntpd acpid tlp dbus NetworkManager linux-firmware-intel mesa-dri intel-media-driver lemonbar noto-fonts-emoji noto-fonts-ttf wmderland xclip xclipboard xf86-video-intel xinit xorg-fonts xorg-minimal xrdb xset xterm xtermcontrol cargo gcc git go lazygit make nodejs python3 python3-dbus python3-devel ripgrep rust rustup unzip android-tools android-udev-rules github-cli hugo bat fd htop lolcat neofetch neovim vsv wget
sudo vsv disable dhcpcd
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
```
