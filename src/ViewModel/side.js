import MovieLogo from '../Model/s_movie_logo';
import SideVisual from '../Model/s_visual';
import SideTrailer from '../Model/s_trailer';
function Side() {
    return (
        <div className="Side d-flex flex-column me-5">
            <MovieLogo />
            <SideVisual />
            <SideTrailer/>
        </div>
    )
}

export default Side;