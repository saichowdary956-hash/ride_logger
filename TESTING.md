# Testing Guide

This guide explains how to test the custom font application on different platforms.

## Prerequisites Testing

Before testing on specific platforms, verify the installation:

```bash
# Check Node version
node --version  # Should be v16 or higher

# Check npm version
npm --version

# Install dependencies
npm install

# Verify no errors in installation
```

## Testing on Web

Web is the easiest platform to test:

```bash
npm run web
```

This will:
1. Start the development server
2. Open your default browser automatically
3. Display the app at http://localhost:19006

**What to test:**
- [ ] All fonts load correctly
- [ ] Font switching works
- [ ] Text displays properly in different sizes
- [ ] UI is responsive
- [ ] No console errors

**Expected behavior:**
- Fonts should load within 2-3 seconds
- Switching fonts should update all preview text immediately
- All text should be readable and properly styled

## Testing on iOS Simulator

### Requirements:
- macOS computer
- Xcode installed
- iOS Simulator

### Steps:
```bash
npm run ios
```

Or from the Expo dev menu:
1. `npm start`
2. Press `i` for iOS

**What to test:**
- [ ] Custom fonts render correctly
- [ ] Font weights (regular/bold) work
- [ ] Text is crisp and clear
- [ ] App icon displays
- [ ] Splash screen shows

**Troubleshooting:**
- If simulator doesn't open: Check Xcode installation
- If fonts don't load: Clear cache with `expo start -c`

## Testing on Android Emulator

### Requirements:
- Android Studio
- Android SDK
- Android Emulator configured

### Steps:
```bash
npm run android
```

Or from the Expo dev menu:
1. `npm start`
2. Press `a` for Android

**What to test:**
- [ ] Custom fonts render correctly
- [ ] Font switching is smooth
- [ ] Material Design guidelines followed
- [ ] Adaptive icon displays
- [ ] Performance is acceptable

**Troubleshooting:**
- If emulator doesn't start: Open Android Studio and start it manually
- If app doesn't install: Check ADB connection

## Testing on Physical Devices

### Using Expo Go App

1. Install Expo Go from App Store (iOS) or Play Store (Android)
2. Run `npm start`
3. Scan the QR code with:
   - iOS: Camera app
   - Android: Expo Go app

**What to test:**
- [ ] Fonts work on real device
- [ ] Touch interactions are responsive
- [ ] Performance is good
- [ ] No crashes or freezes

## Manual Testing Checklist

### Font Loading
- [ ] All 6 fonts load successfully (3 regular + 3 bold)
- [ ] No font loading errors in console
- [ ] Splash screen hides after fonts load

### Font Display
- [ ] Roboto displays correctly (regular and bold)
- [ ] Open Sans displays correctly (regular and bold)
- [ ] Lato displays correctly (regular and bold)
- [ ] System font works as fallback

### UI Functionality
- [ ] Font selector buttons work
- [ ] Active font is highlighted
- [ ] Preview text updates when font changes
- [ ] All text sizes display correctly (large, regular, small)

### Cross-Platform Consistency
- [ ] Fonts look similar across platforms
- [ ] UI layout is consistent
- [ ] Colors match across platforms

## Performance Testing

### Metrics to check:
- Initial load time: Should be < 5 seconds
- Font switching: Should be instant
- Memory usage: Should be reasonable (< 100MB)
- No memory leaks when switching fonts repeatedly

### How to test:
1. Open dev tools (web) or profiler (native)
2. Monitor memory and performance
3. Switch fonts multiple times
4. Check for memory growth

## Automated Testing (Optional)

While not required for this implementation, you can add tests:

```javascript
// Example test structure (not implemented)
describe('Font Loading', () => {
  it('should load all custom fonts', async () => {
    // Test font loading
  });
  
  it('should switch fonts when button pressed', () => {
    // Test font switching
  });
});
```

## Common Issues and Solutions

### Issue: Fonts don't load
**Solution:** 
- Clear Metro bundler cache: `expo start -c`
- Verify font file paths
- Check font file formats (.ttf)

### Issue: App crashes on startup
**Solution:**
- Check all dependencies installed: `npm install`
- Verify React Native version compatibility
- Check expo-font version

### Issue: Fonts look different on different platforms
**Expected:** Some variation is normal due to platform rendering engines
**Solution:** Adjust font sizes if needed for consistency

### Issue: Slow performance
**Solution:**
- Fonts should only be loaded once
- Check that fonts aren't being reloaded on every render
- Profile the app to find bottlenecks

## Testing Report Template

Use this template to document your testing:

```
Platform: [iOS/Android/Web]
Date: [Date]
Tester: [Name]

✅ Fonts loaded successfully
✅ Font switching works
✅ UI displays correctly
✅ No errors in console
⚠️  [Any issues found]

Notes: [Additional observations]
```

## Continuous Testing

For ongoing development:
1. Test after any code changes
2. Test on at least 2 platforms before committing
3. Keep an eye on console for warnings/errors
4. Test on both simulator and real device periodically
