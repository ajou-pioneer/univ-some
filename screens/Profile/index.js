/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import uuidvl from 'uuid';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profileContainer: {
    width: '100%',
  },
  aboutSection: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoSection: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'row',
  },
  blankImage: {
    width: 40,
    height: 40,
    backgroundColor: '#DFDFDF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  blankImageText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  linkSection: {
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  linkBody: {
    paddingRight: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  linkBlock: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    fontSize: 10,
    color: '#8E8E93',
  },
  userImage: {
    width: 120,
    height: 120,
  },
  nameText: {
    fontSize: 16,
    marginTop: 10,
  },
  infoText: {
    fontSize: 10,
    color: '#8E8E93',
  },
  settingContainer: {
    width: '100%',
    borderTopColor: '#EEEEEE',
    borderTopWidth: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  introSection: {
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
  },
  introBody: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  introText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  introInput: {
    fontSize: 12,
  },
  button: {
    width: 100,
    height: 25,
    backgroundColor: '#36b1bf',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 10,
  },
  tagHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
  },
  tagHeaderText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  tagList: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  tag: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 100,
    backgroundColor: '#EEEEEE',
    marginRight: 5,
  },
  tagText: {
    fontSize: 11,
    color: '#8E8E93',
  },
  applyButtonSection: {
    padding: 20,
  },
  applybutton: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#36B1BF',
  },
  applybuttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

class Profile extends React.Component {
  static navigationOptions = {
    title: '프로필',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      user: {
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
    };
  }

  render() {
    const { navigation } = this.props;
    const { user } = this.state;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.aboutSection}>
            <Image
              style={styles.userImage}
              source={{ uri: user.images[0] }}
              resizeMode="cover"
              borderRadius={15}
            />
            <Text style={styles.nameText}>{`${user.name} ${user.entryYear}\``}</Text>
            <Text style={styles.infoText}>{`${user.school} | ${user.major}`}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>내 프로필 보기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.photoSection}>
            <TouchableOpacity>
              <View style={styles.blankImage}>
                <Text style={styles.blankImageText}>+</Text>
              </View>
            </TouchableOpacity>
            {user.images.map((image) => {
              return (
                <TouchableOpacity>
                  <Image
                    style={{ width: 40, height: 40, marginRight: 5 }}
                    source={{ uri: image }}
                    resizeMode="cover"
                    borderRadius={5}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.linkSection}>
            <View style={styles.linkBody}>
              <TouchableOpacity style={styles.linkBlock}>
                <Image source={require('../../assets/Profile/calendar.png')} />
                <Text style={styles.linkText}>캘린더</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.linkBlock}>
                <Image source={require('../../assets/Profile/card.png')} />
                <Text style={styles.linkText}>카드 설정</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.linkBlock}>
                <Image source={require('../../assets/Profile/store.png')} />
                <Text style={styles.linkText}>아이템 스토어</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.linkBlock}>
                <Image source={require('../../assets/Profile/setting.png')} />
                <Text style={styles.linkText}>설정</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.settingContainer}>
          <View style={styles.introSection}>
            <View style={styles.introBody}>
              <Text style={styles.introText}>자기 소개</Text>
              <TextInput style={styles.introInput} placeholder="자기 소개를 작성해 주세요" multiline numberOfLines={4} />
            </View>
          </View>
          <View style={styles.tagSection}>
            <View style={styles.tagHeader}>
              <Text style={styles.tagHeaderText}>태그 추가</Text>
              <Text style={styles.tagHeaderText}>+</Text>
            </View>
            <View style={styles.tagList}>
              {user.tags.map((tag) => {
                return (
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles.applyButtonSection}>
          <TouchableOpacity style={styles.applybutton}>
            <Text style={styles.applybuttonText}>수정하기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default Profile;