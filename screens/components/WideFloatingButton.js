/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#36b1bf',
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#36b1bf',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

class InputForm extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    submitfucntion: PropTypes.func
  };

  render() {
    const {
      text,
      action,
      submitfucntion
    } = this.props;

    return (
      <View>
        <TouchableOpacity style={styles.button} onPressOut={action} onPressOut={submitfucntion}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default InputForm;
