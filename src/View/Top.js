import Main1 from '../ViewModel/main1';
import Main2 from '../ViewModel/main2';
import Side from '../ViewModel/side';
import Footer from '../ViewModel/footer'
function Top() {
    return (
        <div className="Top mt-5" style={{ background: '#cdd1f4' }}>
            <div className="d-flex">
                <Side />
                <Main1 />
            </div>
                <Main2 />
                <Footer/>
        </div>
    )
}

export default Top;