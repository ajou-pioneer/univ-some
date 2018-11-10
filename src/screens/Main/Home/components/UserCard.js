/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import MinUserInfoSection from './MinUserInfoSection';
import MaxUserInfoSection from './MaxUserInfoSection';
import UserIndicator from './UserIndicator';
import CardIndicator from './CardIndicator';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height - 120;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: deviceWidth - 40,
    height: deviceHeight - 70,
    justifyContent: 'space-between',
  },
  pictureCard: {
    flex: 1,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  indicatorContainerMaxInfo: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
});

class UserCard extends React.Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      school: PropTypes.string.isRequired,
      major: PropTypes.string.isRequired,
      entryYear: PropTypes.number.isRequired,
      bio: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
    userCardIndex: PropTypes.number.isRequired,
    userImgIndex: PropTypes.number.isRequired,
  };

  componentWillMount = () => {
    const { users } = this.props;

    users.forEach((user) => {
      user.images.push(user.images[user.images.length - 1]);
    });
  }

  renderInfoSection = (imgIdx, user) => {
    if (imgIdx === user.images.length - 1) {
      return <MaxUserInfoSection user={user} />;
    }

    return <MinUserInfoSection user={user} />;
  }

  render() {
    const { users, userCardIndex, userImgIndex } = this.props;
    const user = users[userCardIndex];

    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.profilePicture}
          imageStyle={{ resizeMode: 'cover' }}
          source={{ uri: user.images[userImgIndex] }}
          borderRadius={30}
        >
          <View
            style={[
              styles.indicatorContainer,
              userImgIndex === user.images.length - 1 ? styles.indicatorContainerMaxInfo : {},
            ]}
          >
            <UserIndicator users={users} />
            <CardIndicator user={user} cardIdx={userImgIndex} />
          </View>
          {this.renderInfoSection(userImgIndex, user)}
        </ImageBackground>
      </View>
    );
  }
}

export default UserCard;
