import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, HomeTwoTone, UsergroupAddOutlined, VideoCameraTwoTone } from '@ant-design/icons';

const HeaderLayout = (props) => {
    const [currentKey, setKey] = useState('');
    const history = useHistory();

    const handleClick = (e) => {
        setKey(e.key);
        history.push(`/${e.key}`);
    };

    return (
        <>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={1} selectedKeys={[currentKey]} onClick={handleClick}>
                <Menu.Item key="" icon={<HomeTwoTone />}>Home</Menu.Item>
                <Menu.Item key="patients" icon={<UsergroupAddOutlined />}>Patients</Menu.Item>
                <Menu.Item key="queues" icon={<AppstoreOutlined />}>Queues</Menu.Item>
                <Menu.Item key="recordings" icon={<VideoCameraTwoTone />}>Recordings</Menu.Item>
            </Menu>
        </>
    );
};

export default HeaderLayout;