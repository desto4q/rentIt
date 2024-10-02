import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Main from './app/Main';
import { enableScreens } from 'react-native-screens';
enableScreens();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Main/>
    </GestureHandlerRootView>
  );
}