import './style.css';
import IcoMoon from "react-icomoon";
import iconSet from "./selection.json";
import share from '../Media/f_share.png';
import line from '../Media/f_line.svg';
function Share() {
    return (
        <div className="Share d-flex flex-row justify-content-center">
            <div className="m-2"> 
                <ShareProps img={share} />
            </div>
            <Icon
                icon="twitter"
                size={23}
                color="black"
                link='https://x.com/intent/post?text=%E3%80%8E%E5%8A%87%E5%A0%B4%E7%89%88+%E3%83%B4%E3%82%A1%E3%82%A4%E3%82%AA%E3%83%AC%E3%83%83%E3%83%88%E3%83%BB%E3%82%A8%E3%83%B4%E3%82%A1%E3%83%BC%E3%82%AC%E3%83%BC%E3%83%87%E3%83%B3%E3%80%8F&url=https%3A%2F%2Fviolet-evergarden.jp&hashtags=%E3%83%B4%E3%82%A1%E3%82%A4%E3%82%AA%E3%83%AC%E3%83%83%E3%83%88%E3%83%BB%E3%82%A8%E3%83%B4%E3%82%A1%E3%83%BC%E3%82%AC%E3%83%BC%E3%83%87%E3%83%B3%2CVioletEvergarden'
            />
            <Icon
                icon="facebook"
                size={23}
                color="black"
                link='https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fshare.php%3Fu%3Dhttps%253A%252F%252Fviolet-evergarden.jp&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ja_JP'
            />
            <div className="border border-dark rounded-circle m-2">
                <ShareProps
                    img={line}
                    link='https://access.line.me/oauth2/v2.1/login?returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fresponse_type%3Dcode%26client_id%3D1446101138%26state%3D5ea5bd92915e4699c7909294dd989f%26redirect_uri%3Dhttps%253A%252F%252Fsocial-plugins.line.me%252Flineit%252FloginCallback%253FreturnUrl%253Dhttps%25253A%25252F%25252Fsocial-plugins.line.me%25252Flineit%25252Fshare%25253Furl%25253D%252526text%25253D%252525e3%25252580%2525258e%252525e5%2525258a%25252587%252525e5%252525a0%252525b4%252525e7%25252589%25252588%25252520%252525e3%25252583%252525b4%252525e3%25252582%252525a1%252525e3%25252582%252525a4%252525e3%25252582%252525aa%252525e3%25252583%252525ac%252525e3%25252583%25252583%252525e3%25252583%25252588%252525e3%25252583%252525bb%252525e3%25252582%252525a8%252525e3%25252583%252525b4%252525e3%25252582%252525a1%252525e3%25252583%252525bc%252525e3%25252582%252525ac%252525e3%25252583%252525bc%252525e3%25252583%25252587%252525e3%25252583%252525b3%252525e3%25252580%2525258f%25252520https%2525253a%2525252f%2525252fviolet%2525252devergarden%2525252ejp%252526from%25253Dline_scheme%26scope%3Dopenid%2520profile%2520friends%2520groups%2520timeline.post%2520message.write&loginChannelId=1446101138&loginState=X4cP4TY3vvqrIDq2CORcfW#/'
                />
            </div>
        </div>
    )
}


function ShareProps(props) {
    return (
        <div className="">
            <a href={props.link} alt="" styke>
                <img src={props.img} className="m-1" alt="" style={{ width: '23px' }} ></img>
            </a>

        </div>
    )
}



const Icon = ({ ...props }) => {
    return (
        <div className="Icon m-2 border border-dark rounded-circle">
            <a href={props.link}>
                <IcoMoon iconSet={iconSet} {...props} className="m-1" />
            </a>
    </div>
    )
}



export default Share;