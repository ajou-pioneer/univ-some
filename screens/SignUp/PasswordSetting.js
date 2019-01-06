/**
 * Created by Park Seong-beom on 2018.8
 * TODO: 비밀번호 형식 및 보안성 검증.
 */

import React from 'react';
import {
  StyleSheet,
  View,
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
});

class PasswordSetting extends React.Component {
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
          <InputForm title="비밀번호" holder="6자 이상 입력해주세요" changefunction={this.checkValidation} secure />
          <InputForm title="비밀번호 확인" holder="비밀번호를 다시 입력해주세요" changefunction={this.checkValidation} secure />
        </View>
        <View style={styles.buttonContainer}>
          <WideFloatingButton
            text="가입하기!"
            action={() => navigation.navigate('GreetingScreen')}
            isValid={isValid}
          />
        </View>
      </View>
    );
  }
}

export default PasswordSetting;
