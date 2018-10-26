/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import WideFloatingButton from '../../components/WideFloatingButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingLeft: 30,
    paddingRight: 30,
  },
  topContainer: {
    flex: 9,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textH1: {
    fontSize: 26,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  textH2: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  buttonContainer: {
    flex: 2,
  },
});

class Greeting extends React.Component {
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
              <Text style={styles.textH1}>환영합니다!</Text>
              <Text style={styles.textH2}>이제 프로필을 설정해보세요.</Text>
            </View>
            <View style={styles.buttonContainer}>
              <WideFloatingButton
                text="프로필 설정하기"
                action={() => navigation.navigate('ProfileSettingsFlow')}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Greeting;
