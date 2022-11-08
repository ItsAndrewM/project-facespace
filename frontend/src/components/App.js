import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Homepage from "./Homepage";
import SignIn from "./SignIn";
import User from "./User";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Header/>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/user/:id" element={<User/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
