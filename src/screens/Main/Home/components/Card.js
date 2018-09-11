/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  ImageBackground,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height - 120;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  cardContainer: {
    flex: 1,
    width: deviceWidth,
    height: 500,
  },
  pictureCard: {
    flex: 1,
  },
  profilePicture: {
    height: deviceHeight,
  },
  pictureTopContainer: {
    flex: 9,
  },
  pictureBottomContainer: {
    flex: 2,
  },
  profileCard: {
    height: deviceHeight,
    padding: 30,
  },
});

class Card extends React.Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
  };

  render() {
    const { img } = this.props;

    return (
      <ScrollView style={styles.cardContainer} pagingEnabled>
        <ImageBackground
          style={styles.profilePicture}
          imageStyle={{ resizeMode: 'cover' }}
          source={{ uri: `${img}` }}
        >
          <View style={styles.pictureCard}>
            <View style={styles.pictureTopContainer} />
            <View style={styles.pictureBototmContainer} />
          </View>
        </ImageBackground>
        <View style={styles.profileCard}>
          <Text>김뫄뫄</Text>
          <Text>아주대학교 미디어학과 17학번</Text>
        </View>
      </ScrollView>
    );
  }
}

export default Card;
