import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';

const Login = (props) => {
    const handleLogin = () => {
        useHistory("/dashboard");
    }

    return (
        <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={handleLogin}>
            <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login;