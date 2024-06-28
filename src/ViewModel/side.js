import MovieLogo from '../Model/s_movie_logo';
import SideVisual from '../Model/s_visual';
import SideTrailer from '../Model/s_trailer';
import News from '../Model/s_-News.js';

function Side() {
    return (
        <div className="Side d-flex flex-column me-5">
            <MovieLogo />
            <SideVisual />
            <SideTrailer />
            <News/>
        </div>
    )
}

export default Side;