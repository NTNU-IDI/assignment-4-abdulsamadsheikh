// LandingPage.tsx

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const LandingPage: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {}
      <View style={styles.header}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.tagline}>Du ringer, vi bringer</Text>
      </View>

      {}
      <Image source={require('./assets/hero-image.jpg')} style={styles.heroImage} />

      {}
      <View style={styles.navButtons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Bestill nå</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Meny</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Restauranter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Kontakt</Text>
        </TouchableOpacity>
      </View>

      {}
      <View style={styles.promoSection}>
        <Text style={styles.promoHeading}>Grove deals</Text>
        {}
      </View>

      {}
      <View style={styles.testimonials}>
        <Text style={styles.testimonialText}>
          "Beste pizzaen i byen!"
        </Text>
        {}
      </View>

      {}
      <View style={styles.footer}>
        <View style={styles.socialMedia}>
          {}
        </View>
        <Text style={styles.legal}>
           2000-2024 Telepizza. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: 150,
    height: 80,
    resizeMode: 'contain' as 'contain',
  },
  tagline: {
    marginTop: 10,
    fontSize: 16,
    color: '#333333',
  },
  heroImage: {
    width: '100%',
    height: 200,
  },
  navButtons: {
    flexDirection: 'row' as 'row',
    flexWrap: 'wrap' as 'wrap',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#e31837',
    padding: 15,
    borderRadius: 5,
    margin: 5,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  promoSection: {
    padding: 20,
  },
  promoHeading: {
    fontSize: 18,
    fontWeight: 'bold' as 'bold',
    marginBottom: 10,
  },
  testimonials: {
    padding: 20,
  },
  testimonialText: {
    fontStyle: 'italic' as 'italic',
    color: '#555555',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  socialMedia: {
    flexDirection: 'row' as 'row',
    marginBottom: 10,
  },
  legal: {
    fontSize: 12,
    color: '#aaaaaa',
  },
});

export default LandingPage;