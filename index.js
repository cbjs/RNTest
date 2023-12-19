/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigator from './Navigator';

// try disable screens, not working
// import { enableScreens } from 'react-native-screens';
// enableScreens(false);

// try disable freeze, not working
import { enableFreeze } from 'react-native-screens';
enableFreeze(false);

AppRegistry.registerComponent(appName, () => Navigator);
