// outsource dependencies
import _ from 'lodash';
import { Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, {memo, useEffect, useCallback} from 'react';
import { Card, CardItem, Container, Content, Left, Text } from 'native-base';

// local dependencies
import { selector } from '../store/app';
import Loader from '../components/Loader';
import { TYPES } from '../constans/types';


export default Home = memo(({ navigation }) => {
  // dispatch
  const dispatch = useDispatch();
  const setData = useCallback(() => dispatch({ type: TYPES.SET_DATA }), [ dispatch ]);

  // state
  const { data, loading } = useSelector(state => selector(state));

  useEffect(() => {
    setData();
  }, [ setData ]);

  return (
    <Container>
      { loading
        ? <Loader/>
        : (
          <Content>
            {
              _.map(data, item => (
                <Card key={ item.id }>
                  <CardItem>
                    <Left>
                      <Text>
                        { item.user.name }
                      </Text>
                    </Left>
                  </CardItem>
                  <CardItem cardBody
                            button title="Go to Photo"
                            onPress={() => navigation.navigate('Gallery', {
                                name: item.user.name,
                                img: item.urls.raw,
                              }
                            )}
                  >
                    <Image style={ styles.img }
                           source={{ uri: item.urls.regular }}
                    />
                  </CardItem>
                </Card>
              ))
            }
          </Content>
        )
      }
    </Container>
  );
});

const styles = StyleSheet.create({
  img: {
    flex: 1,
    height: 200,
    width: null,
  },
});
