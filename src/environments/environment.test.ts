const host = 'https://investmenttrackerapp.azurewebsites.net';

export const environment = {
  production: true,
  clientId: 'xxxx-ca8c-46e0-8351-f1bb53ee9ab4',
  redirectUrlAfterLogin: host + '/admin/dashboard',
  tenant: 'investmenttracker.onmicrosoft.com',
  postLogoutRedirectUri: host,
  APIEndPoint: 'https://investmenttrackerAPI.azurewebsites.net'
};
