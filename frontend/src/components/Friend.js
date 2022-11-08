import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Friend = ({friend}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        fetch(`/api/users/${friend}`)
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            setUser(data.data);
        })

    }, [friend])

    return (
        <>
        {
            !user
            ? <h1>Loading...</h1>
            : <>
        <Wrapper>
            <NavItem to={`/user/${user.id}`} >
                <FriendPic src={user.avatarUrl} />
                <FriendNameContainer>
                    <FriendName>{user.name}</FriendName>
                </FriendNameContainer>
            </NavItem>
        </Wrapper>
        </>
        }
        </>
    );
}

const Wrapper = styled.div`
    width: 15%;
    margin-right: 15px;
    display: flex;
    flex-wrap: wrap;
`

const NavItem = styled(NavLink)`
    text-decoration: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
`

const FriendNameContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
`

const FriendName = styled.h2`
    font-size: 100%;
    width: 100%;
    text-align: center;
`

const FriendPic = styled.img`
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    object-fit: cover;
    vertical-align: bottom;
    transition: .2s;
    border: 2px solid var(--primary-color);

    

    &:hover {
        opacity: .5;
    }

    
`
export default Friend;