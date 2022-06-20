import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Book from './components/Book';
import { TCard } from './types';
import axios from 'axios';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  const [vouchers, setVouchers] = useState<TCard[]>([]);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('http://localhost:8000/vouchers');
      console.log({ vouchers: response.data })
      setVouchers(response.data);
    }
    fetch();
  }, []);
  return (
    <AppContainer>
      <Book cards={vouchers} />
    </AppContainer>
  );
}

export default App;
