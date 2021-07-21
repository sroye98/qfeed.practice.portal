import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, AuditOutlined, HomeTwoTone, UsergroupAddOutlined, VideoCameraTwoTone } from '@ant-design/icons';

const HeaderLayout = (props) => {
    const [currentKey, setKey] = useState('');
    const history = useHistory();

    const handleClick = (e) => {
        setKey(e.key);
        history.push(`/${e.key}`);
    };

    return (
        <>
            <Link to="/">
                <div className="logo" />
            </Link>
            <Menu theme="dark" mode="horizontal" selectedKeys={[currentKey]} onClick={handleClick}>
                <Menu.Item key="dashboard" icon={<HomeTwoTone />}>Home</Menu.Item>
                <Menu.Item key="patients" icon={<UsergroupAddOutlined />}>Patients</Menu.Item>
                <Menu.Item key="queues" icon={<AppstoreOutlined />}>Queues</Menu.Item>
                <Menu.Item key="recordings" icon={<VideoCameraTwoTone />}>Recordings</Menu.Item>
                <Menu.Item key="audit-logs" icon={<AuditOutlined />}>Audit Log</Menu.Item>
            </Menu>
        </>
    );
};

export default HeaderLayout;