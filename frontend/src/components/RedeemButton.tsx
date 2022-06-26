import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
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
    &:disabled {
        cursor: default;
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

        toast("Voucher redeemed! Scottie has been notified :) Love u 😘")

        await axios.post(REDEEM_URL + '/' + id)
        fetchVouchers()
    }

    const text = voucher.is_redeemed ? 'Redeemed!' : 'Redeem Voucher'
    return <Button onClick={onClick} disabled={voucher.is_redeemed}>{text}</Button>
}

export default RedeemButton;