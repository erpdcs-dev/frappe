#!/bin/sh
sudo apt-get update
sudo apt-get upgrade
sudo apt install git python3-dev python3-pip redis-server
sudo apt install software-properties-common
sudo apt-get update
sudo apt-get install mariadb-server
sudo mysql_secure_installation
sudo apt-get install mariadb-client-10.3
sudo cp my_addon.cnf /etc/mysql/my.cnf
sudo service mariadb restart
sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm install 14
node -v
sudo apt-get install yarn
npm install -g yarn
npm install node
sudo apt install python3.10-venv
sudo apt-get install xvfb libfontconfig wkhtmltopdf
sudo apt-get install supervisor
sudo apt-get install nginx
sudo pip3 install frappe-bench
bench --version
bench init frappe-bench --frappe-path=https://github.com/erpdcs-dev/frappe.git
cd frappe-bench
bench new-site develop
sudo bench setup production frappe
sudo ln -s /home/frappe/frappe-bench/config/supervisor.conf /etc/supervisor/conf.d/frappe.conf
sudo service supervisor restart




