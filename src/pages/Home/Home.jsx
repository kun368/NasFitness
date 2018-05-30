import React, {Component} from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PlatformIntro from './components/PlatformIntro';
import PlatformToolsIntro from './components/PlatformToolsIntro';
import PlatformLanding from './components/PlatformLanding';
import UserForm from "./components/UserForm/UserForm";
import GaugeCarChart from "./components/GaugeCarChart/GaugeCarChart";
import RadarChart from "./components/RadarChart/RadarChart";
import ReviewDetailInfo from "./components/ReviewDetailInfo/ReviewDetailInfo";
import NebUtils from "../../util/NebUtils";
import {Base64} from 'js-base64';
import moment from 'moment';
import {Feedback, Button} from '@icedesign/base';
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

        {/*<RadarChart/>*/}
        {/*<ReviewDetailInfo/>*/}
        <PlatformToolsIntro/>
        <Footer/>
      </div>
    );
  }
}
