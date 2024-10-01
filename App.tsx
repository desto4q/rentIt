import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Main from './app/Main';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Main/>
    </GestureHandlerRootView>
  );
}