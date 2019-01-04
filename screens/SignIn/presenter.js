/**
 * Created by Park Seong-beom on 2018.8
 * TODO: 이메일 형식 검증.
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import InputForm from '../components/InputForm';
import WideFloatingButton from '../components/WideFloatingButton';
import PropTypes from 'prop-types';

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
  forgetTextContainer: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 10,
  },
  forgetText: {
    textDecorationLine: 'underline',
  },
});

class SignIn extends React.Component {
  static navigationOptions = {
    title: '로그인',
  };
  static propTypes={
    isSubmitting: PropTypes.bool.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    changeEmail: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
};
  render() {
    const {
        email,
        password,
        isSubmitting,
        changeEmail,
        changePassword,
        submit,
    }= this.props
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <InputForm 
            title="이메일" 
            type="email-address" 
            inputDate={email} 
            changefunction={changeEmail} 
          />
          <InputForm 
            title="비밀번호" 
            secure 
            inputDate={password} 
            changefunction={changePassword}
          />
          <View style={styles.forgetTextContainer}>
            <Text style={styles.forgetText}>비밀번호를 잊었나요?</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <WideFloatingButton
            text="로그인"
            action={() => {}}
            submitfucntion={submit}
          />
        </View>
      </View>
    );
  }
}

export default SignIn;
