# Quick Start Guide

## Installation

```bash
npm install
```

## Running the App

### Development Mode (All Platforms)
```bash
npm start
```

This will start the Expo development server. You can then:
- Press `i` to open iOS Simulator
- Press `a` to open Android Emulator
- Press `w` to open in web browser
- Scan QR code with Expo Go app on your phone

### Specific Platforms

**iOS:**
```bash
npm run ios
```

**Android:**
```bash
npm run android
```

**Web:**
```bash
npm run web
```

## Features

1. **Multiple Custom Fonts**: Switch between Roboto, Open Sans, and Lato
2. **Live Preview**: See fonts in different sizes (regular, bold, large, small)
3. **Cross-Platform**: Works on iOS, Android, and Web with the same codebase
4. **Responsive Design**: Adapts to different screen sizes

## Adding Your Own Fonts

1. Download `.ttf` font files
2. Place them in `assets/fonts/`
3. Load them in `App.js`:
```javascript
await Font.loadAsync({
  'YourFont-Name': require('./assets/fonts/YourFont.ttf'),
});
```
4. Use them in your components:
```javascript
<Text style={{ fontFamily: 'YourFont-Name' }}>Your Text</Text>
```

## Troubleshooting

**Fonts not loading?**
- Clear cache: `expo start -c`
- Verify font file paths in App.js
- Check console for errors

**App won't start?**
- Delete `node_modules` and run `npm install` again
- Make sure you have the latest Expo CLI
- Check Node.js version (v16+ required)

## Platform-Specific Notes

### iOS
- Requires macOS and Xcode
- iOS Simulator available with Xcode
- Physical device testing via Expo Go app

### Android
- Android Studio recommended
- Works on Windows, macOS, and Linux
- Physical device testing via Expo Go app

### Web
- Works in any modern browser
- No additional setup required
- Run with `npm run web`
