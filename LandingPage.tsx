import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types'; // Import the types

type LandingPageScreenProp = StackNavigationProp<RootStackParamList, 'LandingPage'>;

const LandingPage: React.FC = () => {
  const navigation = useNavigation<LandingPageScreenProp>(); // Use the typed navigation
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

      {/* Navigation Buttons */}
      <View style={styles.navButtons}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MenuScreen')}>
          <Text style={styles.buttonText}>Meny</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ContactScreen')}>
          <Text style={styles.buttonText}>Kontakt</Text>
        </TouchableOpacity>
      </View>

      {/* Dynamic Promo Section */}
      <View style={styles.promoSection}>
        <Text style={styles.promoHeading}>Grove Deals</Text>
        <Text style={styles.promoText}>{promo}</Text>
        <TouchableOpacity style={styles.promoButton} onPress={() => setPromo('Limited Time Offer! Free delivery on all orders.')}>
          <Text style={styles.promoButtonText}>Update Promo</Text>
        </TouchableOpacity>
      </View>

      {/* Testimonials Section */}
      <View style={styles.testimonials}>
        <Text style={styles.testimonialText}>{testimonial}</Text>
        <TouchableOpacity style={styles.promoButton} onPress={() => setTestimonial('“Amazing service and taste!”')}>
          <Text style={styles.promoButtonText}>Update Testimonial</Text>
        </TouchableOpacity>
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
    resizeMode: 'contain',
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
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#e31837',
    padding: 15,
    borderRadius: 5,
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
    fontWeight: 'bold',
    marginBottom: 10,
  },
  promoText: {
    fontSize: 16,
    color: '#333333',
  },
  promoButton: {
    backgroundColor: '#333333',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  promoButtonText: {
    color: '#ffffff',
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