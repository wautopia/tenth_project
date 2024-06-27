import trailer01 from '../Media/s_trailer01.jpg';
import trailer02 from '../Media/s_trailer02.jpg';
import playicon from '../Media/s_play_icon.png';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import React from 'react';


function SideTrailer() {
    
    return (
        <div className="SideTrailer">          
            <Trailer
                link=""
                img={trailer01}
            />
            <Trailer
                link=""
                img={trailer02}
            />
        </div>
    )
}

function Trailer(props) {
    return (
        <div className="Trailer mb-4 position-relative"  width="316px" height="178px">
            <div className="position-absolute z-1 d-flex top-0 start-0 end-0 bottom-0 justify-content-center align-items-center">
                <img src={playicon} className=" opacity-75" width="80px" height="80px" alt=""></img>
            </div>
            <Link to={props.link}>
                <img src={props.img} alt="" width="316px" height="178px" className="position-relative"></img>
            </Link>
            
        </div>
    )
}

export default SideTrailer;