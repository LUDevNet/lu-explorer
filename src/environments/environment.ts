// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  data: {
    apiUrl: "https://lu.lcdruniverse.org/explorer/api/"
  },
  firebase: {
    apiKey: "AIzaSyCxUJm4DFGfimoeGKPGT7-9f7gD0frJZ64",
    authDomain: "lu-explorer.firebaseapp.com",
    databaseURL: "https://lu-explorer.firebaseio.com",
    projectId: "lu-explorer",
    storageBucket: "lu-explorer.appspot.com",
    messagingSenderId: "863659386802",
    appId: "1:863659386802:web:d6b83d775b9fd3ec3f66ab",
    measurementId: "G-G44HHQ828G"
  }
};
