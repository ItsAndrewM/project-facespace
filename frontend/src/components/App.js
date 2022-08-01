import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<h1>Homepage</h1>} />
                <Route path="/page-1" element={<h1>Page 1</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
