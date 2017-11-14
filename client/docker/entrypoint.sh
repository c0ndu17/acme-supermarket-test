#! /bin/bash

# Check that libs are installed. This is mainly for containers where the source
# code is linked in via a volume.
yarn install

yarn start 1>&2

