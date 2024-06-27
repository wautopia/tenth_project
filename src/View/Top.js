import Main from '../ViewModel/main';
import Side from '../ViewModel/side';
import Footer from '../ViewModel/footer'
function Top() {
    return (
        <div className="Top mt-5" style={{ background: '#cdd1f4' }}>
            <div className="d-flex">
                <Side />
                <Main />
            </div>
                <Footer/>
        </div>
    )
}

export default Top;