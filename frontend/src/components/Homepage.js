import { useContext } from "react";
import styled from "styled-components";
import UserCard from "./UserCard";
import { UsersContext } from "./UserContext";

const Homepage = () => {
    const {users} = useContext(UsersContext);
    return (
        <Wrapper>
            <MemberHeader>All Facespace Members</MemberHeader>
            <MemberContainer>
                {
                    !users
                    ? <h1>Loading...</h1>
                    : <>
                {users.map((user) => {
                    return <UserCard user={user} />
                })}
                </>
                }
            </MemberContainer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`

const MemberHeader = styled.h1`
    margin-left: 15px;
    margin-top: 15px;
    font-size: xx-large;
`

const MemberContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
`
export default Homepage;