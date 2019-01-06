/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  controlText: {
    fontSize: 20,
    fontWeight: 'bold',
    zIndex: 999,
  },
  marker: {
    position: 'absolute',
    top: 15,
    backgroundColor: '#54d9cd',
    width: 75,
    height: 10,
    zIndex: 0,
  },
  control: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 20,
  },
  controlSpecText: {
    marginTop: 5,
    paddingLeft: 5,
    fontSize: 12,
  },
});

class InputForm extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    spec: PropTypes.string,
    holder: PropTypes.string,
    type: PropTypes.string,
    secure: PropTypes.bool,
    length: PropTypes.number,
    multiline: PropTypes.bool,
    inputDate: PropTypes.string,
    changefunction: PropTypes.func,
  };

  static defaultProps = {
    spec: '',
    holder: '',
    type: '',
    secure: false,
    multiline: false,
    length: null,
  };

  render() {
    const {
      title,
      spec,
      holder,
      type,
      secure,
      length,
      multiline,
      inputDate,
      changefunction,
    } = this.props;
    let specText;

    if (spec) {
      specText = <Text style={styles.controlSpecText}>{spec}</Text>;
    }

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.controlText}>
            {title}
          </Text>
          <View style={styles.marker} />
        </View>
        <TextInput
          style={styles.control}
          placeholder={holder}
          keyboardtype={type}
          secureTextEntry={secure}
          maxLength={length}
          multiline={multiline}
          value={inputDate}
          autoCapitalize={"none"}
          onChangeText={changefunction}
        />
        {specText}
      </View>
    );
  }
}

export default InputForm;
