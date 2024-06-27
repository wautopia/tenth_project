import moiveLogo from '../Media/s_moive_logo.png';

function MovieLogo() {
    return (
        <div className="MovieLogo pt-4 ps-3 pe-3">
            <img src={ moiveLogo } alt="" width="286px" height="35px"></img>
        </div>
    )
}

export default MovieLogo;