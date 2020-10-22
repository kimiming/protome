import React, { Component } from 'react'
import * as styles from '../Header/style.less'
import {Button} from 'antd'

export default class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.leftBox}>推广管理</div>
                <div className={styles.rightBox}>
                    <Button className={styles.reflash}>刷新</Button>
                    <Button>返回</Button>
                </div>
            </div>
        )
    }
}
