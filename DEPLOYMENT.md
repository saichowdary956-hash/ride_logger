# Deployment Guide

This guide explains how to build and deploy the custom font application to production.

## Table of Contents
1. [Building for Production](#building-for-production)
2. [App Store Deployment (iOS)](#ios-app-store)
3. [Google Play Deployment (Android)](#google-play-store)
4. [Web Deployment](#web-deployment)
5. [OTA Updates](#ota-updates)

---

## Building for Production

### Prerequisites
- Expo account (free): https://expo.dev/
- Apple Developer account ($99/year) for iOS
- Google Play Developer account ($25 one-time) for Android

### Using EAS Build (Recommended)

Expo Application Services (EAS) is the modern way to build and deploy:

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure your project
eas build:configure

# Build for both platforms
eas build --platform all
```

---

## iOS App Store

### Step 1: Configure iOS Build

Create or update `eas.json`:
```json
{
  "build": {
    "production": {
      "ios": {
        "bundleIdentifier": "com.yourcompany.ridelogger"
      }
    }
  }
}
```

### Step 2: Build for iOS

```bash
eas build --platform ios --profile production
```

### Step 3: Submit to App Store

```bash
eas submit --platform ios
```

Or manually:
1. Download the `.ipa` file from EAS
2. Use Transporter app to upload to App Store Connect
3. Fill out app metadata
4. Submit for review

### iOS Requirements
- App icon (1024x1024)
- Screenshots for all device sizes
- Privacy policy URL
- App description and keywords
- Support URL

---

## Google Play Store

### Step 1: Configure Android Build

Update `eas.json`:
```json
{
  "build": {
    "production": {
      "android": {
        "buildType": "apk",
        "package": "com.yourcompany.ridelogger"
      }
    }
  }
}
```

### Step 2: Build for Android

```bash
eas build --platform android --profile production
```

### Step 3: Submit to Google Play

```bash
eas submit --platform android
```

Or manually:
1. Download the `.aab` file from EAS
2. Upload to Google Play Console
3. Fill out store listing
4. Submit for review

### Android Requirements
- App icon (512x512)
- Feature graphic (1024x500)
- Screenshots for phones and tablets
- Privacy policy URL
- App description and category
- Content rating questionnaire

---

## Web Deployment

### Build for Web

```bash
# Build web bundle
npx expo export:web

# Output will be in web-build/ directory
```

### Deployment Options

#### Option 1: Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir web-build
```

#### Option 2: Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod web-build
```

#### Option 3: GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d web-build"

# Deploy
npm run deploy
```

#### Option 4: Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Initialize
firebase init hosting

# Deploy
firebase deploy
```

### Web Configuration

Update `app.json` for web:
```json
{
  "expo": {
    "web": {
      "favicon": "./assets/favicon.png",
      "name": "Ride Logger Font App",
      "shortName": "FontApp",
      "lang": "en",
      "backgroundColor": "#ffffff",
      "themeColor": "#6200ee",
      "description": "Custom font application for all platforms"
    }
  }
}
```

---

## OTA Updates

### Using Expo Updates

Expo allows you to push updates without going through app store review:

```bash
# Publish an update
eas update --branch production --message "Fixed font loading issue"
```

### Configure Updates

In `app.json`:
```json
{
  "expo": {
    "updates": {
      "url": "https://u.expo.dev/[your-project-id]"
    }
  }
}
```

### When to Use OTA Updates
✅ Bug fixes
✅ UI improvements
✅ Adding new fonts
✅ Text changes

❌ Native code changes
❌ Changing dependencies
❌ Major features requiring review

---

## Pre-Deployment Checklist

### All Platforms
- [ ] Test on multiple devices/browsers
- [ ] Verify all fonts load correctly
- [ ] Check for console errors
- [ ] Test on slow network connections
- [ ] Verify images and assets load
- [ ] Review privacy policy
- [ ] Update version number

### iOS Specific
- [ ] Test on iPhone and iPad
- [ ] Verify different iOS versions
- [ ] Check dark mode support
- [ ] Test with VoiceOver (accessibility)
- [ ] Prepare App Store screenshots

### Android Specific
- [ ] Test on multiple Android versions
- [ ] Verify different screen sizes
- [ ] Test with TalkBack (accessibility)
- [ ] Prepare Google Play screenshots
- [ ] Test on low-end devices

### Web Specific
- [ ] Test on Chrome, Firefox, Safari
- [ ] Verify responsive design
- [ ] Check mobile browser compatibility
- [ ] Test loading performance
- [ ] Verify SEO metadata

---

## Version Management

### Semantic Versioning

Use semantic versioning (MAJOR.MINOR.PATCH):
- MAJOR: Breaking changes
- MINOR: New features
- PATCH: Bug fixes

Update in `package.json` and `app.json`:
```json
{
  "version": "1.0.0",
  "expo": {
    "version": "1.0.0",
    "ios": {
      "buildNumber": "1"
    },
    "android": {
      "versionCode": 1
    }
  }
}
```

---

## Post-Deployment

### Monitor Your App
- Check crash reports
- Monitor user reviews
- Track download metrics
- Watch for performance issues

### Maintenance
- Respond to user feedback
- Fix critical bugs quickly
- Plan feature updates
- Keep dependencies updated

---

## Cost Estimates

### Initial Setup
- iOS Developer Account: $99/year
- Google Play Developer Account: $25 (one-time)
- Expo EAS Build: Free tier available, paid plans from $29/month

### Hosting (Web)
- Netlify/Vercel: Free tier available
- Custom domain: ~$10-15/year (optional)

### Total First Year
- Minimum: $134 (iOS + Android + domain)
- Recommended: $250-500 (including paid Expo tier)

---

## Support Resources

- Expo Documentation: https://docs.expo.dev/
- EAS Build: https://docs.expo.dev/build/introduction/
- App Store Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Google Play Policies: https://play.google.com/about/developer-content-policy/

---

## Quick Commands Reference

```bash
# Development
npm start              # Start development server
npm run ios           # Run on iOS simulator
npm run android       # Run on Android emulator
npm run web           # Run on web browser

# Building
eas build --platform ios        # Build iOS
eas build --platform android    # Build Android
npx expo export:web            # Build web

# Deployment
eas submit --platform ios       # Submit to App Store
eas submit --platform android   # Submit to Play Store
eas update                      # Push OTA update

# Maintenance
expo start -c          # Clear cache
npm update            # Update dependencies
expo upgrade          # Upgrade Expo SDK
```

---

Good luck with your deployment! 🚀
