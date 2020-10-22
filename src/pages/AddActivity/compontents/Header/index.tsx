import React, { Component } from 'react'
import * as styles from '../Header/style.less'

export default class index extends Component {
    render() {
        return (
            <div className={styles.header}>
                <span className={styles.title}>渠道管理&nbsp;/</span><span>&nbsp;编辑详情</span>
            </div>
        )
    }
}
