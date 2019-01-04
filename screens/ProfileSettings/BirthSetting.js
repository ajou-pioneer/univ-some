/**
 * Created by Park Seong-beom on 2018.8
 * TODO: day combo box item에 월별 마지막 일자 출력.
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Picker,
} from 'react-native';
import PropTypes from 'prop-types';
import TextStyles from '../styles/TextStyle';
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
  pickerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  picker: {
    width: '100%',
    height: 50,
  },
  dateText: {
    fontSize: 18,
  },
});

class BirthSetting extends React.Component {
  static navigationOptions = {
    title: '프로필',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      day: '1일',
      month: '1월',
      year: '1990년',
    };
  }

  // The function made by Aditya Singh
  // Original at https://bit.ly/2vOqIm6
  range = (start, end) => {
    return Array.from({ length: ((end + 1) - start) }, (v, k) => k + start);
  };

  setDate = (value, index, type) => {
    this.setState({
      [type]: value,
    });
  };

  render() {
    const { navigation } = this.props;
    const { day, month, year } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.formContainer} onPress={() => this.setDate()}>
          <Text style={TextStyles.h1Text}>생년월일</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={year}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => this.setDate(itemValue, itemIndex, 'year')}
            >
              {this.range(1990, 2000).map((y) => {
                const yearString = `${y}년`;
                return (<Picker.Item key={y} label={yearString} value={yearString} />);
              })}
            </Picker>
            <Picker
              selectedValue={month}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => this.setDate(itemValue, itemIndex, 'month')}
            >
              {this.range(1, 12).map((m) => {
                const monthString = `${m}월`;
                return (<Picker.Item key={m} label={monthString} value={monthString} />);
              })}
            </Picker>
            <Picker
              selectedValue={day}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => this.setDate(itemValue, itemIndex, 'day')}
            >
              <Picker.Item label="1일" value="1일" />
            </Picker>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <WideFloatingButton
            text="확인"
            action={() => navigation.navigate('PicturesSettingScreen')}
          />
        </View>
      </View>
    );
  }
}

export default BirthSetting;
