/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import InputForm from '../components/InputForm';
import WideFloatingButton from '../components/WideFloatingButton';

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
  textContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  resendText: {
    textDecorationLine: 'underline',
  },
  infoText: {
    marginTop: 20,
    textAlign: 'center',
  },
});

class EmailVerification extends React.Component {
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
          <InputForm title="4자리 인증번호" length={4} type="numeric" />
          <View style={styles.textContainer}>
            <Text style={styles.resendText}>인증번호 다시 보내기</Text>
            <Text style={styles.infoText}>이메일을 인증하면 이용약관과 개인정보취급방침에 동의하는 것으로 간주합니다.</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <WideFloatingButton
            text="확인"
            action={() => navigation.navigate('PasswordSettingScreen')}
          />
        </View>
      </View>
    );
  }
}

export default EmailVerification;
