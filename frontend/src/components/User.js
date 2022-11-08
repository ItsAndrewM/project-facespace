import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CoverPhoto from "./CoverPhoto";
import Friend from "./Friend";

const User = () => {
    const {id} = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        fetch(`/api/users/${id}`)
        .then((data) => {
            return data.json();
        })
        .then((user) => {
            setUser(user.data);
            console.log(user.data)
        })
        .catch((error) => {
            return error;
        });
    }, [id])

    return (
        <Wrapper>
            <CoverPhoto />
            {
                !user
                ? <h1>Loading...</h1>
                : <>
            <ProfileWrapper>
                <UserProfileWrapper>
                    <ProfilePic src={user.avatarUrl}/>
                    <ProfileName>{user.name}</ProfileName>
                </UserProfileWrapper>
                <FriendsWrapper>
                    <FriendsHeader>{user.name}'s' Friends</FriendsHeader>
                    <Friends>
                        {user.friends.map((friend) => {
                            return <Friend friend={friend} />
                        })}
                    </Friends>
                </FriendsWrapper>
            </ProfileWrapper>
            </>
        }
        </Wrapper>
        
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`

const ProfileWrapper = styled.div`
    width: 75%;
    height: auto;
`

const UserProfileWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: -10%;
    z-index: 900;
    margin-bottom: 50px;
`


const ProfileName = styled.h1`
    margin: 0;
    padding: 0;
    margin-left: 15px;
`

const ProfilePic = styled.img`
    width: 25%;
    height: auto;
    vertical-align: bottom;
    border: 5px solid var(--primary-color);
    object-fit: cover;
    z-index: 999;
`

const FriendsHeader = styled.h2`
    border-bottom: 1px solid var(--primary-color);
    margin-bottom: 15px;
    font-size: large;
`

const FriendsWrapper = styled.div`

`

const Friends = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`


export default User;