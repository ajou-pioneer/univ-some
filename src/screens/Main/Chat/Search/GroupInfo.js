/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
});

class GroupInfo extends React.Component {
  static navigationOptions = {
    title: '그룹 정보',
    mode: 'modal',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => navigation.goBack()}
        >
          <Text>go back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default GroupInfo;
