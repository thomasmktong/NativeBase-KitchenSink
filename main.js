import Exponent from 'exponent';
import { AppRegistry, StatusBar } from 'react-native';
import setup from './js/setup';

StatusBar.setBarStyle('default');
Exponent.registerRootComponent(setup);
