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

const InfoCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <Background>
            <Binder />
            <Info>
                {children}
            </Info>
        </Background>
    )
}

export default InfoCard
