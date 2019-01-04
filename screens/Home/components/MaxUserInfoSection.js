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
import uuidvl from 'uuid';

const styles = StyleSheet.create({
  profileCard: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 20,
    paddingTop: 0,
  },
  profileTextContainer: {
    flex: 10,
  },
  profileBottomContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
  userBio: {
    marginTop: 30,
    fontSize: 14,
    color: '#FFFFFF',
  },
  tagContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 30,
  },
  userTagShape: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#36B1BF',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 12,
    paddingRight: 12,
    marginRight: 10,
    marginBottom: 5,
    borderRadius: 50,
  },
  userTag: {
    fontSize: 12,
    color: '#36B1BF',
  },
  report: {
    flex: 1,
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  heart: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

class MaxUserInfoSection extends React.Component {
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
      <View style={styles.profileCard}>
        <View style={styles.profileTextContainer}>
          <Text style={styles.userName}>{nameText}</Text>
          <Text style={styles.userInfo}>{infoText}</Text>
          <Text style={styles.userBio}>{user.bio}</Text>
          <View style={styles.tagContainer}>
            {user.tags.map((tag) => {
              const tagText = `#${tag}`;
              return (
                <View key={uuidvl()} style={styles.userTagShape}>
                  <Text style={styles.userTag}>{tagText}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.profileBottomContainer}>
          <Text style={styles.report}>신고하기</Text>
          <View style={styles.heart}>
            <Image source={require('../../../assets/Home/heart.png')} />
          </View>
        </View>
      </View>
    );
  }
}

export default MaxUserInfoSection;
