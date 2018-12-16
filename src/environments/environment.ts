// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const host = 'http://localhost:4200/';
export const environment = {
  production: false,
  clientId: 'xxxx-baeb-4c65-bec7-67cf938cb30d',
  redirectUrlAfterLogin: host + '/admin/dashboard',
  tenant: 'investmenttracker.onmicrosoft.com',
  postLogoutRedirectUri: host,
  APIEndPoint: 'http://localhost:44326'
};
