/**
 * Created by Park Seong-beom on 2018.8
 * TODO: carousel item 사진 업로드 구현.
 * FIXME: blank carousel item의 '+' 텍스트 벡터 아이콘으로 변경.
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import WideFloatingButton from '../components/WideFloatingButton';
import TextStyle from '../styles/TextStyle';

const sliderWidth = Dimensions.get('window').width;
const itemWidth = Dimensions.get('window').width - 70;
const itemHeight = itemWidth + 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  formContainer: {
    flex: 9,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 2,
    paddingLeft: 30,
    paddingRight: 30,
  },
  carouselContainer: {
    width: sliderWidth,
    height: itemHeight,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  blankCarouselItem: {
    width: '100%',
    height: itemHeight,
    backgroundColor: '#DFDFDF',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blankCarouselItemText: {
    color: '#FFFFFF',
    fontSize: 64,
    fontWeight: 'bold',
  },
  controlText: {
    marginLeft: 35,
  },
});

class PictureSetting extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  static navigationOptions = {
    title: '프로필',
  };

  constructor(props) {
    super(props);

    this.state = {
      carouselItems: [
        {
          img: 'https://s3.orbi.kr/data/file/united/abe43211866fb132f736094226cc427b.jpg',
        }, {
          img: '',
        }, {
          img: '',
        }, {
          img: '',
        },
      ],
    };
  }

  renderCarouselItem = ({ item }) => {
    if (item.img) {
      return (
        <TouchableOpacity>
          <ImageBackground
            style={{ width: '100%', height: itemHeight }}
            imageStyle={{ resizeMode: 'cover' }}
            source={{ uri: item.img }}
            borderRadius={30}
          >
            <View />
          </ImageBackground>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity>
        <View style={styles.blankCarouselItem}>
          <Text style={styles.blankCarouselItemText}>+</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { navigation } = this.props;
    const { carouselItems } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={[styles.controlText, TextStyle.h1Text]}>사진</Text>
          <View style={styles.carouselContainer}>
            <Carousel
              data={carouselItems}
              renderItem={this.renderCarouselItem}
              itemWidth={itemWidth}
              sliderWidth={sliderWidth}
              itemHeight={itemWidth}
              sliderHeight={200}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <WideFloatingButton
            text="확인"
            action={() => navigation.navigate('BioSettingScreen')}
          />
        </View>
      </View>
    );
  }
}

export default PictureSetting;
