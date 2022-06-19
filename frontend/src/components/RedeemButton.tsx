import styled from "styled-components"
import { colors } from "../constants";

const Button = styled.button`
    all: unset;
    border-radius: 5px;
    border: 2px solid ${colors.border};
    background-color: ${colors.secondary};
    padding: 16px 32px;
    cursor: pointer;
    &:hover {
        filter: brightness(85%);
    }
`
const RedeemButton = () => {
    return <Button>Redeem Voucher</Button>
}

export default RedeemButton;