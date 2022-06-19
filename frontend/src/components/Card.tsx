import styled from "styled-components"
import RedeemButton from "./RedeemButton"

const CardContainer = styled.div`
    height: 100%;
    /* width: 60%; */
    background-color: #e8cce7;
    @media screen and (max-width: 600px) {
        /* width: 80%; */
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    box-sizing: border-box;
`

const CuteImage = styled.img`
    margin: 20px 0;
    max-height: 50%;
    box-sizing: border-box;
`
const CardTitle = styled.div`
    font-size: 2em;
`

interface Props {
    title: string
}
const Card = (props: Props) => {
    return <CardContainer>
        <CuteImage src="https://media4.giphy.com/media/IzXiddo2twMmdmU8Lv/200.webp?cid=ecf05e47429s622142lril7crmxgdw4flqxwvdv20pt6ns5y&rid=200.webp&ct=g" />
        <CardTitle>{props.title}</CardTitle>
        <RedeemButton />
    </CardContainer>
}

export default Card