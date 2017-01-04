
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Container, Icon, Text } from 'native-base/backward';
import { Icon as IconNB } from 'native-base';
import { Header, Button, Tabs, TabContent } from 'native-base/ui';
import { openDrawer } from '../../actions/drawer';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class Smart extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>

        <Header leftButton={<Icon name="ios-menu" />} leftButtonPress={this.props.openDrawer} title="Header" rightButton={<IconNB name="apps" />} rightButtonPress={this.props.openDrawer} style={{}} leftButtonStyle={{}} titleStyle={{}} rightButtonStyle={{}} />


        <View style={{ backgroundColor: '#FBFAFA', flex: 1 }}>
          <Tabs initialPage={1} tabBarPosition="top" vertical tabBarTextStyle={{}} tabBarIconStyle={{}} tabBarStyle={{}} underlineStyle={{}}>

            <TabContent padder tabLabel="Features" tabIcon="ios-camera">
              <Text>Content 1</Text>
            </TabContent>

            <TabContent padder tabLabel="About" tabIcon="ios-apps">
              <Text>Content 2</Text>
              <Button info bordered rounded style={{}} iconLeft={<IconNB name="arrow-back" />} iconRight={<IconNB name="arrow-forward" />} buttonText={'Button'} buttonTextStyle={{}} />
            </TabContent>

          </Tabs>


        </View>


      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Smart);
