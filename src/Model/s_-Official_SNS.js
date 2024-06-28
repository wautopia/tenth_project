import Title from './s_Title';
import SNSDetails from './s_sns_detail';
import OfficialSNS from '../Media/s_heading_Official_SNS.png';


function SNS() {
    return (
        <div className="SNS mt-4 ms-4">
            <Title
                title={OfficialSNS}
            />
            <SNSDetails/>
        </div>
    )
}

export default SNS;