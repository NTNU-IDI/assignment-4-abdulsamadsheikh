import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import ButtonComponent from './ButtonComponent';

const LandingPage: React.FC = () => {
  // State to handle dynamic promo and testimonials
  const [promo, setPromo] = useState('Get 20% off on your first order!');
  const [testimonial, setTestimonial] = useState('“Best pizza in town!”');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.tagline}>Du ringer, vi bringer</Text>
      </View>

      {/* Hero Image */}
      <Image source={require('./assets/hero-image.jpg')} style={styles.heroImage} />

      {/* Navigation Buttons using Custom Component */}
      <View style={styles.navButtons}>
        <ButtonComponent title="Bestill nå" onPress={() => console.log('Bestill nå pressed')} />
        <ButtonComponent title="Meny" onPress={() => console.log('Meny pressed')} />
        <ButtonComponent title="Restauranter" onPress={() => console.log('Restauranter pressed')} />
        <ButtonComponent title="Kontakt" onPress={() => console.log('Kontakt pressed')} />
      </View>

      {/* Dynamic Promo Section */}
      <View style={styles.promoSection}>
        <Text style={styles.promoHeading}>Grove Deals</Text>
        <Text style={styles.promoText}>{promo}</Text>
      </View>

      {/* Testimonials Section */}
      <View style={styles.testimonials}>
        <Text style={styles.testimonialText}>{testimonial}</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.legal}>© 2000-2024 Telepizza. All rights reserved.</Text>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  promoSection: {
    padding: 20,
  },
  promoHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  promoText: {
    fontSize: 16,
    color: '#333333',
  },
  testimonials: {
    padding: 20,
  },
  testimonialText: {
    fontStyle: 'italic',
    color: '#555555',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  legal: {
    fontSize: 12,
    color: '#aaaaaa',
  },
});

export default LandingPage;