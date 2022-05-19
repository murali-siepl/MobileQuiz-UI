import React from 'react';
import { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import styles from './styles';

function CarouselItem({ item, index }, parallaxProps) {
  return (
    <Pressable onPress={() => alert('Image description:' + item.description)}>
      <SafeAreaView style={styles.item}>
        <ParallaxImage
          resizeMethod='resize'
          source={item.source}
          // source={{ uri : item.source }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          {...parallaxProps}
        />
      </SafeAreaView>
    </Pressable>
  );
}

export default CarouselItem;
