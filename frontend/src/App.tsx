import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Book from './components/Book';
import { TCard, TVoucherContext } from './types';
import axios from 'axios';
import { VOUCHERS_URL } from './constants';
import React from 'react';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const VoucherContext = React.createContext<TVoucherContext>({} as TVoucherContext);

function App() {
  const [vouchers, setVouchers] = useState<TCard[]>([]);

  const fetchVouchers = useCallback(async () => {
    const response = await axios.get(VOUCHERS_URL);
    console.log({ vouchers: response.data })
    setVouchers(response.data);
  }, [setVouchers])

  useEffect(() => {
    fetchVouchers();
  }, [fetchVouchers]);

  return (
    <VoucherContext.Provider value={{ vouchers, setVouchers, fetchVouchers }}>
      <AppContainer>
        <Book />
      </AppContainer>
    </VoucherContext.Provider>
  );
}

export default App;
