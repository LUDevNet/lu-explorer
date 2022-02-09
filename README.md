# LuExplorer

## General

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Prerequisites

- [`git`](https://git-scm.com/)
- [`npm`](https://npmjs.com) to build the app
- [`cargo`](https://doc.rust-lang.org/cargo/) to build the API server
- A copy of a LEGO Universe client.

## Development setup

Generally, LU-Explorer needs a datasource, which is provided by the [Paradox Server](https://github.com/xiphoseer/lu-res-api-server). That server provides the data from the game database to the web interface, which makes it a core
component of this app.

This needs a `paradox.toml` config file in the working directory – a minimal example is provided [here](https://github.com/Xiphoseer/lu-explorer/blob/main/paradox.toml). The most important part is to point the `explorer_spa` key to the `docs` folder in this repo and the `cdclient` and `locale` key to a copy of `CDClient.fdb` and `locale.xml` respectively.

1. install `npm` and `cargo` (via <https://rustup.rs>)
2. install the API server binary with

   ```shell
   $ cargo install --git https://github.com/Xiphoseer/lu-res-api-server.git --branch main
   ```
3. Then, clone this repo and create `lu-res` and `client` folders next to it

   ```shell
   $ git clone https://github.com/Xiphoseer/lu-explorer.git
   $ mkdir lu-res client
   ```
4. Put at least `locale/locale.xml` and `res/cdclient.fdb` from an LU client into this `client` folder
5. You can now build the `lu-explorer` web-app continuously with
   ```shell
   $ cd lu-explorer
   $ npm install
   $ ng build --watch
   ```
6. Finally, run the API server, which will also serve the web-app
   ```shell
   $ RUST_LOG=info paradox-server
   ```

For now, you need to restart that server whenever you change the `lu-explorer` source.
([Issue #1](https://github.com/Xiphoseer/lu-res-api-server/issues/1))

## Minimal setup

The alternative is to:

1. point `data.apiUrl` in `src/environments/environment.ts` to an existing API server.
2. point `/lu-res` in `src/proxy.conf.json` to a matching version of `lu-res`.

Then run

```shell
$ npm install
$ ng serve
```

## Docker Setup


1. Build:
  `docker build -t paradox-server`
2. Deploy:

Replace the paths on the left of the mappings to reflect your system:
```docker
  docker run -it --rm \
    --name paradox-server \
    -v /path/to/client:/luclient \
    -v /path/to/client:/usr/src/paradox-server/client \
    -v /path/to/cache:/cache/lu-res \
    -p 3030:3030 \
    paradox-server
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `docs/` directory. Use the `--configuration production` flag for a production build. For building to github pages also use `--base-href=/lu-explorer/`.

Usually, the `ng build --configuration production` command is used.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
