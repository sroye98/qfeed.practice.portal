import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, message, Modal, PageHeader, Popconfirm, Select, Space, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import moment from 'moment';

import { queues } from '../constants/StaticData';

const data = queues;

const { Column } = Table;
const { Option } = Select;

const Queues = (props) => {
   const [isQueueModalVisible, setIsQueueModalVisible] = useState(false);

   const showQueueModal = () => {
      setIsQueueModalVisible(true);
  };

  const hideQueueModal = () => {
      setIsQueueModalVisible(false);
  };

   const confirm = (e) => {
      message.success('Clicked on Yes');
   };

   const cancel = (e) => {
      message.error('Clicked on No');
   };

   return (
        <>
            <PageHeader
                title="Current Queues"
                extra={[
                    <Button key="1" type="primary" onClick={showQueueModal}>
                        Add New Queue
                    </Button>,
                ]} />
            <Table dataSource={data}>
                <Column title="Name" key="queueName" sorter={{ compare: (a, b) => a.queueName.localeCompare(b.queueName) }} render={(record) => (
                   <Button type="link" onClick={showQueueModal}>{record.queueName}</Button>
                )} />
                <Column title="Created On" dataIndex="created" key="created" sorter={{ compare: (a, b) => moment(a.created).unix() - moment(b.created).unix() }} />
                <Column title="Action" key="action" render={(text, record) => (
                    <Space size="middle">
                        <Button type="primary" icon={<EditOutlined />} onClick={showQueueModal}></Button>
                        <Popconfirm
                           title="Are you sure to delete this task?"
                           onConfirm={confirm}
                           onCancel={cancel}
                           okText="Yes"
                           cancelText="No"
                        >
                           <a href="#/"><DeleteOutlined /></a>
                        </Popconfirm>
                    </Space>
                )} />
            </Table>
            <Modal title="Queue Form" visible={isQueueModalVisible} onOk={hideQueueModal} onCancel={hideQueueModal}>
                <Form name="patient" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Form.Item label="Queue Name" name="queueName" rules={[{ required: true, message: 'Please enter the queue\'s name' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Question #1" name="q1" rules={[{ required: true, message: 'Please enter first question' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Question #2" name="q2" rules={[{ required: false }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Question #3" name="q3" rules={[{ required: false }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Reminder Frequency" name="frequency" rules={[{ required: false }]}>
                    <Select placeholder="select the frequency of reminders">
                        <Option value="male">Daily</Option>
                        <Option value="female">Weekly</Option>
                        <Option value="other">Monthly</Option>
                    </Select>
                    </Form.Item>
                    <Form.Item label="Reminder Limit" name="limit" rules={[{ required: false }]}>
                        <InputNumber min={1} max={10} defaultValue={3} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
   );
};

export default Queues;