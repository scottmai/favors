import styled from 'styled-components';
import Book from './components/Book';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <AppContainer>
      <Book cards={[]} />
    </AppContainer>
  );
}

export default App;
