// outsource dependencies
import _ from 'lodash';
import {Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {memo, useEffect, useCallback, useMemo} from 'react';
import {Card, CardItem, Container, Content, Left, Text} from 'native-base';

// local dependencies
import {selector} from '../store/app';
import {TYPES} from '../constans/types';
import Loader from '../components/Loader';
import {ROUTES} from '../constans/routes';


export default Home = memo(({navigation}) => {
  // dispatch
  const dispatch = useDispatch();
  const setData = useCallback(() => dispatch({type: TYPES.SET_DATA}), [dispatch]);

  // state
  const {data, loading} = useSelector(state => selector(state));

  useEffect(() => {
    setData();
  }, [setData]);

  const dataUser = useMemo(() =>
    _.map(data, item => ({
      id: item.id,
      name: item.user.name,
      imgRaw: item.urls.raw,
      imgRegular: item.urls.regular,
    })), [data]
  );

  return (
    <Container>
      {loading
        ? <Loader/>
        : (
          <Content>
            {
              _.map(dataUser, item => (
                <Card key={item.id}>
                  <CardItem>
                    <Left>
                      <Text>
                        {item.name}
                      </Text>
                    </Left>
                  </CardItem>
                  <CardItem cardBody
                            button title="Go to Photo"
                            onPress={() => navigation.navigate(ROUTES.GALLERY, {
                                name: item.name,
                                img: item.imgRaw,
                              }
                            )}
                  >
                    <Image style={styles.img}
                           source={{uri: item.imgRegular}}
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
