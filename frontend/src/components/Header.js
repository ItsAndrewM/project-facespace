import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {    
    return (
        <HeaderBar>
            <NavItem to="/"><HeaderText>Facespace</HeaderText></NavItem>
            {
                sessionStorage.getItem("name") === null 
                ? <NavItem to="/signin"><SignInText>Sign In</SignInText></NavItem>
                : <SignInText>Howdy, {sessionStorage.getItem("name")}</SignInText>
            }
        </HeaderBar>
    );
}

const HeaderBar = styled.div`
    width: 100%;
    height: 50px;
    background-color: var(--primary-color);
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavItem = styled(NavLink)`
    color: white;
    width: auto;
    text-decoration: none;
    padding: 0;
    margin: 0;
    transition: .2s;
    &:hover {
        opacity: 0.5;
    }
`

const SignInText = styled.h1`
    color: white;
    margin: 0;
    padding: 0;
    font-size: x-large;
    transition: .2s;
    margin-right: 15px;
`

const HeaderText = styled.h1`
    color: white;
    margin: 0, 0, 0, 0;
    padding: 0;
    font-size: xx-large;
    margin-left: 15px;
`
export default Header;