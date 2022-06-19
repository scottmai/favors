import styled from "styled-components"
import { colors } from "../constants"
import { TCard } from "../types"
import RedeemButton from "./RedeemButton"

const CardContainer = styled.div`
    height: 100%;
    /* width: 60%; */
    /* background-color: ${colors.secondary}; */
    background-image: url("https://img.freepik.com/free-vector/soft-purple-floral-with-watercolor-abstract-background_65186-1644.jpg?w=2000");
    @media screen and (max-width: 600px) {
        /* width: 80%; */
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    box-sizing: border-box;
    border-left: 32px solid ${colors.primary};
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
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
    return <CardContainer>
        <Top>
            <CuteImage src="https://media4.giphy.com/media/IzXiddo2twMmdmU8Lv/200.webp?cid=ecf05e47429s622142lril7crmxgdw4flqxwvdv20pt6ns5y&rid=200.webp&ct=g" />
        </Top>
        <Bottom>
            <CardTitle>{card.title}</CardTitle>
            <RedeemButton />
        </Bottom>
    </CardContainer>
}

export default Card