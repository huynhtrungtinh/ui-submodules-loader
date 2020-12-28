#!/bin/bash

echo "Regenerate Application Configuration"
STATIC_ARTIFACT=./public/$(ls ./public/main.*.js|awk -F / '{print $5}')
envsub --syntax handlebars $STATIC_ARTIFACT $STATIC_ARTIFACT

cat package.json

npm start