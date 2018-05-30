import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Icon} from '@icedesign/base';

const ButtonGroup = Button.Group;

export default class PlatformLanding extends Component {
  static displayName = 'PlatformLanding';

  static propTypes = {
    value: PropTypes.string,
  };

  static defaultProps = {
    value: 'string data',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.body}>
          <h2 style={styles.title}>
            <Icon type="credit-level" size="xxl"/> 星云健身助手
          </h2>
          <h5 style={styles.title2}>
            星云健身助手是基于NAS智能合约的去中心化健身辅助平台。
            可以帮助您永久安全保存健身数据到区块链，并提供非常专业的身体状况分析。
            让您见证自我身体奇迹。
          </h5>

          <br/>
          <ButtonGroup>
            <Button
              type="primary"
              component="a"
              target="_blank"
              href="https://incentive.nebulas.io/cn/signup.html?invite=OILxo"
            >
              <Icon type="gifts" /> 我也要开发
            </Button>
            <Button
              type="primary"
              component="a"
              target="_blank"
              href="/#/Help"
            >
              <Icon type="form" /> 查看使用帮助
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

const styles = {
  buttons: {textAlign: 'center', marginTop: 33},
  body: {
    position: 'absolute',
    top: '100px',
    left: '50%',
    marginLeft: '-300px',
    width: '600px',
    color: '#fff',
    maxHeight: '260px',
    overflow: 'hidden',
    textAlign: 'center',
  },
  wrapper: {
    overflow: 'hidden',
    height: 420,
    backgroundImage:
      'url("http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-26/50432307.jpg")',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundColor: '#66ABFF',
    boxShadow: '0 1px 16px 0 rgba(0,0,0,0.10)',
  },
  title: {
    fontSize: '40px',
    // color: '#333',
    letterSpacing: '2px',
    lineHeight: '48px',
    textAlign: 'center',
  },
  title2: {
    // fontSize: '32px',
    // color: '#333',
    letterSpacing: '2px',
    // lineHeight: '48px',
    textAlign: 'center',
  },
  primaryButton: {
    height: 50,
    fontSize: 16,
    padding: '0 58px',
    lineHeight: '50px',
    color: '#fff',
  },
  secondaryButton: {
    height: 50,
    fontSize: 16,
    padding: '0 58px',
    lineHeight: '50px',
    marginRight: 20,
    backgroundColor: 'transparent',
    borderColor: '#5485f7',
    color: '#5485f7',
  },
};
