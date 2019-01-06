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
  },
  resendText: {
    alignSelf: 'flex-end',
    textDecorationLine: 'underline',
    fontSize: 12,
    marginBottom: 20,
    color: '#919191',
  },
  infoText: {
    fontSize: 10,
    textAlign: 'center',
    color: '#919191',
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

  constructor() {
    super();

    this.state = {
      isValid: false,
    };
  }

  checkValidation = (e) => {
    // 적절한 형식 검증 로직 필요.
    if (e.target.value !== '') {
      this.setState({ isValid: true });
    } else {
      this.setState({ isValid: false });
    }
  }

  render() {
    const { navigation } = this.props;
    const { isValid } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <InputForm title="이메일 인증" length={4} type="numeric" changefunction={this.checkValidation} />
          <View style={styles.textContainer}>
            <Text style={styles.resendText}>인증번호 다시 보내기</Text>
            <Text style={styles.infoText}>이메일을 인증하면 개인정보 취급방침과</Text>
            <Text style={styles.infoText}>이용약관에 동의하게 됩니다.</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <WideFloatingButton
            text="확인"
            action={() => navigation.navigate('PasswordSettingScreen')}
            isValid={isValid}
          />
        </View>
      </View>
    );
  }
}

export default EmailVerification;
