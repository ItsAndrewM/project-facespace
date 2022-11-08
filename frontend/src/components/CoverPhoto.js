import styled from "styled-components";
import facespace_bg from "../assets/facespace_bg.jpg"
const CoverPhoto = () => {
    return (
        <Wrapper>
            <HeroImage />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
`

const HeroImage = styled.img`
    height: 350px;
    width: 100%;
    background-image: url(${facespace_bg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`
export default CoverPhoto;