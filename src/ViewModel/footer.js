import Share from '../Model/f_share';
import OfficialSite from '../Model/f_officialSite';
import Kyotoanimation from '../Model/f_kyotoanimation';
import Copylight from '../Model/f_copylight';

function Footer() {
    return (
        <div className="Footer bg-white " style={{ paddingTop: '60px', paddingBottom: '60px'}}>
            <Share />
            <OfficialSite />
            <Kyotoanimation />
            <Copylight/>
        </div>
    )
}

export default Footer;