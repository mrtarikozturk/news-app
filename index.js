/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
// import Functional from './src1/Functional';
import Rooter from './src20201020/Rooter';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Rooter);
