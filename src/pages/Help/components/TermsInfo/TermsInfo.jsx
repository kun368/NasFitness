import React, {Component} from 'react';
import IceContainer from '@icedesign/container';
import {Checkbox, Button} from '@icedesign/base';

export default class TermsInfo extends Component {
  static displayName = 'TermsInfo';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer>
        <h1 style={styles.title}>星云健身助手使用帮助</h1>

        <div style={styles.content}>
          <p style={styles.desc}>
            <span style={styles.importantText}>
              星云健身助手是基于NAS智能合约的去中心化健身辅助平台。
            </span>
            星云健身助手可以帮助您永久安全保存健身数据到区块链，并提供专业的身体状况分析。让您见证自我身体变化的奇迹。
          </p>
          <p style={styles.desc}>
            本站的数据是存放在星云区块链智能合约上的。区块链是分布式数据存储、点对点传输、共识机制、加密算法等计算机技术的新型应用模式。
            区块链具有去中心化、开放性、自治性、信息不可篡改、匿名性等特征。
          </p>
          <p style={styles.desc}>
            借助于区块链技术的驱动，本站可以实现健身数据的永久保存、不可篡改，让您随时随地查询自己的历史健身数据，再也不怕App信息丢失等问题。
            同时，区块链还具有匿名的特性，您可以保存自己的健身数据，而没有人知道您是谁。解决了有些健身爱好者，怕身体数据暂时不理想，而不好意思公开的问题。
          </p>

          <p style={styles.desc}>
            同时，我们还支持身高、体重、BMI、体脂率、胸围、腰围、臀围、大腿围、小腿围、臂围，全方位为您的健身提供专业服务。
          </p>

          <p style={styles.desc}>
            <span style={styles.importantText}>
               简单来讲，我们已采取符合业界最新技术标准（区块链）、合理可行的安全防护措施保护您提供的个人健身数据安全，保证健身数据的安全性、匿名性！
            </span>
          </p>

          <p style={styles.desc}>
            <div style={styles.importantText}>
              如果您在使用“星云健身助手”网站时有任何地方需要帮助，可以通过此链接给我们反馈，星云健身助手团队会在第一时间进行回复：
              <a href="https://github.com/kun368/NasFitness/issues/new" target="_blank">https://github.com/kun368/NasFitness/issues/new</a>
            </div>
          </p>

          <hr/><h1>通过网页版钱包插件使用星云健身助手：</h1>
          <p style={styles.desc}>
            第一步：推荐下载使用Chrome浏览器，并安装WebExtensionWallet扩展，扩展下载地址：
            <a href="https://github.com/ChengOrangeJu/WebExtensionWallet" target="_blank">
              https://github.com/ChengOrangeJu/WebExtensionWallet
            </a>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/82607678.jpg"/>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/81941861.jpg"/>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/66738463.jpg"/>
          </p>
          <p style={styles.desc}>
            第二步，打开本站，添加一次身体数据（其中体重、身高、纪录时间必填，其他选填，后续会开通更多身体指标）：
            <a href="http://nas-fitness.zzkun.com/" target="_blank">
              http://nas-fitness.zzkun.com/
            </a>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/58024804.jpg"/>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/49571918.jpg"/>
          </p>
          <p style={styles.desc}>
            第三步，提交身体数据后，弹出交易框，确认交易
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/11358172.jpg"/>
          </p>
          <p style={styles.desc}>
            第四步，刷新首页查看最新身体数据和分析结果
            <a href="http://nas-fitness.zzkun.com/" target="_blank">
              http://nas-fitness.zzkun.com/
            </a>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/86691929.jpg"/>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/30747430.jpg"/>
          </p>

          <hr/>
          <h1>通过移动版手机钱包插件使用星云健身助手：</h1>
          <p style={styles.desc}>
            第一步：推荐下载使用Chrome浏览器，并安装WebExtensionWallet扩展，扩展下载地址：
            <a href="https://github.com/ChengOrangeJu/WebExtensionWallet" target="_blank">
              https://github.com/ChengOrangeJu/WebExtensionWallet
            </a>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/82607678.jpg"/>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/81941861.jpg"/>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/66738463.jpg"/>
          </p>
          <p style={styles.desc}>
            第二步，打开本站，添加一次身体数据（其中体重、身高、纪录时间必填，其他选填，后续会开通更多身体指标）：
            <a href="http://nas-fitness.zzkun.com/" target="_blank">
              http://nas-fitness.zzkun.com/
            </a>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/58024804.jpg"/>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/49571918.jpg"/>
          </p>
          <p style={styles.desc}>
            第三步，提交身体数据后，弹出交易框，使用手机钱包拍摄二维码交易
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/11358172.jpg"/>
          </p>
          <p style={styles.desc}>
            第四步，打开星云钱包APP<br/>
            <img style={styles.myAutoImgPhone} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/70130081.jpg"/>
          </p>
          <p style={styles.desc}><br/>
            第五步，点击首页的“我要转账”，选择转账方式为：扫码<br/>
            <img style={styles.myAutoImgPhone} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/53289110.jpg"/>
          </p>
          <p style={styles.desc}>
            第六步，扫码后，输入密码确认交易，文件开始上链<br/>
            <img style={styles.myAutoImgPhone} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/8578306.jpg" />
          </p>
          <p style={styles.desc}>
            第七步，交易后提示发起交易成功<br/>
            <img style={styles.myAutoImgPhone} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/97014788.jpg" />
          </p>
          <p style={styles.desc}>
            第八步，刷新首页查看最新身体数据和分析结果
            <a href="http://nas-fitness.zzkun.com/" target="_blank">
              http://nas-fitness.zzkun.com/
            </a>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/86691929.jpg"/>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/30747430.jpg"/>
          </p>

        </div>

        <br/>
        <div style={styles.btn}>
          <Button
            type="primary"
            size="large"
            component="a"
            href="/#/"
          >
            开始使用
          </Button>
        </div>
      </IceContainer>
    );
  }
}

const styles = {
  desc: {
    fontSize: '15px',
    lineHeight: '34px',
  },
  title: {
    textAlign: 'center',
    margin: 0,
    paddingBottom: '20px',
    fontSize: '20px',
    borderBottom: '1px solid #dedede',
  },
  content: {
    color: '#666',
    fontSize: '16px',
    padding: '20px 0',
    borderBottom: '1px solid #dedede',
  },
  btn: {
    textAlign: 'center',
  },

  importantText: {
    color: '#6633ff',
    fontWeight: 900,
  },
  myAutoImg: {
    backgroundSize: 'contain|cover',
    width: '100%',
    height: 'auto',
    margin: '15px',
    borderRadius: '5%',
    border: '3px solid burlywood'
  },
  myAutoImgPhone: {
    backgroundSize: 'contain|cover',
    width: '50%',
    height: 'auto',
    margin: '15px',
    borderRadius: '5%',
    border: '3px solid burlywood',
    textAlign: 'center',
  }
};
