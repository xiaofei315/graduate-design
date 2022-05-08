import {Component} from 'react';
import {Provider} from 'react-redux';
import Taro from '@tarojs/taro';
import store from './store';

class App extends Component {
  componentDidMount() {
    Taro.cloud.init({
      env: 'account-dev-4gls3cdk24659538',
      traceUser: true,
    });
  }

  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
