/**
 * Custom Font Usage Examples
 * 
 * This file demonstrates various ways to use custom fonts
 * in your React Native application across iOS, Android, and Web.
 */

import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Example 1: Using custom font in a component
export const CustomTextComponent = () => (
  <Text style={styles.customText}>
    This text uses Roboto Regular font
  </Text>
);

// Example 2: Bold font variant
export const BoldTextComponent = () => (
  <Text style={styles.boldText}>
    This text uses Roboto Bold font
  </Text>
);

// Example 3: Combining custom font with other styles
export const StyledTextComponent = () => (
  <Text style={[styles.customText, styles.largeText]}>
    Large text with custom font
  </Text>
);

// Example 4: Dynamic font selection
export const DynamicFontComponent = ({ fontFamily = 'Roboto-Regular' }) => (
  <Text style={[styles.baseText, { fontFamily }]}>
    This text uses {fontFamily}
  </Text>
);

// Example 5: Title with custom font
export const Title = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);

// Example 6: Paragraph with custom font
export const Paragraph = ({ children }) => (
  <Text style={styles.paragraph}>{children}</Text>
);

const styles = StyleSheet.create({
  customText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#333',
  },
  boldText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#333',
  },
  largeText: {
    fontSize: 24,
  },
  baseText: {
    fontSize: 16,
    color: '#333',
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 28,
    color: '#000',
    marginBottom: 10,
  },
  paragraph: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 15,
  },
});

// Available Fonts:
// - Roboto-Regular
// - Roboto-Bold
// - OpenSans-Regular
// - OpenSans-Bold
// - Lato-Regular
// - Lato-Bold

export default {
  CustomTextComponent,
  BoldTextComponent,
  StyledTextComponent,
  DynamicFontComponent,
  Title,
  Paragraph,
};
