import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import facespace_bg from "../assets/facespace_bg.jpg"
import { UsersContext } from "./UserContext";

const SignIn = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});
    const ref = useRef(null);
    const {action} = useContext(UsersContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(sessionStorage.getItem("name"))
        setFormData(ref.current.value);
        fetch("/api/signin", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"  
            },
            body: JSON.stringify({data: formData})
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            if (data.status === 200) {
                sessionStorage.setItem("name", data.data[0].name);
                sessionStorage.setItem("id", data.data[0].id)
                sessionStorage.setItem("friends", [data.data[0].friends])
                sessionStorage.setItem("avatarUrl", data.data[0].avatarUrl)
                action.recieveInfoFromSessionStorage(data.data[0]);
                navigate("/");
            }
            if (data.status === 404) {
                throw new Error("Error");

            }
        })
        .catch((error) => {
            window.alert("Log in failed, please try again.")
            sessionStorage.clear()
            ref.current.value = "";
            return error;
        });
    };

    const handleChange = (key, value) => {
        setFormData({...formData, [key]: value});
    }

    return (
        <>
        {
        sessionStorage.getItem("name") !== null
        ? navigate(`/user/${sessionStorage.getItem("id")}`)
        :
        <Wrapper>
            <SignInWrapper>
                <StyledForm onSubmit={handleSubmit}>
                    <UserInput ref={ref} type="text" id="name" placeholder="Your first name" onChange={(e) => handleChange(e.target.id, e.target.value)} autoFocus/>
                    <SubmitButton type="submit"><ButtonText>Submit</ButtonText></SubmitButton>
                </StyledForm>
            </SignInWrapper>
        </Wrapper>
        }
        </>
    );
}

const Wrapper = styled.div`
    background-image: url(${facespace_bg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SignInWrapper = styled.div`
    z-index: 1;

    width: 20%;
    background-color: rgb(0, 0, 0, .5);
    height: 22%;
    flex-wrap: wrap;

`

const StyledForm = styled.form`
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

const UserInput = styled.input`
    width: 72.5%;
    height: 20%;
    border: none;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
    padding-left: 2.5%;
    font-size: large;
    font-family: var(--heading-font-family);
`

const ButtonText = styled.h1`
    color: white;
    margin: 0, 0, 0, 0;
    padding: 0;
    font-size: x-large;
`

const SubmitButton = styled.button`
    width: 75%;
    height: 20%;
    border: none;
    margin: 0;
    padding: 0;
    margin-top: 5px;
    background-color: var(--primary-color);
    transition: .2s;

    &:hover {
        background-color: var(--accent-primary-color);
    }
`
export default SignIn;
