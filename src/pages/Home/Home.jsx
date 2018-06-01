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
import { Dialog } from '@icedesign/base';

const Toast = Feedback.toast;

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      prepared: false,
      userAddress: null,
      welcomeDialogShow: true,
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

  onWelcomeDialogClose = () => {
    this.setState({
      welcomeDialogShow: false
    });
  };

  renderWelcomeDialog() {
    return (
      <Dialog
        visible={this.state.welcomeDialogShow}
        onOk={this.onWelcomeDialogClose}
        closable="esc,mask,close"
        onCancel={this.onWelcomeDialogClose}
        onClose={this.onWelcomeDialogClose}
        title="欢迎体验新版星云健身助手！"
      >
        <p style={{color: 'red'}}>星云健身助手新版本隆重上线，可跨平台使用，率先支持四种使用方式，并添加详细的使用帮助，为您的身体健康保驾护航！</p>
        <ul>
          <li>方法一. Chrome浏览器打开本应用，安装WebExtensionWallet扩展，使用扩展本身交易</li>
          <li>方法二. Chrome浏览器打开本应用，安装WebExtensionWallet扩展和NAS手机钱包，使用手机扫码交易</li>
          <li>方法三. 手机/平板浏览器打开星云健身助手，上传文件时自动调用钱包交易（只需要安装NAS手机钱包）</li>
          <li>方法四. 直接在NAS手机钱包DApp市场里选择本应用使用</li>
        </ul>
        <p style={{color: 'red'}}>新版本还添加了BMI分析等工具，更多详细使用方式请查看使用帮助手册！</p>
      </Dialog>
    );
  }

  render() {
    return (
      <div className="home-page" style={{background: '#fff'}}>
        {this.renderWelcomeDialog()}
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
