import React, { Component } from 'react';
import { Grid } from '@icedesign/base';

const { Row, Col } = Grid;

export default class RealTimeStatistics extends Component {
  static displayName = 'RealTimeStatistics';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  extractLast2Float(dataSource, key) {
    let ret = '';
    for (const it of dataSource) {
      if (it && it[key]) {
        ret = it[key];
      }
    }
    if (ret === '') {
      return 0;
    }
    return parseFloat(ret);
  }

  renderInit() {
    return (
      <div className="real-time-statistics" style={{margin: '20px 8%'}}>
        <Row wrap gutter="20" style={styles.items}>
          <Col xxs="24" s="24" l="24">
            <p style={{textAlign: 'center'}}>暂无数据，您可以添加新的身体数据哦~</p>
          </Col>
        </Row>
      </div>
    );
  }

  calcBMIResult(bmi) {
    let ret = '偏瘦';
    if (bmi > 18.4) {
      ret = '正常';
    }
    if (bmi > 23.9) {
      ret = '过重';
    }
    if (bmi > 27.9) {
      ret = '肥胖';
    }
    return ret;
  }

  render() {
    if (!this.props.prepared || this.props.dataSource.length === 0) {
      return this.renderInit();
    }

    const dat = this.props.dataSource;
    const tizhong = this.extractLast2Float(dat, 'tizhong');
    const shengao = this.extractLast2Float(dat, 'shengao');
    const bmi = (tizhong / (shengao / 100) / (shengao / 100)).toFixed(2);
    const bmi1 = this.calcBMIResult(bmi);

    return (
      <div className="real-time-statistics" style={{margin: '20px 8%'}}>
        <Row wrap gutter="20" style={styles.items}>
          <Col xxs="24" s="12" l="6">
            <div style={{ ...styles.itemBody, ...styles.green }}>
              <div style={styles.itemTitle}>
                <p style={styles.titleText}>体重</p>
                <span style={styles.tag}>最新</span>
              </div>
              <div style={styles.itemContent}>
                <h2 style={styles.itemNum}>{tizhong}</h2>
                <div style={styles.itemMeta}>
                  <p style={styles.desc}>当前最新的体重纪录（KG）</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xxs="24" s="12" l="6">
            <div style={{ ...styles.itemBody, ...styles.lightBlue }}>
              <div style={styles.itemTitle}>
                <p style={styles.titleText}>身高</p>
                <span style={styles.tag}>最新</span>
              </div>
              <div style={styles.itemContent}>
                <h2 style={styles.itemNum}>{shengao}</h2>
                <div style={styles.itemMeta}>
                  <p style={styles.desc}>当前最新的身高纪录（CM）</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xxs="24" s="12" l="6">
            <div style={{ ...styles.itemBody, ...styles.darkBlue }}>
              <div style={styles.itemTitle}>
                <p style={styles.titleText}>BMI指数</p>
                <span style={styles.tag}>最新</span>
              </div>
              <div style={styles.itemContent}>
                <h2 style={styles.itemNum}>{bmi}</h2>
                <div style={styles.itemMeta}>
                  <p style={styles.desc}>当前最新身体质量指数BMI</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xxs="24" s="12" l="6">
            <div style={{ ...styles.itemBody, ...styles.navyBlue }}>
              <div style={styles.itemTitle}>
                <p style={styles.titleText}>BMI指数评价</p>
                <span style={styles.tag}>最新</span>
              </div>
              <div style={styles.itemContent}>
                <h2 style={styles.itemNum}>{bmi1}</h2>
                <div style={styles.itemMeta}>
                  <p style={styles.desc}>当前最新身体质量指数BMI评价</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const styles = {
  item: {
    marginBottom: '20px',
  },
  itemBody: {
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '4px',
    color: '#fff',
    height: '158px',
  },
  itemRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitle: {
    position: 'relative',
  },
  titleText: {
    margin: 0,
    fontSize: '14px',
  },
  tag: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: '2px 4px',
    borderRadius: '4px',
    fontSize: '12px',
    background: 'rgba(255, 255, 255, 0.3)',
  },
  itemNum: {
    margin: '16px 0',
    fontSize: '32px',
  },
  total: {
    margin: 0,
    fontSize: '12px',
  },
  desc: {
    margin: 0,
    fontSize: '12px',
  },
  green: {
    background: '#31B48D',
  },
  lightBlue: {
    background: '#38A1F2',
  },
  darkBlue: {
    background: '#7538C7',
  },
  navyBlue: {
    background: '#3B67A4',
  },
};
