let homeModule = angular.module('demo.home', []);

import HomeConfig from './home.config';
import HomeController from './home.controller';
require('./home.scss');

homeModule.config(HomeConfig);
homeModule.controller('HomeController', HomeController);

export default homeModule = homeModule.name
