import React, { Component } from 'react'
import { Table, Pagination } from 'antd';
import * as styles from '../ListTabs/style.less'

export default class ListTabs extends Component {
    render() {
        const columns = [
            {
              title: '代理活动编码',
              dataIndex: 'activityCode',
            },
            {
              title: '所属项目',
              dataIndex: 'activityName',
            },
            {
              title: '关联项目',
              dataIndex: 'projectName',
            },
            {
              title: '创建时间',
              dataIndex: 'createDate',
              render: (text:string, record:any) => {
                return (
                  <span>
                    <a
                      onClick={() => {
                        showNameList(true, record.activityId);
                      }}
                    >查看名单</a>
                  </span>
                )
              },
            },
            {
              title: '状态',
              dataIndex: 'activityFlag',
              render: (text:string, record:any) => (
                <span>
                  {text && <span style={this.getDotStyle(text)}>●</span>}
                  {this.getActivityFlag(text)}
                </span>
              ),
            },
           
            {
              title: '操作',
              render: (text:string, record:any) => {
                return (
                  <span>
                    <a
                      style={{marginRight: 20+'px'}}
                      onClick={() => {
                        detailAction(record.activityId);
                      }}
                    >
                      查看详情
                    </a>
                    <a
                      onClick={() => {
                        fixAction(record.activityId);
                      }}
                    >
                      复制链接
                    </a>
                  </span>
                );
              },
            },
          ];
        return (
            <div className={styles.tables}>
                <Table 
                    columns={columns}
                />
            </div>
        )
    }
}
