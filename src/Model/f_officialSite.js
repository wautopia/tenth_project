import site1 from '../Media/f_officialSite01.jpg';
import site2 from '../Media/f_officialSite02.jpg';
function OfficialSite() {
    return (
        <div className="OfficialSite d-flex flex-row ">
            <Site img={site1}/>
            <Site img={site2}/>
        </div>
    )
}
function Site(props) {
    <div className="Site">
        <img src={props.img} alt="" className="w-100 h-100"></img>
    </div>
} 
export default OfficialSite;