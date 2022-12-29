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
git push -f https://github.com/jenplaza/hikers.git master
#git push -f git@github.com:jenplaza/hikers.git master:gh-pages
#git push
cd -