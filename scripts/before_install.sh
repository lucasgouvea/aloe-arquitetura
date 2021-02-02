echo "LS"
ls
echo "Setting NVM"
export NVM_DIR="root/.nvm" 
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

echo "Setting Node version - 12"
nvm use --delete-prefix v12.20.1

echo "Deleting older app version"
pm2 del next
echo "Running npm install"
npm install
echo "Running npm run build"
npm run build