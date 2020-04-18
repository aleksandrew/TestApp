// outsource dependencies
import _ from 'lodash';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {memo, useEffect, useCallback} from 'react';
import {Card, CardItem, Container, Content, Left, Spinner, Text} from 'native-base';

// local dependencies
import {selector} from '../store/app';
import {TYPES} from '../constans/types';


const Home = memo(() => {
  // dispatch
  const dispatch = useDispatch();
  const setData = useCallback(() => dispatch({type: TYPES.SET_DATA}), [dispatch]);

  // state
  const {data, loading} = useSelector((state) => selector(state));

  useEffect(() => {
    setData();
  }, [setData]);

  return (
    <Container>
      <Content contentContainerStyle={loading && {flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {loading
          ? <Spinner/>
          : (
            _.map(data, item => (
              <Card key={item.id}>
                <CardItem cardBody>
                  <Image source={{uri: item.urls.small}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Text>
                      {item.user.name}
                    </Text>
                  </Left>
                </CardItem>
              </Card>
            )))
        }
      </Content>
    </Container>
  );
});

export default Home;
