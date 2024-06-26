import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from './View/Top';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' element={<Top />} />
                </Routes>
            </div>
        </BrowserRouter>

    );
}

export default App;




