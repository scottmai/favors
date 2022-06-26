import axios from "axios";
import { useContext } from "react";
import styled from "styled-components"
import { VoucherContext } from "../App";
import { colors, REDEEM_URL } from "../constants";
import { TCard } from "../types";

const Button = styled.button`
    all: unset;
    border-radius: 5px;
    border: 2px solid ${colors.border};
    background-color: ${colors.primary};
    padding: 16px 32px;
    cursor: pointer;
    &:hover {
        background-color: ${colors.border};
    }
`
const RedeemButton = ({ id, voucher }: { id: string, voucher: TCard }) => {
    const { vouchers, setVouchers, fetchVouchers } = useContext(VoucherContext);

    const onClick = async () => {
        const newVoucher = {
            ...voucher,
            is_redeemed: true,
        }
        const idx = vouchers.findIndex(v => v.id === id)
        if (idx === -1) {
            console.log('whoops')
            return
        }
        const newVouchers = [...vouchers]
        newVouchers[idx] = newVoucher
        setVouchers(newVouchers)

        await axios.post(REDEEM_URL + '/' + id)
        fetchVouchers()
    }
    return <Button onClick={onClick}>Redeem Voucher</Button>
}

export default RedeemButton;