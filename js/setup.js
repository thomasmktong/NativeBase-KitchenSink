import Exponent from 'exponent';
import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './configureStore';

export default class setup extends Component {

    constructor() {
      super();
      this.state = {
        isLoading: false,
        store: configureStore(() => this.setState({ isLoading: false })),
    isReady: false,
      };
    }

  async componentWillMount() {
      await Exponent.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });

    this.setState({isReady: true});
  }

    render() {
      if (!this.state.isReady) {
      return <Exponent.Components.AppLoading />;
    }
      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      );
    }
  }

