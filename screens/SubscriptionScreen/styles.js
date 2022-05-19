import { Dimensions, StyleSheet, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
  },
  item: {
    width: '100%',
    height: 160,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: 'transparent',
    marginBottom: Platform.select({ ios: 0, android: 1 }),
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
});
export default styles;
