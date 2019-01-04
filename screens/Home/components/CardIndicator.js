/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import uuidvl from 'uuid';

const styles = StyleSheet.create({
  pageIndicatorContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    paddingTop: 25,
  },
  pageIndicator: {
    width: 5,
    height: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 5,
    marginBottom: 5,
  },
  pageCurrIndicator: {
    backgroundColor: '#FFFFFF',
  },
});

class UserIndicator extends React.Component {
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
    cardIdx: PropTypes.number.isRequired,
  };

  render() {
    const { user, cardIdx } = this.props;

    return (
      <View style={styles.pageIndicatorContainer}>
        {Array.from({ length: user.images.length }, (x, i) => i).map((idx) => {
          return (
            <View
              key={uuidvl()}
              style={[
                styles.pageIndicator,
                (idx === cardIdx) ? styles.pageCurrIndicator : {},
              ]}
            />
          );
        })}
      </View>
    );
  }
}

export default UserIndicator;
