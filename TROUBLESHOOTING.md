# Troubleshooting Guide

Common issues and their solutions for the Custom Font Application.

## Installation Issues

### Issue: `npm install` fails
**Symptoms:**
- Error messages during installation
- Missing dependencies

**Solutions:**
1. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

2. Delete node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. Use a different Node version (try Node 18 or 20):
   ```bash
   nvm use 18
   npm install
   ```

---

## Font Loading Issues

### Issue: Fonts don't load / "Font is not loaded" error
**Symptoms:**
- Text displays in system font
- Console error about missing fonts
- App shows warning about fonts

**Solutions:**
1. Clear Metro bundler cache:
   ```bash
   expo start -c
   ```

2. Verify font files exist:
   ```bash
   ls -la assets/fonts/
   ```

3. Check font file paths in App.js match actual filenames

4. Restart the development server completely:
   ```bash
   # Stop the server (Ctrl+C)
   expo start -c
   ```

### Issue: Fonts load on one platform but not another
**Symptoms:**
- Works on web but not iOS
- Works on Android but not web

**Solutions:**
1. Platform-specific cache clear:
   - iOS: Delete app from simulator and reinstall
   - Android: `adb uninstall com.yourcompany.ridelogger`
   - Web: Hard refresh (Cmd+Shift+R or Ctrl+Shift+R)

2. Verify font format compatibility (use .ttf for best compatibility)

---

## Runtime Issues

### Issue: App crashes on startup
**Symptoms:**
- White screen
- Immediate crash
- "Unable to load script" error

**Solutions:**
1. Check all dependencies are installed:
   ```bash
   npm install
   ```

2. Clear watchman cache (macOS/Linux):
   ```bash
   watchman watch-del-all
   ```

3. Reset Metro bundler:
   ```bash
   rm -rf /tmp/metro-*
   expo start -c
   ```

4. Check for JavaScript syntax errors:
   ```bash
   node -c App.js
   ```

### Issue: Splash screen never hides
**Symptoms:**
- App stuck on splash screen
- Fonts loading forever

**Solutions:**
1. Check console for font loading errors
2. Verify internet connection (for CDN fonts)
3. Check font file sizes aren't corrupted:
   ```bash
   ls -lh assets/fonts/
   ```

---

## Platform-Specific Issues

### iOS Issues

#### Issue: "Could not connect to development server"
**Solutions:**
1. Ensure iPhone/iPad and computer on same network
2. Restart Expo development server
3. Try restarting iOS Simulator

#### Issue: Xcode build fails
**Solutions:**
1. Update Xcode to latest version
2. Clean build folder in Xcode (Cmd+Shift+K)
3. Delete derived data:
   ```bash
   rm -rf ~/Library/Developer/Xcode/DerivedData
   ```

#### Issue: Fonts look different on iOS
**This is normal**: iOS uses different font rendering. Adjust font sizes if needed.

### Android Issues

#### Issue: "Unable to load script from assets"
**Solutions:**
1. Ensure Metro bundler is running
2. Restart ADB server:
   ```bash
   adb kill-server
   adb start-server
   ```

3. Rebuild app:
   ```bash
   npm run android
   ```

#### Issue: Emulator won't start
**Solutions:**
1. Open Android Studio
2. Open AVD Manager
3. Start emulator manually
4. Then run `npm run android`

#### Issue: "INSTALL_FAILED_INSUFFICIENT_STORAGE"
**Solutions:**
1. Clear space on emulator
2. Wipe data and restart emulator
3. Create new emulator with more storage

### Web Issues

#### Issue: Fonts don't display in browser
**Solutions:**
1. Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)
2. Clear browser cache
3. Check browser console for CORS errors
4. Try different browser

#### Issue: "Module not found" errors
**Solutions:**
1. Install missing dependencies:
   ```bash
   npm install
   ```

2. Add missing web dependencies:
   ```bash
   npx expo install @expo/metro-runtime
   ```

