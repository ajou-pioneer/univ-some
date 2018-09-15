/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import UserCard from './UserCard';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 30,
    backgroundColor: '#F5F5F5',
    marginBottom: 30,
  },
});

class UsersCard extends React.Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
  };

  render() {
    const { users } = this.props;

    return (
      <View style={styles.cardContainer}>
        {users.map((user) => {
          return (
            <UserCard
              key={user.key}
              name={user.name}
              img={user.img}
              info={user.info}
              bio={user.bio}
              tags={user.tags}
            />
          );
        })}
      </View>
    );
  }
}

export default UsersCard;
