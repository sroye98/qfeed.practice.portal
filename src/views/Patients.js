import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Modal, PageHeader, Radio, Select, Space, Table } from 'antd';
import { CheckCircleOutlined, CloseOutlined, MailOutlined } from '@ant-design/icons';

import { patients, queues } from '../constants/StaticData';

const { Option } = Select;
const { Column } = Table;

const data = patients;
const queueData = queues;

const FormPatientValues = {
    fullName: 'John Doe',
    email: 'jdoe@example.com',
    phone: '123-123-1234',
};

const Patients = (props) => {
    const [isPatientModalVisible, setIsPatientModalVisible] = useState(false);
    const [isInviteModalVisible, setIsInviteModalVisible] = useState(false);

    const showPatientModal = () => {
        setIsPatientModalVisible(true);
    };

    const hidePatientModal = () => {
        setIsPatientModalVisible(false);
    };

    const showInviteModal = () => {
        setIsInviteModalVisible(true);
    };

    const hideInviteModal = () => {
        setIsInviteModalVisible(false);
    };

    return (
        <>
            <PageHeader
                title="Current Patients"
                extra={[
                    <Button key="1" type="primary" onClick={showPatientModal}>
                        Add New Patient
                    </Button>,
                ]} />
            <Table dataSource={data}>
                <Column title="Name" key="fullName" render={(record) => (
                    <Button type="link" onClick={showPatientModal}>{record.fullName}</Button>
                )} />
                <Column title="Visited On" dataIndex="visited" key="visited" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column title="Phone" dataIndex="phone" key="phone" />
                <Column title="Invitations Sent" dataIndex="invitationSent" key="invitationSent" />
                <Column title="Response Received" key="responseReceived" render={(record) => record.responseReceived ? (<CheckCircleOutlined />) : (<CloseOutlined />)} />
                <Column title="Action" key="action" render={() => (
                    <Space size="middle">
                        <Button type="primary" icon={<MailOutlined />} onClick={showInviteModal}>Invite</Button>
                    </Space>
                )} />
            </Table>
            <Modal title="Patient Form" visible={isPatientModalVisible} onOk={hidePatientModal} onCancel={hidePatientModal}>
                <Form name="patient" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={FormPatientValues}>
                    <Form.Item label="Full Name" name="fullName" rules={[{ required: true, message: 'Please enter the patient\'s full name' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Visited On" name="visited" rules={[{ required: true, message: 'Please enter the date the patient visited the clinic' }]}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="Email Address" name="email" rules={[{ required: true, message: 'Please enter the patient\'s email address', type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Phone Number" name="phone" rules={[{ required: false, message: 'Please enter the patient\'s phone number' }]}>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
            <Modal title="Send Invitation" visible={isInviteModalVisible} onOk={hideInviteModal} onCancel={hideInviteModal}>
                <Form name="invitation" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={FormPatientValues}>
                    <Form.Item label="Queue Name" name="queueName" rules={[{ required: true, message: 'Please enter the queue this invitation will belong to' }]}>
                        <Select>
                            {queueData.map((item, index) => {
                                return <Option value={item.queueName} key={index}>{item.queueName}</Option>;
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item label="Notify By" name="notifyBy" rules={[{ required: true, message: 'Please select how to notify the patient' }]}>
                        <Radio.Group defaultValue="both" value="both">
                            <Space direction="vertical">
                                <Radio value="email">by Email Address</Radio>
                                <Radio value="sms">by Text Message</Radio>
                                <Radio value="both">by Email Address &amp; Text Message</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Patients;