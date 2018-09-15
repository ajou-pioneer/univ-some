/**
 * Created by Park Seong-beom on 2018.8
 * TODO: 카드 스택 구현.
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import uuidvl from 'uuid';
import UsersCard from './components/UsersCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
});

class Home extends React.Component {
  static navigationOptions = {
    title: '홈',
  };

  constructor(props) {
    super(props);

    this.state = {
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
  }

  render() {
    const { cards } = this.state;

    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <UsersCard users={cards[0].users} />
      </ScrollView>
    );
  }
}

export default Home;
