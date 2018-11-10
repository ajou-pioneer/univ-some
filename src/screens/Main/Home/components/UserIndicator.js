/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  userCardIndicatorContainer: {
    padding: 20,
    flexDirection: 'row',
  },
  cardIndicator: {
    justifyContent: 'flex-end',
    width: 30,
    height: 30,
    marginRight: 5,
  },
});

class UserIndicator extends React.Component {
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
  };

  render() {
    const { users } = this.props;

    return (
      <View style={styles.userCardIndicatorContainer}>
        {users.map((userCard) => {
          return (
            <Image
              source={{ uri: userCard.images[0] }}
              borderRadius={30}
              key={userCard.key}
              style={styles.cardIndicator}
            />
          );
        })}
      </View>
    );
  }
}

export default UserIndicator;
