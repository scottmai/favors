import styled from "styled-components"

const Button = styled.button`
    border-radius: 5px;
    border: 2px solid red;
    background-color: pink;
    padding: 16px 32px;
    cursor: pointer;
`
const RedeemButton = () => {
    return <Button>Redeem Voucher</Button>
}

export default RedeemButton;