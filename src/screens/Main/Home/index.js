/**
 * Created by Park Seong-beom on 2018.8
 * TODO: 카드 스택 구현.
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  PanResponder,
} from 'react-native';
import uuidvl from 'uuid';
import UserCard from './components/UserCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Home extends React.Component {
  static navigationOptions = {
    title: '홈',
  };

  constructor(props) {
    super(props);

    this.state = {
      cardId: 0,
      cardsPan: new Animated.ValueXY(),
      cards: [
        {
          users: [
            {
              key: uuidvl(),
              name: '김뫄뫄',
              img: 'https://i.imgur.com/dbh6umy.jpg',
              school: '아주대학교',
              major: '미디어학과',
              entryYear: 17,
              bio: '안녕하세요~',
              tags: ['개발', '디자인', '게임'],
            },
            {
              key: uuidvl(),
              name: '박뫄뫄',
              img: 'https://i.imgur.com/TqhmG2S.jpg',
              school: '아주대학교',
              major: '소프트웨어학과',
              entryYear: 18,
              bio: '안녕하세요!',
              tags: ['음악', '여행'],
            },
            {
              key: uuidvl(),
              name: '이뫄뫄',
              img: 'https://i.imgur.com/b6y3QR0.jpg',
              school: '아주대학교',
              major: '사이버보안학과',
              entryYear: 16,
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
        return false;
      },
    });
  }

  render() {
    const { cardId, cardsPan, cards } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <Animated.View
            style={{
              transform: [
                { translateX: cardsPan.x },
              ],
            }}
          >
            <UserCard users={cards[cardId].users} />
          </Animated.View>
        </View>
      </View>
    );
  }
}

export default Home;
