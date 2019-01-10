/**
 * Created by Park Seong-beom on 2018.8
 * TODO: 각 tag에 대해 checkbox 기능 구현.
 * TODO: tags 얻어오는 과정을 확장 가능하도록 구현.
 * TODO: tag 검색 기능 구현.
 * FIXME: component의 border를 shadow로 변경.
 * FIXME: content가 길어질 때 scroll 처리.
 */

import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import uuidvl from 'uuid';
import Accordion from 'react-native-collapsible/Accordion';
import WideFloatingButton from '../components/WideFloatingButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  formContainer: {
    flex: 9,
  },
  searchControl: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 16,
  },
  buttonContainer: {
    flex: 2,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  accordionContainer: {
    marginTop: 10,
  },
  accordionTitleContainer: {
    borderColor: '#EEEEEE',
    borderTopWidth: 1,
    padding: 20,
  },
  accordionContentContainer: {
    flexWrap: 'wrap',
    backgroundColor: '#FDFDFD',
    padding: 10,
    flexDirection: 'row',
  },
  tag: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 10,
    marginBottom: 15,
    borderRadius: 50,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  tagText: {
    color: '#8E8E93',
  },
});

class TagSetting extends React.Component {
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
      accordionSections: [
        {
          title: '취미',
          tags: ['디자인', '영화', '게임', '프로그래밍', '영화', '게임', '프로그래밍', '영화', '게임'],
        }, {
          title: '취미',
          tags: ['디자인', '영화', '게임', '프로그래밍', '영화', '게임', '프로그래밍', '영화', '게임'],
        }, {
          title: '취미',
          tags: ['디자인', '영화', '게임', '프로그래밍', '영화', '게임', '프로그래밍', '영화', '게임'],
        }, {
          title: '취미',
          tags: ['디자인', '영화', '게임', '프로그래밍', '영화', '게임', '프로그래밍', '영화', '게임'],
        }, {
          title: '성격',
          tags: ['외향적', '내향적'],
        },
      ],
    };
  }

  renderAccordionTitle = (section) => {
    return (
      <View style={styles.accordionTitleContainer}>
        <Text>{section.title}</Text>
      </View>
    );
  }

  renderAccordionContent = (section) => {
    return (
      <View style={styles.accordionContentContainer}>
        {section.tags.map((tag) => {
          return (
            <View style={styles.tag} key={uuidvl()}>
              <Text style={styles.tagText}>{`#${tag}`}</Text>
            </View>
          );
        })}
      </View>
    );
  }

  render() {
    const { navigation } = this.props;
    const { accordionSections } = this.state;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.accordionContainer}>
            <Accordion
              sections={accordionSections}
              renderHeader={this.renderAccordionTitle}
              renderContent={this.renderAccordionContent}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <WideFloatingButton
            text="확인"
            action={() => navigation.navigate('MainFlow')}
          />
        </View>
      </ScrollView>
    );
  }
}

export default TagSetting;
