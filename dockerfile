# syntax=docker/dockerfile:1

FROM node:16.13.1 as builder
WORKDIR /app
RUN git clone https://github.com/Xiphoseer/lu-explorer.git .
RUN npm ci
RUN npx ng build --configuration production

FROM rust:1.58.1-bullseye
COPY --from=builder /app/dist /usr/src/explorer/dist

WORKDIR /usr/src/paradox-server
COPY docker-paradox.toml paradox.toml
RUN cargo install --git https://github.com/LUDevNet/ParadoxServer.git --branch main

ENTRYPOINT ["paradox-server"]