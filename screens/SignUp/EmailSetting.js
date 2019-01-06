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
    flex: 8,
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
          <InputForm
            title="이메일"
            type="email-address"
            changefunction={this.checkValidation}
          />
        </View>
        <View style={styles.buttonContainer}>
          <WideFloatingButton
            text="확인"
            action={() => navigation.navigate('EmailVerificationScreen')}
            isValid={isValid}
          />
        </View>
      </View>
    );
  }
}

export default EmailSetting;
