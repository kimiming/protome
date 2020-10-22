import React, { Component } from 'react'
import { DatePicker, Form, Input, Row, Col, Button, Select } from 'antd';
import * as styles from '../SearchForm/style.less'
import { FormInstance } from 'antd/lib/form';
const { Option } = Select;

export default class Search extends Component {
    render() {
        return (
            <div className={styles.search}>
                <div className={styles.title}>数据筛选</div>
                <div className={styles.forms}>
                    <Form
                        name='searchForm'
                        size='middle'
                        className={styles.formself}
                    >
                        <Row gutter={8}>
                            <Col span={7}>
                                <Form.Item
                                    label='推广编码'
                                    name='promoteCode'
                                    className={styles.formItem}
                                >
                                    <Input placeholder='请输入' maxLength={50} />
                                </Form.Item>
                            </Col>
                            <Col span={7} offset={1}>
                                <Form.Item
                                    label="所属项目"
                                    name="project"
                                    className={styles.formitems}
                                >
                                    <Select placeholder="请选择">
                                        <Option value="0">测试1</Option>
                                        <Option value="1">测试2</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={7} offset={1}>
                                <Form.Item
                                    label="状态："
                                    name="activityFlag"
                                    className={styles.formitems}
                                >
                                    <Select placeholder="请选择">
                                        <Option value="0">关闭</Option>
                                        <Option value="1">开启</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={7}>
                                <Form.Item
                                    label="创建时间"
                                    name="createTime"
                                    className={styles.formitems}
                                >
                                    <DatePicker
                                        placeholder="请选择时间" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row justify="space-between" className={styles.rowTop}>
                        <Col
                           span={4}
                            className={styles.justifyBetween}>
                            <Button type="primary" className={styles.searchBtn}>查询</Button>
                            <Button onClick={this.resetData}>重置</Button>
                        </Col>
                        <Col className={styles.justifyBetween}>
                            <Button type="primary" onClick={this.toAgentAdd} className={styles.addBtn}>新增代理活动</Button>
                            <Button type="primary" onClick={this.toPromote} >生成推广链接</Button>
                        </Col>
                    </Row>
                    </Form>
                </div>
            </div>
        )
    }
}
