#!/bin/bash

#PRODUCTION
git reset --hard
git checkout master
git pull origin master

npm i
npm run build
pm2 start process.config.js --env production