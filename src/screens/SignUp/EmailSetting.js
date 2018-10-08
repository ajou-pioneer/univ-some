/**
 * Created by Park Seong-beom on 2018.8
 * TODO: 이메일 형식 검증.
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import InputForm from '../../components/InputForm';
import WideFloatingButton from '../../components/WideFloatingButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#FFFFFF',
  },
  formContainer: {
    flex: 9,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 2,
  },
});

class EmailSetting extends React.Component {
  static navigationOptions = {
    title: '회원가입',
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
        <View style={styles.formContainer}>
          <InputForm title="이메일" type="email-address" />
        </View>
        <View style={styles.buttonContainer}>
          <WideFloatingButton
            text="확인"
            action={() => navigation.navigate('EmailVerificationScreen')}
          />
        </View>
      </View>
    );
  }
}

export default EmailSetting;
