/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  profileCard: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
  },
  profileTextContainer: {
    flex: 2,
  },
  profileHeartContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  userInfo: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

class MinUserInfoSection extends React.Component {
  static propTypes = {
    user: PropTypes.objectOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      school: PropTypes.string.isRequired,
      major: PropTypes.string.isRequired,
      entryYear: PropTypes.number.isRequired,
      bio: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
  };

  render() {
    const { user } = this.props;
    const nameText = `${user.name} (${user.entryYear})`;
    const infoText = `${user.school} | ${user.major}`;

    return (
      <View>
        <View style={styles.pictureCard} />
        <View style={styles.profileCard}>
          <View style={styles.profileTextContainer}>
            <Text style={styles.userName}>{nameText}</Text>
            <Text style={styles.userInfo}>{infoText}</Text>
          </View>
          <View style={styles.profileHeartContainer}>
            <Image source={require('../../../../../assets/Home/heart.png')} />
          </View>
        </View>
      </View>
    );
  }
}

export default MinUserInfoSection;
