import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function ProductList({ navigation }) {

  const products = [
    {
      id: 1,
      name: 'Smartphone',
      price: 8999,
      description: 'A modern smartphone for everyday use.'
    },
    {
      id: 2,
      name: 'Bluetooth Speaker',
      price: 1499,
      description: 'A portable speaker with clear and loud sound.'
    },
    {
      id: 3,
      name: 'Smart Watch',
      price: 2499,
      description: 'A smart watch for notifications and fitness tracking.'
    },
    {
      id: 4,
      name: 'Wireless Earbuds',
      price: 1999,
      description: 'Wireless earbuds with a comfortable design.'
    }
  ];

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.heading}>
        Available Gadgets
      </Text>

      {products.map((product) => (
        <TouchableOpacity
          key={product.id}
          style={styles.card}
          onPress={() =>
            navigation.navigate('Details', {
              product: product
            })
          }
        >

          <Text style={styles.icon}>📦</Text>

          <View style={styles.info}>
            <Text style={styles.name}>
              {product.name}
            </Text>

            <Text style={styles.price}>
              ₱{product.price}
            </Text>

            <Text style={styles.details}>
              Tap to view details →
            </Text>
          </View>

        </TouchableOpacity>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5F9',
    padding: 20
  },

  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#172B4D',
    marginBottom: 20
  },

  card: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 3
  },

  icon: {
    fontSize: 40,
    marginRight: 15
  },

  info: {
    flex: 1
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#172B4D'
  },

  price: {
    fontSize: 18,
    color: '#2563EB',
    marginTop: 5
  },

  details: {
    color: '#667085',
    marginTop: 7
  }
});