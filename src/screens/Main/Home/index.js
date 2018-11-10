/**
 * Created by Park Seong-beom on 2018.8
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
      groupCardIdx: 0,
      userCardIdx: 0,
      userImageIdx: 0,
      cardsPan: new Animated.ValueXY(),
      cards: [
        {
          users: [
            {
              key: uuidvl(),
              name: '김뫄뫄',
              images: [
                'https://i.imgur.com/dbh6umy.jpg',
                'https://i.imgur.com/TqhmG2S.jpg',
                'https://i.imgur.com/b6y3QR0.jpg',
              ],
              school: '아주대학교',
              major: '미디어학과',
              entryYear: 17,
              bio: '안녕하세요~',
              tags: ['개발', '디자인', '게임'],
            },
            {
              key: uuidvl(),
              name: '박뫄뫄',
              images: [
                'https://i.imgur.com/9PYKTfE.jpg',
                'https://i.imgur.com/hm46fxK.jpg',
                'https://i.imgur.com/zaarRFe.jpg',
                'https://i.imgur.com/JGl7QIw.jpg',
              ],
              school: '아주대학교',
              major: '소프트웨어학과',
              entryYear: 18,
              bio: '안녕하세요!',
              tags: ['음악', '여행'],
            },
            {
              key: uuidvl(),
              name: '이뫄뫄',
              images: [
                'https://i.imgur.com/ztDEqnD.jpg',
                'https://i.imgur.com/QVDFLCA.png',
              ],
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

        if (gestureState.dy > 50) {
          this.goPrevCard();
        } else {
          this.goNextCard();
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

  goNextCard = () => {
    const {
      groupCardIdx,
      userCardIdx,
      cards,
      userImageIdx,
    } = this.state;

    if (userImageIdx < cards[groupCardIdx].users[userCardIdx].images.length - 1) {
      this.setState({ userImageIdx: userImageIdx + 1 });
    } else if (userCardIdx < cards[groupCardIdx].users.length - 1) {
      this.setState({ userCardIdx: userCardIdx + 1 });
      this.setState({ userImageIdx: 0 });
    } else {
      this.setState({ userCardIdx: 0 });
      this.setState({ userImageIdx: 0 });
    }
  }

  goPrevCard = () => {
    const {
      groupCardIdx,
      userCardIdx,
      cards,
      userImageIdx,
    } = this.state;

    if (userImageIdx > 0) {
      this.setState({ userImageIdx: userImageIdx - 1 });
    } else if (userImageIdx === 0) {
      if (userCardIdx > 0) {
        this.setState({ userCardIdx: userCardIdx - 1 });
        this.setState({
          userImageIdx: cards[groupCardIdx].users[userCardIdx - 1].images.length - 1,
        });
      } else if (userCardIdx === 0) {
        const prevCardIdx = cards[groupCardIdx].users.length - 1;
        this.setState({ userCardIdx: prevCardIdx });
        this.setState({
          userImageIdx: cards[groupCardIdx].users[prevCardIdx].images.length - 1,
        });
      }
    }
  }

  render() {
    const {
      groupCardIdx,
      userCardIdx,
      userImageIdx,
      cardsPan,
      cards,
    } = this.state;

    return (
      <View style={styles.container}>
        <View {...this.panResponder.panHandlers}>
          <Animated.View
            style={{
              transform: [
                { translateX: cardsPan.x },
              ],
            }}
          >
            <UserCard
              users={cards[groupCardIdx].users}
              userImgIndex={userImageIdx}
              userCardIndex={userCardIdx}
            />
          </Animated.View>
        </View>
      </View>
    );
  }
}

export default Home;
