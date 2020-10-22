import React, { Component } from 'react'
import { Form, Row, Col, Input, Button, Select } from 'antd'
import { FormInstance } from 'antd/lib/form';
const { Option } = Select;
import * as styles from '../BasicsInfo/style.less'

interface BProps {
    formData:{
        note:string;
        gender:string
    }
}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default class BasicsInfo extends Component<BProps> {
    formRef = React.createRef<FormInstance>();
    onGenderChange = (value:any) => {
        this.formRef.current?.setFieldsValue({
          note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
      };
    
      onFinish = (values:any) => {
        console.log(values);
      };
    
      onReset = () => {
        this.formRef.current?.resetFields();
      };
    
      onFill = () => {
        this.formRef.current?.setFieldsValue({
          note: 'Hello world!',
          gender: 'male',
        });
      };
    render() {
        return (
            <div className={styles.main}>
               <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
        <Form.Item name="note" label="Note" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={this.onGenderChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
        >
          {({ getFieldValue }) => {
            return getFieldValue('gender') === 'other' ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            ) : null;
          }}
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={this.onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={this.onFill}>
            Fill form
          </Button>
        </Form.Item>
      </Form>
            </div>
        )
    }
}
