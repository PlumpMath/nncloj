#!/bin/bash -e
commit_message="$1"

lein cljsbuild clean
lein cljsbuild once release
git add -A
git commit -m "$commit_message"
git push nn master
git push origin master
