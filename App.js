import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [currentFont, setCurrentFont] = useState('System');

  useEffect(() => {
    async function prepare() {
      try {
        // Load custom fonts
        await Font.loadAsync({
          'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
          'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
          'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
          'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
          'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
          'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const fonts = [
    { name: 'System', regular: null, bold: null },
    { name: 'Roboto', regular: 'Roboto-Regular', bold: 'Roboto-Bold' },
    { name: 'OpenSans', regular: 'OpenSans-Regular', bold: 'OpenSans-Bold' },
    { name: 'Lato', regular: 'Lato-Regular', bold: 'Lato-Bold' },
  ];

  const currentFontConfig = fonts.find(f => f.name === currentFont);

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Custom Font Application</Text>
        <Text style={styles.subtitle}>Cross-Platform (iOS, Android, Web)</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select a Font:</Text>
          <View style={styles.fontButtons}>
            {fonts.map((font) => (
              <TouchableOpacity
                key={font.name}
                style={[
                  styles.fontButton,
                  currentFont === font.name && styles.fontButtonActive
                ]}
                onPress={() => setCurrentFont(font.name)}
              >
                <Text style={[
                  styles.fontButtonText,
                  currentFont === font.name && styles.fontButtonTextActive
                ]}>
                  {font.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preview:</Text>
          
          <Text style={[
            styles.previewText,
            currentFontConfig.regular && { fontFamily: currentFontConfig.regular }
          ]}>
            The quick brown fox jumps over the lazy dog.
          </Text>

          <Text style={[
            styles.previewText,
            styles.previewBold,
            currentFontConfig.bold && { fontFamily: currentFontConfig.bold }
          ]}>
            The quick brown fox jumps over the lazy dog. (Bold)
          </Text>

          <Text style={[
            styles.previewLarge,
            currentFontConfig.regular && { fontFamily: currentFontConfig.regular }
          ]}>
            Large Text Preview
          </Text>

          <Text style={[
            styles.previewSmall,
            currentFontConfig.regular && { fontFamily: currentFontConfig.regular }
          ]}>
            Small text preview with custom font
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Supported Platforms:</Text>
          <View style={styles.platformList}>
            <Text style={styles.platformItem}>✓ iOS</Text>
            <Text style={styles.platformItem}>✓ Android</Text>
            <Text style={styles.platformItem}>✓ Web</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200ee',
    padding: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#e0e0e0',
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  section: {
    backgroundColor: '#ffffff',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  fontButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  fontButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  fontButtonActive: {
    backgroundColor: '#6200ee',
  },
  fontButtonText: {
    color: '#333',
    fontSize: 14,
  },
  fontButtonTextActive: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  previewText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    lineHeight: 24,
  },
  previewBold: {
    fontWeight: 'bold',
  },
  previewLarge: {
    fontSize: 28,
    color: '#333',
    marginBottom: 15,
  },
  previewSmall: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  platformList: {
    gap: 10,
  },
  platformItem: {
    fontSize: 16,
    color: '#4caf50',
    marginBottom: 5,
  },
});
