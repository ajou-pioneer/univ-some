/**
 * Created by Park Seong-beom on 2018.8
 * FIXME: components 구조 리팩토링
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingLeft: 30,
    paddingRight: 30,
  },
  logoGraphic: {
    width: 100,
    height: 100,
  },
  logoType: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  topContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  commonButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  button: {
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#303030',
    borderBottomWidth: 1,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  facebookButton: {
    width: '100%',
    backgroundColor: '#4267B2',
  },
  facebookButtonText: {
    color: '#FFFFFF',
  },
  signinButton: {
    width: '49%',
    backgroundColor: '#FFFFFF',
    marginRight: '1%',
  },
  signupButton: {
    width: '49%',
    backgroundColor: '#FFFFFF',
    marginLeft: '1%',
  },
  commonButtonText: {
    color: '#000000',
  },
});

class Landing extends React.Component {
  static navigationOptions = {
    header: null,
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
        <ImageBackground
          style={styles.backgroundImage}
          imageStyle={{ resizeMode: 'stretch' }}
          source={{ uri: 'https://thechive.files.wordpress.com/2017/10/your-phone-called-it-wants-a-new-wallpaper-36-photos-26.jpg?quality=85&strip=info&w=600' }}
        >
          <View style={styles.contentContainer}>
            <View style={styles.topContainer}>
              <Image style={styles.logoGraphic} source={require('../../assets/logo.png')} />
              <Text style={styles.logoType}>Withsome+</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableHighlight style={[styles.button, styles.facebookButton]}>
                <Text style={styles.facebookButtonText}>페이스북으로 로그인</Text>
              </TouchableHighlight>
              <View style={styles.commonButtonContainer}>
                <TouchableHighlight style={[styles.button, styles.signinButton]} onPress={() => navigation.navigate('SignInScreen')}>
                  <Text style={styles.commonButtonText}>로그인</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.button, styles.signupButton]} onPress={() => navigation.navigate('SignUpFlow')}>
                  <Text style={styles.commonButtonText}>회원가입</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Landing;
