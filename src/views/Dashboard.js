import { Card, Col, PageHeader, Row, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const Dashboard = (props) => {
    return (
        <>
            <PageHeader
                className="site-page-header"
                title="Dashboard"
                subTitle="Metrics for your practice"
            />
            <Row gutter={16}>
                <Col span={4}>
                    <Card>
                        <Statistic title="Total Patients" value={112893} />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card>
                        <Statistic title="Total Invitations Sent" value={1102893} />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card>
                        <Statistic
                            title="Active Users This Month"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                            />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card>
                        <Statistic
                            title="Invitations Answered This Month"
                            value={9.3}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                            />
                    </Card>
                </Col>

            </Row>
        </>
    );
};

export default Dashboard;