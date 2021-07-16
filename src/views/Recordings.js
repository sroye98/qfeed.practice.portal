import { Col, PageHeader, Row } from "antd";

import RecordingCard from "../components/RecordingCard";

const Recordings = (props) => {
    const style = { padding: '8px 0' };

    return (
        <>
            <PageHeader title="Received Recordings" />
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