/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
});

class Matched extends React.Component {
  static navigationOptions = {
    title: '매칭된 그룹',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <View style={styles.container} />
    );
  }
}

export default Matched;
