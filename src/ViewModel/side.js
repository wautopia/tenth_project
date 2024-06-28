import MovieLogo from '../Model/s_movie_logo';
import SideVisual from '../Model/s_visual';
import SideTrailer from '../Model/s_trailer';
import News from '../Model/s_-News';
import SNS from '../Model/s_-Official_SNS';

function Side() {
    return (
        <div className="Side d-flex flex-column me-5">
            <MovieLogo />
            <SideVisual />
            <SideTrailer />
            <News />
            <SNS/>
        </div>
    )
}

export default Side;