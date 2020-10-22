import React, { Component } from 'react'
import * as styles from '../AddActivity/style.less'
import Header from '../AddActivity/compontents/Header'
import BasicsInfo from '../AddActivity/compontents/BasicsInfo'

export default class AddActivity extends Component {
    render() {
        return (
            <div className={styles.addActivity}>
                <Header />
                <BasicsInfo />
            </div>
        )
    }
}
