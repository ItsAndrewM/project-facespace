import { NavLink } from "react-router-dom";
import styled from "styled-components";

const UserCard = ({user}) => {
    return (
        <>
        {
        sessionStorage.getItem("friends") !== null && sessionStorage.getItem("friends").includes(user.id) ?
        <UserWrapper>
            <NavItem to={`/user/${user.id}`}>
                <ProfilePic src={user.avatarUrl}/>
                <FriendIndicator>Friend</FriendIndicator>
            </NavItem>
        </UserWrapper>
        :
        <FriendWrapper>
            <NavItem to={`/user/${user.id}`}>
                <FriendProfilePic src={user.avatarUrl}/>
            </NavItem>
        </FriendWrapper>
        }
        </>
    );
}

const UserWrapper = styled.div`
    width: 11%;
    height: auto;
    margin-bottom: 10px;
    margin-right: 10px;
    border: 3px solid blue;
    overflow: hidden;

`

const FriendIndicator = styled.h1`
    margin: 0;
    padding: 0;
    background-color: transparent;
    margin-top: -15%;
    z-index: 1;
    text-align: center;
    color: white;
`

const FriendWrapper = styled.div`
    width: 11%;
    height: auto;
    margin-bottom: 10px;
    margin-right: 10px;
    border: 1px solid var(--primary-color);

`

const NavItem = styled(NavLink)`
    text-decoration: none;
    height: 100%;
    width: 100%;


`

const FriendProfilePic = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    vertical-align: bottom;
    transition: .2s;
    overflow: hidden;
    &:hover {
        opacity: .5;

    }
`

const ProfilePic = styled.img`
    object-fit: cover;
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
    vertical-align: bottom;
    transition: .2s;
    overflow: hidden;
    &:hover {
        opacity: .5;
    }
`
export default UserCard;