import visual01 from '../Media/s_visual01.jpg';
import visual02 from '../Media/s_visual02.jpg';
import { Link } from 'react-router-dom';

function SideVisual(){
    return (
        <div className="SideVisual mt-4 mb-4">
            <Visual
                link="https://violet-evergarden.jp/music/#music04"
                img={visual01}
            />
            <div className="mt-3"></div>
            <Visual
                link="https://tv.violet-evergarden.jp/special/5minutes/"
                img={visual02}
            />
        </div>
    )
}

 function Visual(props) {
     return (
        <Link to={props.link}>
            <img src ={props.img}  alt="" width="316px" height="105px"></img>
        </Link>
    )
}

export default SideVisual;
