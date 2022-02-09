# syntax=docker/dockerfile:1

FROM node:16.13.1 as builder
WORKDIR /app
RUN git clone https://github.com/Xiphoseer/lu-explorer.git .
RUN npm install
RUN npx ng build

FROM rust:1.58.1-buster
COPY --from=builder /app/docs /usr/src/explorer/docs

WORKDIR /usr/src/paradox-server
COPY docker-paradox.toml paradox.toml
RUN cargo install --git https://github.com/LUDevNet/ParadoxServer.git --branch main

ENTRYPOINT ["paradox-server"]