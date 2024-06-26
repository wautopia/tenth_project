import Main from '../ViewModel/main';
import Side from '../ViewModel/side';
import Footer from '../ViewModel/footer'
function Top() {
    return (
        <div className="Top">
            <Main />
            <Side />
            <Footer/>
        </div>
    )
}

export default Top;