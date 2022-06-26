import styled from "styled-components"
import { colors } from "../constants"
import { TCard } from "../types"
import Background from "./Background"
import RedeemButton from "./RedeemButton"
import checkmark from './checkmark.png'

const Top = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
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
    padding-bottom: 20px;
`
const CuteImage = styled.img`
    display: block;
    background-color: white;
    max-height: 100%;
    max-width: 60%;
    width: auto;
    height: auto;
    box-sizing: border-box;
    border: 2px solid ${colors.border};
    border-radius: 5px;
`
const CardTitle = styled.div`
    font-size: 1.5em;
    text-align: center;
`
const CheckMark = styled.img`
    width: 100px;
    position: absolute;
    top: 0px;
    right: 0px;
`

const Card = ({ card }: { card: TCard }) => {
    return <Background>
        {/* <Binder /> */}
        {card.is_redeemed && <CheckMark src={checkmark} />}
        <Top>
            <CuteImage src={card.image} />
        </Top>
        <Bottom>
            <CardTitle>{card.title}</CardTitle>
            <RedeemButton id={card.id} voucher={card} />
        </Bottom>
    </Background>
}

export default Card
