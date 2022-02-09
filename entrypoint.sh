#!/bin/bash

sed -i 's/DOMAIN/'"$DOMAIN"'/g' paradox.toml

exec paradox-server
