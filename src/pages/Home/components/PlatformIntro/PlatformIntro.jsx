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
            dataSource: [],
            prepared: false,
            fitScore: '准备数据中...',
            userAddress: null,
            echartsOption: {
                title: {
                    text: `曲线图`
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: []
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
                    data: []
                },
                yAxis: {
                    type: 'value'
                },
                series: []
            },
        };
    }

    componentDidMount() {
        if (!NebUtils.checkInstalledPlugin()) {
            Toast.error('还未安装Chrome扩展，为了体验全部功能，请点击页面上方的下载按钮！');
        }
        NebUtils.getPluginUserAddress(addr => {
            this.setState({
                userAddress: addr
            });
            NebUtils.userCallAxios(
                "queryMyRecord",
                `["${addr}"]`,
                resp => {
                    resp = resp.sort((x, y) => {
                        return parseInt(x.recordTime) - parseInt(y.recordTime);
                    });
                    this.setState({
                        dataSource: resp,
                        prepared: true
                    });
                    this.genFitScore();
                    this.renderSpecific("体重", "tizhong", "KG");
                },
            );
        })
    }

    genFitScore() {
        // todo：计算用户身体质量评分
        this.setState({
            fitScore: '90分',
        })
    }

    renderSpecific(nameCn, nameEn, scale) {
        if (!this.state.prepared) {
            Toast.error("请等待系统获取数据~");
            return;
        }

        const option = {
            title: {
                text: `${nameCn}曲线图（${scale}）`
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: [nameCn]
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
                data: this.state.dataSource
                    .filter(it => {
                        return it[nameEn]
                    })
                    .map(it => {
                        return moment.unix(it.recordTime).format("LLL")
                    }),
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: nameCn,
                    type: 'line',
                    stack: '总量',
                    smooth: true,
                    data: this.state.dataSource
                        .filter(it => {
                            return it[nameEn]
                        })
                        .map(it => {
                            return it[nameEn]
                        }),
                },
            ]
        };
        this.setState({
            echartsOption: option,
        })
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <div style={styles.body}>
                    <h2 style={styles.title}>身体状况分析（{this.state.fitScore}）</h2>
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
                                onClick={this.renderSpecific.bind(this, '体重', 'tizhong', "KG")}>体重</Button>
                        <Button type="primary"
                                onClick={this.renderSpecific.bind(this, '身高', 'shengao', "CM")}>身高</Button>
                        <Button type="primary"
                                onClick={this.renderSpecific.bind(this, '体脂率', 'tizhilv', "%")}>体脂率</Button>
                        <Button type="secondary"
                                onClick={this.renderSpecific.bind(this, '胸围', 'xiongwei', "CM")}>胸围</Button>
                        <Button type="secondary"
                                onClick={this.renderSpecific.bind(this, '腰围', 'yaowei', "CM")}>腰围</Button>
                        <Button type="secondary"
                                onClick={this.renderSpecific.bind(this, '臀围', 'tunwei', "CM")}>臀围</Button>
                        <Button type="normal"
                                onClick={this.renderSpecific.bind(this, '大腿围', 'datuiwei', "CM")}>大腿围</Button>
                        <Button type="normal"
                                onClick={this.renderSpecific.bind(this, '小腿围', 'xiaotuiwei', "CM")}>小腿围</Button>
                        <Button type="normal" onClick={this.renderSpecific.bind(this, '臂围', 'biwei', "CM")}>臂围</Button>
                    </ButtonGroup>
                </div>
                <div style={styles.echart}>
                    <ReactEcharts
                        option={this.state.echartsOption}/>
                </div>
            </div>
        );
    }
}

const styles = {
    wrapper: {
        height: 740,
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
