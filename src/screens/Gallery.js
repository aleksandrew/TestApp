// outsource dependencies
import {Container} from 'native-base';
import {useSelector} from 'react-redux';
import React, {memo, useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';

// local dependencies
import {selector} from '../store/app';
import Loader from '../components/Loader';


export default Gallery = memo(({navigation, route}) => {
  const {name, img} = route.params;

  // state
  const { loading } = useSelector(state => selector(state));

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation]);

  return (
    <Container>
      {loading
        ? <Loader/>
        : <Image
            source={{uri: img}}
            style={styles.img}
          />
      }
    </Container>
  );
});

const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
});
