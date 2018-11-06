/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import uuidvl from 'uuid';

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
  },
  pictureCard: {
    flex: 1,
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

class UserCard extends React.Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      school: PropTypes.string.isRequired,
      major: PropTypes.string.isRequired,
      entryYear: PropTypes.number.isRequired,
      bio: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      userId: 0,
      isInfoTouched: false,
    };
  }

  changeInfoTouched = () => {
    const { isInfoTouched } = this.state;
    this.setState({ isInfoTouched: !isInfoTouched });
  }

  render() {
    const { users } = this.props;
    const { userId, isInfoTouched } = this.state;
    const user = users[userId];

    const nameText = `${user.name} (${user.entryYear})`;
    const infoText = `${user.school} | ${user.major}`;

    const minimizedInfo = () => {
      const minimizedInfoStyles = StyleSheet.create({
        container: {
          flex: 1,
        },
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
      });

      return (
        <View style={minimizedInfoStyles.container}>
          <TouchableOpacity
            style={styles.pictureCard}
            onPress={() => { this.changeInfoTouched(); }}
          />
          <View style={minimizedInfoStyles.profileCard}>
            <View style={minimizedInfoStyles.profileTextContainer}>
              <Text style={styles.userName}>{nameText}</Text>
              <Text style={styles.userInfo}>{infoText}</Text>
            </View>
            <View style={minimizedInfoStyles.profileHeartContainer}>
              <Image source={require('../../../../../assets/Home/heart.png')} />
            </View>
          </View>
        </View>
      );
    };

    const maximizedInfo = () => {
      const maximizedInfoStyles = StyleSheet.create({
        profileCard: {
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: 30,
          padding: 30,
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

      return (
        <TouchableOpacity
          style={maximizedInfoStyles.profileCard}
          onPress={() => { this.changeInfoTouched(); }}
        >
          <View style={maximizedInfoStyles.profileTextContainer}>
            <Text style={styles.userName}>{nameText}</Text>
            <Text style={styles.userInfo}>{infoText}</Text>
            <Text style={maximizedInfoStyles.userBio}>{user.bio}</Text>
            <View style={maximizedInfoStyles.tagContainer}>
              {user.tags.map((tag) => {
                const tagText = `#${tag}`;
                return (
                  <View key={uuidvl()} style={maximizedInfoStyles.userTagShape}>
                    <Text style={maximizedInfoStyles.userTag}>{tagText}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={maximizedInfoStyles.profileBottomContainer}>
            <Text style={maximizedInfoStyles.report}>신고하기</Text>
            <View style={maximizedInfoStyles.heart}>
              <Image source={require('../../../../../assets/Home/heart.png')} />
            </View>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.profilePicture}
          imageStyle={{ resizeMode: 'cover' }}
          source={{ uri: `${user.img}` }}
          borderRadius={30}
        >
          {isInfoTouched ? maximizedInfo() : minimizedInfo()}
        </ImageBackground>
      </View>
    );
  }
}

export default UserCard;
