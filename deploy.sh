#!/bin/bash

# Build the project
npm run build

# Create a temporary directory for deployment
mkdir -p deploy
cp -r out/* deploy/

# Switch to the gh-pages branch
git checkout gh-pages || git checkout -b gh-pages

# Remove all files except .git
find . -maxdepth 1 ! -name 'deploy' ! -name '.git' ! -name '.' -exec rm -rf {} +

# Copy the built files
cp -r deploy/* .
rm -rf deploy

# Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# Switch back to main branch
git checkout main 