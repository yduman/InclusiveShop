import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppRegistry, Platform } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

if (Platform.OS === 'ios') {
  MaterialCommunityIcons.loadFont();
}

AppRegistry.registerComponent(appName, () => App);
