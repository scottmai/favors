export const colors = {
    aqua: '#7be0ad',
    blueGreen: '#aee5d89',
    background: '#e7e5e5',
    secondary: '#E6CDEA',
    primary: '#AD96CB',
    border: '#A06CB0',
}

export const isProduction = process.env.NODE_ENV === 'production'
export const API_URL = isProduction ? '' : 'http://localhost:8000'
export const VOUCHERS_URL = API_URL + '/vouchers'
export const REDEEM_URL = API_URL + '/redeem'
