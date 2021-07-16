import { Card, Tooltip } from 'antd';
import { DownloadOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';

const { Meta } = Card;

const RecordingCard = (props) => {
    return (
        <Card
            hoverable
            size="default"
            cover={<img alt="example" src={`https://lorempixel.com/480/300/sports/${props.imageId}`} />}
            actions={[
                <Tooltip title="Download Original Video">
                    <DownloadOutlined key="download" />
                </Tooltip>,
                <Tooltip title="Download Facebook Video">
                    <FacebookOutlined key="facebook" />
                </Tooltip>,
                <Tooltip title="Download Instagram Video">
                    <InstagramOutlined key="instagram" />
                </Tooltip>,
                <Tooltip title="Download Twitter Video">
                    <TwitterOutlined key="twitter" />
                </Tooltip>,
                <Tooltip title="Upload Edited Video">
                    <UploadOutlined key="upload" />
                </Tooltip>
            ]}
        >
            <Meta title={props.title} description={props.description} avatar={<UserOutlined />} />
        </Card>
    );
};

export default RecordingCard;