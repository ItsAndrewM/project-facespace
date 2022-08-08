import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<h1>Homepage</h1>} />
                <Route path="/signin" element={<h1>Sign in page</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
