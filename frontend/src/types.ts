export interface TCard {
    id: string
    title: string
    image: string
    is_redeemed: boolean
}

export interface TVoucherContext {
    vouchers: TCard[]
    setVouchers: (vouchers: TCard[]) => void
    fetchVouchers: () => void
}
