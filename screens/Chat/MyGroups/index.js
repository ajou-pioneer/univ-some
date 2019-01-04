/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import uuidvl from 'uuid';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  groupContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#DFDFDF',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  memberContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  memberImage: {
    height: 55,
    width: 55,
  },
  memberName: {
    marginTop: 5,
  },
});

class MyGroups extends React.Component {
  static navigationOptions = {
    title: '내 그룹',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      userGroups: [
        {
          id: uuidvl(),
          members: [
            {
              id: uuidvl(),
              avatar: 'https://i.imgur.com/dbh6umy.jpg',
              name: '김솨솨',
            }, {
              id: uuidvl(),
              avatar: 'https://i.imgur.com/TqhmG2S.jpg',
              name: '박솨솨',
            }, {
              id: uuidvl(),
              avatar: 'https://i.imgur.com/b6y3QR0.jpg',
              name: '최솨솨',
            },
          ],
        }, {
          id: uuidvl(),
          members: [
            {
              id: uuidvl(),
              avatar: 'https://i.imgur.com/dbh6umy.jpg',
              name: '김뫄뫄',
            }, {
              id: uuidvl(),
              avatar: 'https://i.imgur.com/TqhmG2S.jpg',
              name: '박뫄뫄',
            },
          ],
        },
      ],
    };
  }

  renderUserGroup = (group) => {
    const listItems = group.members.map((member) => {
      return (
        <View style={styles.memberContainer} key={member.id}>
          <Image
            style={styles.memberImage}
            source={{ uri: member.avatar }}
            resizeMode="cover"
            borderRadius={55}
          />
          <Text style={styles.memberName}>{member.name}</Text>
        </View>
      );
    });

    return (
      <View style={styles.groupContainer} key={group.id}>
        {listItems}
      </View>
    );
  }

  render() {
    const { userGroups } = this.state;

    return (
      <ScrollView style={styles.container}>
        {userGroups.map((group) => {
          return this.renderUserGroup(group);
        })}
      </ScrollView>
    );
  }
}

export default MyGroups;
