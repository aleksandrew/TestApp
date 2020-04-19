// outsource dependencies
import { Container } from 'native-base';
import React, { memo, useEffect } from 'react';
import { Image, Dimensions } from 'react-native';

// local dependencies


export default Gallery = memo(({ navigation, route }) => {
  const {name, img} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [ navigation ]);

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <Container>
      <Image
        source={{ uri: img }}
        style={{ width, height }}
      />
    </Container>
  );
});
