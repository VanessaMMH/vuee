import {
  start,
  registerApplication
} from 'single-spa';

const apps = [
  {
    name: 'mf-menu',
    app: () => System.import('mf-menu'),
    activeWhen: location => location.pathname.startsWith('/')
  },
  {
    name: 'mf-header',
    app: () => System.import('mf-header'),
    activeWhen: location => location.pathname.startsWith('/')
  },
  {
    name: 'mf-cars',
    app: () => System.import('mf-cars'),
    activeWhen: '/cars'
  },
  {
    name: 'mf-phones',
    app: () => System.import('mf-phones'),
    activeWhen: '/phones',
  }
]

Promise.all([
  System.import('pubsub-js'),
]).then(() => {
  apps.forEach(app =>  registerApplication(app) );
  start();
});