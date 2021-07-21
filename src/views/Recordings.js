import { Button, Col, Dropdown, Menu, PageHeader, Row } from "antd";
import { DownOutlined } from '@ant-design/icons';

import RecordingCard from "../components/RecordingCard";

const filterMenu = (
    <Menu>
        <Menu.Item>Draft</Menu.Item>
        <Menu.Item>Published</Menu.Item>
    </Menu>
);

const sortMenu = (
    <Menu>
        <Menu.Item>Oldest to Newest</Menu.Item>
        <Menu.Item>Newest to Oldest</Menu.Item>
    </Menu>
);

const Recordings = (props) => {
    const style = { padding: '8px 0' };

    return (
        <>
            <PageHeader
                title="Received Recordings"
                extra={[
                    <Dropdown overlay={filterMenu}>
                        <Button>
                            Filter <DownOutlined />
                        </Button>
                    </Dropdown>,
                    <Dropdown overlay={sortMenu}>
                        <Button>
                            Sort <DownOutlined />
                        </Button>
                    </Dropdown>,
                ]} />
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <RecordingCard imageId={1} title="Patient: Urbanus Connal" description="Queue Name: Zaam-Dox" />
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <RecordingCard imageId={2} title="Patient: Goddart Solomon" description="Queue Name: Zaam-Dox" />
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <RecordingCard imageId={3} title="Patient: Gunter Evenett" description="Queue Name: Zaam-Dox" />
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <RecordingCard imageId={4} title="Patient: Horatio Laboune" description="Queue Name: Cardify" />
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <RecordingCard imageId={5} title="Patient: Demetrius Passion" description="Queue Name: Cardify" />
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <RecordingCard imageId={6} title="Patient: Sisile Bynold" description="Queue Name: Cardify" />
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Recordings;