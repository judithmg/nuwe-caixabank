import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from './components/Header';
import { isWeb } from './config/global';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';

const App: React.FC = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      {isWeb && <Header />}
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default App;
