# Ride Logger - Custom Font Application

A cross-platform mobile application with custom font support for iOS, Android, and Web platforms.

## Features

- ✅ **Cross-Platform Support**: Works seamlessly on iOS, Android, and Web
- ✅ **Custom Fonts**: Includes multiple Google Fonts (Roboto, Open Sans, Lato)
- ✅ **Font Switching**: Interactive UI to switch between different custom fonts
- ✅ **Live Preview**: See custom fonts in action with different text sizes
- ✅ **Modern UI**: Clean and intuitive interface with Material Design principles

## Included Custom Fonts

1. **Roboto** (Regular & Bold)
2. **Open Sans** (Regular & Bold)
3. **Lato** (Regular & Bold)

All fonts are open-source and free to use from Google Fonts.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (will be installed with dependencies)

For iOS development:
- macOS
- Xcode
- iOS Simulator or physical iOS device

For Android development:
- Android Studio
- Android SDK
- Android Emulator or physical Android device

## Installation

1. Clone the repository:
```bash
git clone https://github.com/saichowdary956-hash/ride_logger.git
cd ride_logger
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Start Development Server
```bash
npm start
```

This will open the Expo Developer Tools in your browser.

### Run on iOS
```bash
npm run ios
```

### Run on Android
```bash
npm run android
```

### Run on Web
```bash
npm run web
```

## Project Structure

```
ride-logger/
├── App.js                      # Main application component
├── app.json                    # Expo configuration
├── package.json                # Dependencies and scripts
├── babel.config.js             # Babel configuration
├── assets/
│   ├── fonts/                  # Custom font files
│   │   ├── Roboto-Regular.ttf
│   │   ├── Roboto-Bold.ttf
│   │   ├── OpenSans-Regular.ttf
│   │   ├── OpenSans-Bold.ttf
│   │   ├── Lato-Regular.ttf
│   │   └── Lato-Bold.ttf
│   ├── icon.png               # App icon
│   ├── splash.png             # Splash screen
│   ├── adaptive-icon.png      # Android adaptive icon
│   └── favicon.png            # Web favicon
└── README.md                   # This file
```

## How It Works

### Font Loading

The application uses `expo-font` to load custom fonts asynchronously:

```javascript
await Font.loadAsync({
  'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  // ... more fonts
});
```

### Font Application

Fonts are applied using the `fontFamily` style property:

```javascript
<Text style={{ fontFamily: 'Roboto-Regular' }}>
  Your text here
</Text>
```

### Cross-Platform Compatibility

- **iOS**: Uses native font rendering
- **Android**: Uses native font rendering
- **Web**: Fonts are embedded and served as web fonts

## Adding Your Own Fonts

1. Add your `.ttf` or `.otf` font files to `assets/fonts/`
2. Update the font loading in `App.js`:

```javascript
await Font.loadAsync({
  'YourFont-Regular': require('./assets/fonts/YourFont-Regular.ttf'),
});
```

3. Apply the font in your components:

```javascript
<Text style={{ fontFamily: 'YourFont-Regular' }}>Text</Text>
```

## Customization

### Changing Colors

Edit the color values in the `styles` object in `App.js`:

```javascript
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6200ee', // Change this
    // ...
  },
  // ...
});
```

### Adding More Fonts

You can add more fonts by:
1. Downloading `.ttf` files from [Google Fonts](https://fonts.google.com/)
2. Placing them in `assets/fonts/`
3. Loading them in the `Font.loadAsync()` call
4. Adding them to the fonts array in the UI

## Platform-Specific Notes

### iOS
- Custom fonts work out of the box with Expo
- No additional configuration needed

### Android
- Custom fonts work seamlessly
- Adaptive icon configured in `app.json`

### Web
- Fonts are automatically converted to web fonts
- Works in all modern browsers
- Responsive design included

## Building for Production

### iOS
```bash
expo build:ios
```

### Android
```bash
expo build:android
```

### Web
```bash
expo build:web
```

For more details, see [Expo Build Documentation](https://docs.expo.dev/build/introduction/).

## Troubleshooting

### Fonts not loading
- Ensure font files are in the correct location (`assets/fonts/`)
- Check that file names match exactly in the code
- Clear cache: `expo start -c`

### App crashes on startup
- Make sure all dependencies are installed: `npm install`
- Clear Metro bundler cache: `expo start -c`

### Web fonts not displaying
- Check browser console for errors
- Ensure fonts are loading before hiding splash screen

## Technologies Used

- **React Native**: Cross-platform mobile framework
- **Expo**: Development platform for React Native
- **expo-font**: Custom font loading
- **expo-splash-screen**: Splash screen management
- **React**: UI library

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions, please open an issue on GitHub.

## Author

saichowdary956-hash

---

Built with ❤️ using React Native and Expo
