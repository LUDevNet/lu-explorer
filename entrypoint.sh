#!/bin/bash

sed -i 's/DOMAIN/'"$DOMAIN"'/g' paradox.toml
sed -i 's/USERNAME/'"$USERNAME"'/g' paradox.toml
sed -i 's/PASSWORD/'"$PASSWORD"'/g' paradox.toml

exec paradox-server
