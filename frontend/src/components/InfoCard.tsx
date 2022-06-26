import styled from "styled-components"
import { colors } from "../constants"
import Background from "./Background"

const Info = styled.div`
    background-color: white;
    border: 2px solid ${colors.border};
    border-radius: 5px;
    margin: auto;
    padding: 12px;
    max-width: 80%;
    text-align: center;
    font-size: 14px;
`
const Binder = styled.div`
    position: absolute;
    width: 3%;
    background-color: ${colors.primary};
    height: 100%;
    left: 0;
`

const InfoCard = () => {
    return (
        <Background>
            <Binder />
            <Info>
                A year ago today, you made me the luckiest person on earth.
                <br />
                And every day I am still awe-strucken by the compassion, wit, intelligence that you display so nonchalantly
                <br />
                <br />
                I love you so much and I'd would give you the world
                <br />
                <br />
                But until then, I made you some cute lil coupons that you can redeem any time you like :P
                <br />
                So that I can more easily show you just how much I love you
                <br />
                <br />
                Happy Anniversay Dhiv Dhivs 😘
            </Info>
        </Background>
    )
}

export default InfoCard
