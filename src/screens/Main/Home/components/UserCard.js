/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

const deviceHeight = Dimensions.get('window').height - 160;

const styles = StyleSheet.create({
  pictureCard: {
    flex: 1,
    padding: 30,
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
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 50,
  },
  userInfo: {
    fontSize: 16,
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 50,
  },
  profileCard: {
    height: 100,
    padding: 30,
  },
});

class UserCard extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  };

  render() {
    const { name, img, info } = this.props;

    return (
      <View>
        <ImageBackground
          style={styles.profilePicture}
          imageStyle={{ resizeMode: 'cover' }}
          source={{ uri: `${img}` }}
          borderRadius={30}
        >
          <View style={styles.pictureCard}>
            <View style={styles.pictureTopContainer} />
            <View style={styles.pictureBototmContainer}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userInfo}>{info}</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.profileCard}>
          <Text>Lorem ipsum</Text>
        </View>
      </View>
    );
  }
}

export default UserCard;
