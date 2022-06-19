import styled from "styled-components"
import { colors } from "../constants";

const Button = styled.button`
    all: unset;
    border-radius: 5px;
    border: 2px solid purple;
    background-color: ${colors.primary};
    padding: 16px 32px;
    cursor: pointer;
`
const RedeemButton = () => {
    return <Button>Redeem Voucher</Button>
}

export default RedeemButton;