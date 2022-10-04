import * as React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';


export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'http://expo.dev'}}
    />
  );
}

const styles = StyleSheet.create({  }); 