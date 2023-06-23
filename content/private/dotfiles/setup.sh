#! /usr/bin/env bash

function hidden_read () {
	local output='';
	while IFS= read -p "$prompt" -r -s -n 1 char; do
		if [[ $char == $'\0' ]]; then
			break
		fi
		prompt='*'
		output+="$char"
	done
	echo "$output"
}

function confirm_password () {
	password=''
	while [ -z "$password" ]; do
		printf "%20s" "Enter new password: " > $(tty)
		password1="$(hidden_read)"
		printf "\n%20s" "Confirm password: " > $(tty)
		password2="$(hidden_read)"
		if [ "$password1" = "$password2" ]; then
			password=$password1
			printf "\n%41s\n\n" "Both passwords match." > $(tty)
		else
			printf "\n%66s\n\n" "Sorry, these passwords don't match. Try again." > $(tty)
			continue
		fi
		break
	done
	printf "$password"
}

printf "\n%20s\n" "Creating a new user account."
printf "\n%20s" "Enter your new username: "
read username
# password="$(confirm_password)"
passwd "$username"

xbps-install -y void-repo-nonfree void-repo-multilib void-repo-multilib-nonfree 
xbps-install -Sy
xbps-install -y intel-ucode linux-firmware-intel mesa-dri intel-media-driver 
xbps-reconfigure --force 
xbps-install -y acpid android-tools android-udev-rules bat cargo curl dbus fd gcc git github-cli go htop hugo lazygit lemonbar lolcat-c make neofetch neovim NetworkManager nodejs noto-fonts-emoji noto-fonts-ttf openntpd python3 python3-dbus python3-devel ripgrep rust rustup rxvt-unicode rxvt-unicode-terminfo tlp unzip vsv wget wmderland xclip xclipboard xf86-video-intel xinit xorg-fonts xorg-minimal xrdb xset

# skip grub screen
cat /etc/default/grub | sed -e "s/#GRUB_HIDDEN_TIMEOUT=0/GRUB_HIDDEN_TIMEOUT=0/" > temp_grub
cat ./temp_grub | sed -e "s/GRUB_TIMEOUT=5/GRUB_TIMEOUT=0/" > temp_grub
mv ./temp_grub /etc/default/grub
update-grub

# Autologin to X and wmderland
cp -R /etc/sv/agetty-tty1/ /etc/sv/agetty-autologin-tty1
cat /etc/sv/agetty-autologin-tty1/conf | sed -e "s/GETTY_ARGS=\"--noclear\"/GETTY_ARGS=\"--autologin ${username} --noclear\"/" > temp_tty1
mv ./temp_tty1 /etc/sv/agetty-autologin-tty1/conf 
rm /var/service/agetty-tty1/
ln -s /etc/sv/agetty-autologin-tty1 /var/service
if [ ! -a /etc/skel/.bash_profile ]; then echo '$include /etc/inputrc' > /etc/skel/.bash_profile; fi- 
echo '# autologin on tty1' >> /etc/skel/.bash_profile
echo 'if [ -z "$DISPLAY" ] && [ "$(fgconsole)" -eq 1 ]; then' >> /etc/skel/.bash_profile
echo '  exec startx' >> /etc/skel/.bash_profile
echo 'fi' >> /etc/skel/.bash_profile

ln -s /etc/sv/dbus /var/service/.
ln -s /etc/sv/NetworkManager /var/service/.
ln -s /etc/sv/openntpd /var/service/.
ln -s /etc/sv/acpid /var/service/.
ln -s /etc/sv/tlp /var/service/.

useradd -m -g users -G wheel,audio,video,network,storage,kvm,cdrom,optical $username
echo "${username}:${password}" | chpasswd

touch ~/.xinitrc
echo "exec /bin/wmderland" >> ~/.xinitrc
echo "xrdb -load ~/.Xresources" >> ~/.xinitrc
mkdir -p .config/wmderland/
cp /usr/share/examples/wmderland/config ~/.config/wmderland/.

mkdir -p /usr/share/fonts/cozette/
curl -L https://github.com/slavfox/Cozette/releases/download/v.1.19.2/cozette.otb > /usr/share/fonts/cozette/cozette.otb
mkfontdir /usr/share/fonts/cozette/
fc-cache -f
xset +fp /usr/share/fonts/cozette/

touch /etc/skel/adb_connect.sh
echo "adb forward tcp:8022 tcp:8022 && adb forward tcp:8080 tcp:8080 && ssh localhost -p 8022" >> /etc/skel/adb_connect.sh

NL=$'\n'
echo "${NL}${N}Login with one of the following users:${NL}  - root${NL}  - ${username}${NL}" >> /etc/issue

curl -LO https://github.com/arcticicestudio/nord-dircolors/releases/download/v0.2.0/dir_colors > /etc/skel/.dir_colors

LV_BRANCH='release-1.3/neovim-0.9' bash <(curl -s https://raw.githubusercontent.com/LunarVim/LunarVim/release-1.3/neovim-0.9/utils/installer/install.sh)
cp -r .local /etc/skel/.
