import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Base64} from 'js-base64';
import NebUtils from "../../../../util/NebUtils";
import {Feedback } from '@icedesign/base';
import ReactEcharts from 'echarts-for-react';

const Toast = Feedback.toast;

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
                    console.log(resp);

                    this.setState({
                        dataSource: resp.reverse(),
                    });
                },
            );
        })
    }

    getOption() {

    }

    render() {
        return (
            <div style={styles.wrapper}>
                <div style={styles.body}>
                    <h2 style={styles.title}>身体状况分析</h2>
                    <p style={styles.text}>
                        每个创作者都拥有自己的粉丝阵地<br/>有力的粉丝运营抓手<br/>高效连接每一位粉丝
                    </p>
                </div>
                <ReactEcharts option={this.getOption()} />
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
};
