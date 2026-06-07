export enum AppRoute {
  Root = '/',
  Templates = '/templates',
  Login = '/login',
  Editor = '/templates/:templateId',
  NotFound = '*',
  Error = '/error',
  SingleDevice = '/devices/:deviceId',
}
