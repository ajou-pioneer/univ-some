/**
 * Created by Park Seong-beom on 2018.8
 * TODO: 디자인 이슈에 따라 개발.
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Card from './components/Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
          img: 'https://i.imgur.com/dbh6umy.jpg',
        }, {
          img: 'https://i.imgur.com/dbh6umy.jpg',
        }, {
          img: 'https://i.imgur.com/dbh6umy.jpg',
        }, {
          img: 'https://i.imgur.com/dbh6umy.jpg',
        },
      ],
    };
  }

  render() {
    const { cards } = this.state;

    return (
      <View style={styles.container}>
        <Card img={cards[0].img} />
      </View>
    );
  }
}

export default Home;
