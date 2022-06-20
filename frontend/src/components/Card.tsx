import styled from "styled-components"
import { colors } from "../constants"
import { TCard } from "../types"
import Background from "./Background"
import RedeemButton from "./RedeemButton"

const Binder = styled.div`
    position: absolute;
    width: 32px;
    background-color: ${colors.primary};
    height: 100%;
    left: 0;
`
const Top = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 70%; */
    width: 100%;
`
const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30%;
    width: 100%;
    gap: 16px;
`
const CuteImage = styled.img`
    display: block;
    max-height: 100%;
    max-width: 60%;
    width: auto;
    height: auto;
    box-sizing: border-box;
    border: 2px solid ${colors.border};
    border-radius: 5px;
`
const CardTitle = styled.div`
    font-size: 2em;
`

const Card = ({ card }: { card: TCard }) => {
    return <Background>
        {/* <Binder /> */}
        <Top>
            <CuteImage src="https://media4.giphy.com/media/IzXiddo2twMmdmU8Lv/200.webp?cid=ecf05e47429s622142lril7crmxgdw4flqxwvdv20pt6ns5y&rid=200.webp&ct=g" />
        </Top>
        <Bottom>
            <CardTitle>{card.title}</CardTitle>
            <RedeemButton />
        </Bottom>
    </Background>
}

export default Card
