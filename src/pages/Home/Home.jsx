import React, {Component} from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PlatformIntro from './components/PlatformIntro';
import PlatformToolsIntro from './components/PlatformToolsIntro';
import PlatformLanding from './components/PlatformLanding';
import UserForm from "./components/UserForm/UserForm";
import NebUtils from "../../util/NebUtils";
import {Feedback} from '@icedesign/base';
import RealTimeStatistics from "./components/RealTimeStatistics/RealTimeStatistics";

const Toast = Feedback.toast;

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      prepared: false,
      userAddress: null,
    };
  }

  componentDidMount() {
    if (!NebUtils.checkInstalledPlugin()) {
      Toast.error('还未安装Chrome扩展，为了体验全部功能，请点击页面上方的下载按钮！');
    }
    NebUtils.getPluginUserAddress(addr => {
      NebUtils.userCallAxios(
        "queryMyRecord",
        `["${addr}"]`,
        resp => {
          resp = resp.sort((x, y) => {
            return parseInt(x.recordTime) - parseInt(y.recordTime);
          });
          this.setState({
            dataSource: resp,
            prepared: true,
            userAddress: addr
          });
        },
      );
    })
  }

  render() {
    return (
      <div className="home-page" style={{background: '#fff'}}>
        <Header/>
        <PlatformLanding/>
        <RealTimeStatistics
          dataSource={this.state.dataSource}
          prepared={this.state.prepared}
          userAddress={this.state.userAddress}
        />
        <PlatformIntro
          dataSource={this.state.dataSource}
          prepared={this.state.prepared}
          userAddress={this.state.userAddress}
        />
        <UserForm/>
        <PlatformToolsIntro/>
        <Footer/>
      </div>
    );
  }
}
