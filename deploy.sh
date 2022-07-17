#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'
#git push -f https://github.com/jenPlaza/hikers.git main:gh-pages
#git push -f git@github.com:jenPlaza/hikers.git master:gh-pages
#git push -f git@github.com:jenPlaza/hikers.git master
git push -f https://github.com/jenPlaza/hikers.git origin master


#git push

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages
cd -