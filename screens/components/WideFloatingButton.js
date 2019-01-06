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
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#36b1bf',
    borderWidth: 1,
  },
  validButton: {
    backgroundColor: '#36b1bf',
  },
  invalidButton: {
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  validText: {
    color: '#ffffff',
  },
  invalidText: {
    color: '#36b1bf',
  },
});

class InputForm extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    isValid: PropTypes.bool,
    submitFunction: PropTypes.func,
  };

  static defaultProps = {
    isValid: false,
    submitFunction: null,
  };


  render() {
    const {
      text,
      action,
      isValid,
      submitFunction,
    } = this.props;

    return (
      <View>
        <TouchableOpacity
          style={[styles.button, isValid ? styles.validButton : styles.invalidButton]}
          onPressOut={isValid ? action : null}
          onPress={submitFunction}
        >
          <Text style={[styles.buttonText, isValid ? styles.validText : styles.invalidText]}>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default InputForm;
