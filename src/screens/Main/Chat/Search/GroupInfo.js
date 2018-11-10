/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import uuidvl from 'uuid';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 25,
    paddingTop: 40,
  },
  membersContainer: {
    flex: 2,
    width: '100%',
  },
  memberContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  memberImage: {
    height: 90,
    width: 90,
    marginRight: 20,
  },
  memberTextContainer: {
    flexDirection: 'column',
  },
  memberName: {
    fontSize: 20,
  },
});

class GroupInfo extends React.Component {
  static navigationOptions = {
    title: '그룹 정보',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      members: [
        {
          id: uuidvl(),
          avatar: 'https://i.imgur.com/dbh6umy.jpg',
          name: '김솨솨',
          hakbun: '17',
          school: '아주대학교',
          major: '미디어',
        }, {
          id: uuidvl(),
          avatar: 'https://i.imgur.com/TqhmG2S.jpg',
          name: '박솨솨',
          hakbun: '17',
          school: '아주대학교',
          major: '소프트웨어',
        }, {
          id: uuidvl(),
          avatar: 'https://i.imgur.com/b6y3QR0.jpg',
          name: '최솨솨',
          hakbun: '17',
          school: '아주대학교',
          major: '사이버보안',
        },
      ],
    };
  }

  renderMembers = (member) => {
    const infoText = `${member.school} ${member.major} ${member.hakbun}`;
    return (
      <View style={styles.memberContainer} key={member.id}>
        <Image
          style={styles.memberImage}
          source={{ uri: member.avatar }}
          resizeMode="cover"
          borderRadius={30}
        />
        <View style={styles.memberTextContainer}>
          <Text style={styles.memberName}>{member.name}</Text>
          <Text style={styles.memberInfo}>{infoText}</Text>
        </View>
      </View>
    );
  }

  render() {
    const { members } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.membersContainer}>
          {members.map((member) => {
            return this.renderMembers(member);
          })}
        </View>
        <View />
      </View>
    );
  }
}

export default GroupInfo;
