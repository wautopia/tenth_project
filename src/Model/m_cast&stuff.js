import billing from '../Media/m_billing.png';
import billingBg from '../Media/m_billingBg.jpg';

function CastStuff() {
    return (
        <div className="CastStuff d-flex justify-content-center align-items-center">
            <img src={billing} alt="" className="position-absolute z-1"></img>
            <img src={billingBg} alt="" className="" width="100%"></img>
        </div>
    )
}
export default CastStuff;