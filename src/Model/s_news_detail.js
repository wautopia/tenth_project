function Detail(props) {
    return (
        <div className="Detail mb-4">
            <p className="date mb-2 text-muted"><small>{props.date}</small></p>
            <p className="theme ">
                <a href={props.link} className=" text-secondary link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
                    <small>{props.theme}</small>
                </a>
            </p> 
        </div>
    )
}
export default Detail;