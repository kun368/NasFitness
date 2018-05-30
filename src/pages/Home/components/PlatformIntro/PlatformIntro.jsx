import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Base64} from 'js-base64';
import NebUtils from "../../../../util/NebUtils";
import {Feedback, Button} from '@icedesign/base';
import ReactEcharts from 'echarts-for-react';
import moment from 'moment';


const Toast = Feedback.toast;
const ButtonGroup = Button.Group;

moment.locale('zh-cn');

export default class PlatformIntro extends Component {
  static displayName = 'PlatformIntro';

  static propTypes = {
    value: PropTypes.string,
  };

  static defaultProps = {
    value: 'string data',
  };

  constructor(props) {
    super(props);
    this.state = {
      nameCn: '体重',
      nameEn: 'tizhong',
      scale: 'KG',
    };
  }

  getOption() {
    return {
      title: {
        text: `${this.state.nameCn}曲线图（${this.state.scale}）`
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: [this.state.nameCn]
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.props.dataSource
          .filter(it => {
            return it[this.state.nameEn]
          })
          .map(it => {
            return moment.unix(it.recordTime).format("LLL")
          }),
      },
      yAxis: {
        type: 'value',
        min: 'dataMin',
        max: 'dataMax'
      },
      series: [
        {
          name: this.state.nameCn,
          type: 'line',
          stack: '总量',
          smooth: true,
          data: this.props.dataSource
            .filter(it => {
              return it[this.state.nameEn]
            })
            .map(it => {
              return it[this.state.nameEn]
            }),
        },
      ]
    };
  }

  change(nameCn, nameEn, scale) {
    this.setState({
      nameCn: nameCn,
      nameEn: nameEn,
      scale: scale
    });
  }

  renderInitChart() {
    return (
      <p style={{textAlign: 'center', margin: '20px'}}>暂无数据，您可以添加新的身体数据哦~</p>
    );
  }

  renderChart() {
    return (
      <div style={styles.echart}>
        <ReactEcharts
          option={this.getOption()}/>
      </div>
    );
  }

  render() {
    let chart = this.renderInitChart();
    if (!this.props.prepared || this.props.dataSource.length === 0) {
      chart = this.renderInitChart();
    } else {
      chart = this.renderChart();
    }

    return (
      <div style={styles.wrapper}>
        <div style={styles.body}>
          <h2 style={styles.title}>身体数据历史分析</h2>
          <p style={styles.text}>
            了解自己的身体各方面变化情况
            <br/>
            有力的健康保障
            <br/>
            健康生活每一天
          </p>
          <div style={{paddingBottom: '20px'}}/>
          <ButtonGroup>
            <Button type="primary"
                    onClick={this.change.bind(this, '体重', 'tizhong', "KG")}>体重</Button>
            <Button type="primary"
                    onClick={this.change.bind(this, '身高', 'shengao', "CM")}>身高</Button>
            <Button type="primary"
                    onClick={this.change.bind(this, '体脂率', 'tizhilv', "%")}>体脂率</Button>
            <Button type="secondary"
                    onClick={this.change.bind(this, '胸围', 'xiongwei', "CM")}>胸围</Button>
            <Button type="secondary"
                    onClick={this.change.bind(this, '腰围', 'yaowei', "CM")}>腰围</Button>
            <Button type="secondary"
                    onClick={this.change.bind(this, '臀围', 'tunwei', "CM")}>臀围</Button>
            <Button type="normal"
                    onClick={this.change.bind(this, '大腿围', 'datuiwei', "CM")}>大腿围</Button>
            <Button type="normal"
                    onClick={this.change.bind(this, '小腿围', 'xiaotuiwei', "CM")}>小腿围</Button>
            <Button type="normal"
                    onClick={this.change.bind(this, '臂围', 'biwei', "CM")}>臂围</Button>
          </ButtonGroup>
          { chart }
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    height: 666,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  body: {
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    color: '#000',
    marginBottom: 20,
    marginTop: 50,
  },
  text: {
    fontSize: 14,
    color: '#666',
    lineHeight: '24px',
    letterSpacing: 2,
  },
  image: {
    margin: '20px auto 0 auto',
    display: 'block',
  },
  echart: {
    margin: '66px 16%'
  }
};
