/**
 * Created by Park Seong-beom on 2018.8
 * TODO: 카드 스택 구현.
 */

import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Animated,
  PanResponder,
} from 'react-native';
import uuidvl from 'uuid';
import UserCards from './components/UserCards';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // padding: 15,
  },
});

class Home extends React.Component {
  static navigationOptions = {
    title: '홈',
  };

  constructor(props) {
    super(props);

    this.state = {
      cardsPan: new Animated.ValueXY(),
      cards: [
        {
          users: [
            {
              key: uuidvl(),
              name: '김뫄뫄',
              img: 'https://i.imgur.com/dbh6umy.jpg',
              info: '아주대학교 미디어학과 17',
              bio: '안녕하세요~',
              tags: ['개발', '디자인', '게임'],
            },
            {
              key: uuidvl(),
              name: '박뫄뫄',
              img: 'https://i.imgur.com/TqhmG2S.jpg',
              info: '아주대학교 소프트웨어학과 17',
              bio: '안녕하세요!',
              tags: ['음악', '여행'],
            },
            {
              key: uuidvl(),
              name: '이뫄뫄',
              img: 'https://i.imgur.com/b6y3QR0.jpg',
              info: '아주대학교 사이버보안학과 17',
              bio: '안녕하세요~!',
              tags: [],
            },
          ],
        },
      ],
    };

    /**
     * 터치 제스처를 제어한다.
     * 각 property의 parameters는 React Native 공식 문서를 참고:
     * https://facebook.github.io/react-native/docs/panresponder
     */
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      // 터치가 시작될 때.
      onPanResponderGrant: () => { },

      // 터치 이후 움직일 때. (드래그)
      // TODO: 카드를 움직일 때 scrollView가 스크롤되지 않도록 막기.
      onPanResponderMove: (evt, gestureState) => {
        const { cardsPan } = this.state;

        if (gestureState.dx < -20 || gestureState.dx > 20) {
          cardsPan.setValue(
            {
              x: gestureState.dx,
              y: cardsPan.y,
            },
          );
        }
      },
      onPanResponderTerminationRequest: () => true,

      // 터치가 끝날 때. (화면 상 어디에도 제스처가 없을 때.)
      onPanResponderRelease: (evt, gestureState) => {
        const { cardsPan } = this.state;

        if (gestureState.dx > -150 && gestureState.dx < 150) {
          cardsPan.setValue(
            {
              x: 0,
              y: cardsPan.y,
            },
          );
        }
      },

      // 다른 component가 responder가 될 때.
      onPanResponderTerminate: () => { },

      // child component에서 responder의 사용을 막는다.
      onShouldBlockNativeResponder: () => {
        return true;
      },
    });
  }

  render() {
    const { cardsPan, cards } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView
          {...this.panResponder.panHandlers}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View
            style={{
              transform: [
                { translateX: cardsPan.x },
              ],
            }}
          >
            <UserCards users={cards[0].users} />
          </Animated.View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
