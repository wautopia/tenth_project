import Twitter from '../Media/s_sns_Twitter.png';
import Instagram from '../Media/s_sns_Instagram.png';
function SNSDetails() {
    return (
        <div className="SNSDetails d-flex mt-3 ">
            <Detail
                link="https://x.com/Violet_Letter"
                img={Twitter}
            />
            <Detail
                link="https://www.instagram.com/violetevergarden_movie/"
                img={Instagram}
            />
        </div>
    )
}

function Detail(props) {
    return (
        <div className="Detail me-3">
            <a href={props.link} alt="">
                <img src={props.img} alt="" width="135px" height="45px"></img>
            </a>
        </div>
    )
}

export default SNSDetails;