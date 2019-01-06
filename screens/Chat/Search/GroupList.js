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
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import uuidvl from 'uuid';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  controlContainer: {
    padding: 10,
  },
  searchControl: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  groupContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingTop: 20,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  membersContainer: {
    flexDirection: 'row',
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
  tagContainer: {
    flexDirection: 'row',
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  tag: {
    alignSelf: 'center',
    backgroundColor: '#EEEEEE',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 99,
    justifyContent: 'center',
    alignContent: 'center',
  },
  tagText: {
    color: '#8E8E93',
    fontSize: 12,
  },
});

class GroupList extends React.Component {
  static navigationOptions = {
    header: null,
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
          tags: ['아주대', '소프트웨어', '17학번'],
          members: [
            {
              id: uuidvl(),
              avatar: 'https://i.imgur.com/dbh6umy.jpg',
              name: '김솨솨',
            }, {
              id: uuidvl(),
              avatar: 'https://i.imgur.com/9PYKTfE.jpg',
              name: '박솨솨',
            }, {
              id: uuidvl(),
              avatar: 'https://i.imgur.com/ztDEqnD.jpg',
              name: '최솨솨',
            },
          ],
        }, {
          id: uuidvl(),
          tags: ['경희대', '철학', '18학번'],
          members: [
            {
              id: uuidvl(),
              avatar: 'https://i.imgur.com/TqhmG2S.jpg',
              name: '김뫄뫄',
            }, {
              id: uuidvl(),
              avatar: 'https://i.imgur.com/hm46fxK.jpg',
              name: '박뫄뫄',
            },
          ],
        },
      ],
    };
  }

  renderUserGroup = (group) => {
    const { navigation } = this.props;

    const membersComp = group.members.map((member) => {
      return (
        <View style={styles.memberContainer} key={member.id}>
          <Image
            style={styles.memberImage}
            source={{ uri: member.avatar }}
            resizeMode="cover"
            borderRadius={15}
          />
          <Text style={styles.memberName}>{member.name}</Text>
        </View>
      );
    });

    const tagsComp = group.tags.map((tag) => {
      return (
        <View style={styles.tag} key={uuidvl()}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      );
    });

    return (
      <TouchableOpacity style={styles.groupContainer} key={group.id} onPress={() => navigation.navigate('GroupInfoScreen')}>
        <View style={styles.membersContainer}>
          {membersComp}
        </View>
        <View style={styles.tagContainer}>
          {tagsComp}
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { userGroups } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.controlContainer}>
          <TextInput style={styles.searchControl} placeholder="그룹 ID를 입력하세요" />
        </View>
        <ScrollView>
          {userGroups.map((group) => {
            return this.renderUserGroup(group);
          })}
        </ScrollView>
      </View>
    );
  }
}

export default GroupList;
