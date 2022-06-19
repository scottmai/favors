import styled from 'styled-components';
import Book from './components/Book';
import { TCard } from './types';

const dummyData: TCard[] = [
  {
    id: "1",
    title: "Card 1",
  },
  {
    id: "2",
    title: "Card 2",
  },
  {
    id: "3",
    title: "Card 3",
  },
  {
    id: "4",
    title: "Card 4",
  }
]

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  const data = dummyData;
  return (
    <AppContainer>
      <Book cards={data} />
    </AppContainer>
  );
}

export default App;
