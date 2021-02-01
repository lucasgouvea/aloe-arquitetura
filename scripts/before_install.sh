export NVM_DIR="root/.nvm" 
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

npm config delete prefix
npm config set prefix $NVM_DIR/versions/node/v12.20.1

nvm use 12
pm2 del next
npm i