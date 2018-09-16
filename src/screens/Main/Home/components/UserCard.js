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
import uuidvl from 'uuid';

const deviceHeight = Dimensions.get('window').height - 120;

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
    padding: 20,
  },
  tagContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 10,
  },
  tag: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 50,
  },
});

class UserCard extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    const {
      name,
      img,
      info,
      bio,
      tags,
    } = this.props;

    const tagsComponent = tags.map((tag) => {
      return (
        <View key={uuidvl()} style={styles.tag}>
          <Text>{tag}</Text>
        </View>
      );
    });

    return (
      <View>
        <ImageBackground
          style={styles.profilePicture}
          imageStyle={{ resizeMode: 'cover' }}
          source={{ uri: `${img}` }}
          // borderRadius={30}
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
          <Text>{bio}</Text>
          <View style={styles.tagContainer}>
            {tagsComponent}
          </View>
        </View>
      </View>
    );
  }
}

export default UserCard;
