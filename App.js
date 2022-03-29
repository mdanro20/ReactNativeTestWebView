/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  useColorScheme
} from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <WebView
      source={{
        uri: 'https://sharecorp.zendesk.com/access/unauthenticated'
      }}
    />
  );
};

export default App;
