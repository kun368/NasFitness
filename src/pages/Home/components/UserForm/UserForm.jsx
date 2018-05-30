/* eslint react/no-string-refs:0 */
import React, {Component} from 'react';
import IceContainer from '@icedesign/container';
import {Input, Grid, Button, Select, DatePicker, TimePicker, Feedback} from '@icedesign/base';
import {
    FormBinderWrapper as IceFormBinderWrapper,
    FormBinder as IceFormBinder,
    FormError as IceFormError,
} from '@icedesign/form-binder';
import NebUtils from '../../../../util/NebUtils.js'
import { Base64 } from 'js-base64';
import moment from 'moment';

const Toast = Feedback.toast;
const {Row, Col} = Grid;

export default class UserForm extends Component {
    static displayName = 'UserForm';

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            value: {
                tizhong: '',
                shengao: '',
                tizhilv: '',
                xiongwei: '',
                yaowei: '',
                tunwei: '',
                datuiwei: '',
                xiaotuiwei: '',
                biwei: '',
                recordDate: '',
                recordTime: '',
            },
        };
    }


    formChange = (value) => {
        this.setState({
            value,
        });
    };

    validateAllFormField = () => {
        this.refs.form.validateAll((errors, values) => {
            console.log('values', values);
            if (errors) {
                return;
            }
            if (!values.recordDate || !values.recordTime) {
                Toast.error("请输入此数据的测量日期！");
                return;
            }

            const date = moment(values.recordDate).format("YYYYMMDD");
            const time = moment(values.recordTime).format("HH:mm:ss");
            const sec = moment(date + " " + time, 'YYYYMMDD HH:mm:ss').unix();

            if (!NebUtils.checkInstalledPlugin()) {
                Toast.error('还未安装Chrome扩展，请点击页面上方的下载按钮');
            }
            const contract = {
                function: 'createRecord',
                args: `["${sec}", "${values.tizhong}", "${values.shengao}", "${values.tizhilv}", "${values.xiongwei}", "${values.yaowei}", "${values.tunwei}", "${values.datuiwei}", "${values.xiaotuiwei}", "${values.biwei}"]`,
            };
            NebUtils.pluginCall(contract.function, contract.args, (txHash) => {
                Toast.success("已提交交易，交易成功即记录身体状况成功！")
            });
        });
    };

    render() {
        return (
            <div className="user-form" style={{marginLeft: '16%', marginRight: '16%'}}>
                <IceContainer>
                    <IceFormBinderWrapper
                        value={this.state.value}
                        onChange={this.formChange}
                        ref="form"
                    >
                        <div style={styles.formContent}>
                            <h2 style={styles.formTitle}>记录身体状态（可选填部分）</h2>

                            <Row style={styles.formItem}>
                                <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                                    体重（KG）：
                                </Col>
                                <Col s="14" l="16">
                                    <IceFormBinder
                                        name="tizhong"
                                        message="请输入有效的值"
                                        pattern={/^(-?\d+)(\.\d+)?$/}
                                    >
                                        <Input
                                            size="large"
                                            style={{width: '100%'}}
                                        />
                                    </IceFormBinder>
                                    <IceFormError name="tizhong"/>
                                </Col>
                            </Row>

                            <Row style={styles.formItem}>
                                <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                                    身高（CM）：
                                </Col>
                                <Col s="14" l="16">
                                    <IceFormBinder
                                        name="shengao"
                                        message="请输入有效的值"
                                        pattern={/^(-?\d+)(\.\d+)?$/}
                                    >
                                        <Input
                                            size="large"
                                            style={{width: '100%'}}
                                        />
                                    </IceFormBinder>
                                    <IceFormError name="shengao"/>
                                </Col>
                            </Row>

                            <Row style={styles.formItem}>
                                <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                                    体脂率（%）：
                                </Col>
                                <Col s="14" l="16">
                                    <IceFormBinder
                                        name="tizhilv"
                                        message="请输入有效的值"
                                        pattern={/^(-?\d+)(\.\d+)?$/}
                                    >
                                        <Input
                                            size="large"
                                            style={{width: '100%'}}
                                        />
                                    </IceFormBinder>
                                    <IceFormError name="tizhilv"/>
                                </Col>
                            </Row>

                            <Row style={styles.formItem}>
                                <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                                    胸围（CM）：
                                </Col>
                                <Col s="14" l="16">
                                    <IceFormBinder
                                        name="xiongwei"
                                        message="请输入有效的值"
                                        pattern={/^(-?\d+)(\.\d+)?$/}
                                    >
                                        <Input
                                            size="large"
                                            style={{width: '100%'}}
                                        />
                                    </IceFormBinder>
                                    <IceFormError name="xiongwei"/>
                                </Col>
                            </Row>

                            <Row style={styles.formItem}>
                                <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                                    腰围（CM）：
                                </Col>
                                <Col s="14" l="16">
                                    <IceFormBinder
                                        name="yaowei"
                                        message="请输入有效的值"
                                        pattern={/^(-?\d+)(\.\d+)?$/}
                                    >
                                        <Input
                                            size="large"
                                            style={{width: '100%'}}
                                        />
                                    </IceFormBinder>
                                    <IceFormError name="yaowei"/>
                                </Col>
                            </Row>

                            <Row style={styles.formItem}>
                                <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                                    臀围（CM）：
                                </Col>
                                <Col s="14" l="16">
                                    <IceFormBinder
                                        name="tunwei"
                                        message="请输入有效的值"
                                        pattern={/^(-?\d+)(\.\d+)?$/}
                                    >
                                        <Input
                                            size="large"
                                            style={{width: '100%'}}
                                        />
                                    </IceFormBinder>
                                    <IceFormError name="tunwei"/>
                                </Col>
                            </Row>

                            <Row style={styles.formItem}>
                                <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                                    大腿围（CM）：
                                </Col>
                                <Col s="14" l="16">
                                    <IceFormBinder
                                        name="datuiwei"
                                        message="请输入有效的值"
                                        pattern={/^(-?\d+)(\.\d+)?$/}
                                    >
                                        <Input
                                            size="large"
                                            style={{width: '100%'}}
                                        />
                                    </IceFormBinder>
                                    <IceFormError name="datuiwei"/>
                                </Col>
                            </Row>

                            <Row style={styles.formItem}>
                                <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                                    小腿围（CM）：
                                </Col>
                                <Col s="14" l="16">
                                    <IceFormBinder
                                        name="xiaotuiwei"
                                        message="请输入有效的值"
                                        pattern={/^(-?\d+)(\.\d+)?$/}
                                    >
                                        <Input
                                            size="large"
                                            style={{width: '100%'}}
                                        />
                                    </IceFormBinder>
                                    <IceFormError name="xiaotuiwei"/>
                                </Col>
                            </Row>

                            <Row style={styles.formItem}>
                                <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                                    臂围（CM）：
                                </Col>
                                <Col s="14" l="16">
                                    <IceFormBinder
                                        name="biwei"
                                        message="请输入有效的值"
                                        pattern={/^(-?\d+)(\.\d+)?$/}
                                    >
                                        <Input
                                            size="large"
                                            style={{width: '100%'}}
                                        />
                                    </IceFormBinder>
                                    <IceFormError name="biwei"/>
                                </Col>
                            </Row>

                            <Row style={styles.formItem}>
                                <Col xxs="6" s="4" l="4" style={styles.formLabel}>
                                    测量时间：
                                </Col>
                                <Col s="14" l="16">
                                    <IceFormBinder name="recordDate">
                                        <DatePicker/>
                                    </IceFormBinder>
                                    <IceFormBinder name="recordTime">
                                        <TimePicker/>
                                    </IceFormBinder>
                                </Col>
                            </Row>

                        </div>
                    </IceFormBinderWrapper>

                    <Row style={{marginTop: 20}}>
                        <Col offset="4">
                            <Button
                                size="large"
                                type="primary"
                                onClick={this.validateAllFormField}
                            >
                                提 交
                            </Button>
                        </Col>
                    </Row>
                </IceContainer>
            </div>
        );
    }
}

const styles = {
    formContent: {
        width: '100%',
        position: 'relative',
    },
    formItem: {
        marginBottom: 25,
    },
    formLabel: {
        height: '32px',
        lineHeight: '32px',
        textAlign: 'right',
    },
    formTitle: {
        margin: '0 0 20px',
        paddingBottom: '10px',
        borderBottom: '1px solid #eee',
    },
};