#### Issue: Slow loading on web
**Solutions:**
1. Font files are large (~2.8 MB total) - this is normal
2. Consider font subsetting for production
3. Use loading indicators
4. Optimize images

---

## Development Issues

### Issue: Hot reload not working
**Solutions:**
1. Restart development server
2. Enable Fast Refresh in settings
3. Clear cache and restart:
   ```bash
   expo start -c
   ```

### Issue: Changes not reflecting
**Solutions:**
1. Save all files (Cmd+S / Ctrl+S)
2. Check file watcher limits (Linux):
   ```bash
   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
   sudo sysctl -p
   ```

3. Restart development server with cache clear

---

## Performance Issues

### Issue: App runs slowly
**Solutions:**
1. Enable production mode for testing:
   ```bash
   expo start --no-dev --minify
   ```

2. Reduce number of fonts loaded
3. Lazy load fonts if possible
4. Test on actual device (not just simulator)

### Issue: High memory usage
**Solutions:**
1. Profile the app with React DevTools
2. Check for memory leaks in font switching
3. Ensure fonts are loaded only once (not on every render)

---

## Build Issues

### Issue: EAS build fails
**Solutions:**
1. Check build logs for specific errors
2. Verify all dependencies have compatible versions
3. Update to latest Expo SDK:
   ```bash
   expo upgrade
   ```

4. Check eas.json configuration

### Issue: Build succeeds but app won't install
**Solutions:**
1. Check device iOS/Android version compatibility
2. Verify signing certificates (iOS)
3. Check package name doesn't conflict (Android)

---

## Common Error Messages

### "fontFamily is not a system font"
**Solution:** Font not loaded yet. Ensure `Font.loadAsync()` completes before rendering.

### "Invariant Violation: Module AppRegistry is not a registered callable module"
**Solution:** 
```bash
rm -rf node_modules
npm install
expo start -c
```

### "Unable to resolve module"
**Solution:**
```bash
npm install
expo start -c
```

### "Network request failed"
**Solution:** 
- Check internet connection
- Disable VPN
- Check firewall settings

---

## Getting Help

If you're still stuck:

1. **Check Expo Documentation**
   - https://docs.expo.dev/

2. **Search Expo Forums**
   - https://forums.expo.dev/

3. **Stack Overflow**
   - Tag your question with `expo`, `react-native`, `expo-font`

4. **GitHub Issues**
   - Check if it's a known issue
   - Open a new issue with:
     - Error message
     - Platform (iOS/Android/Web)
     - Steps to reproduce
     - Package versions

5. **Discord Communities**
   - Expo Discord
   - React Native Discord

---

## Debugging Tips

### Enable Debug Mode
```bash
# Start with debugging
expo start --dev
```

### View Logs
- iOS: `npx react-native log-ios`
- Android: `npx react-native log-android`
- Web: Browser DevTools Console

### Inspect Network Requests
- Use React Native Debugger
- Enable network inspect in Expo Dev Tools
- Use browser DevTools (web)

### Check Dependencies
```bash
npm list expo-font
npm list expo
```

### Verify Environment
```bash
expo doctor
npx react-native doctor
```

---

## Prevention Tips

1. **Keep dependencies updated**
   ```bash
   expo upgrade
   npm update
   ```

2. **Test regularly on all platforms**
3. **Use version control (git)**
4. **Document any custom modifications**
5. **Keep backup of working state**

---

## Quick Fixes Checklist

When something goes wrong, try these in order:

- [ ] Hard refresh / restart app
- [ ] Clear cache: `expo start -c`
- [ ] Restart development server
- [ ] Check console for errors
- [ ] Verify file paths and names
- [ ] Reinstall dependencies
- [ ] Restart computer/simulator
- [ ] Check GitHub issues for similar problems

---

**Remember:** Most issues are resolved by clearing cache and reinstalling dependencies!
