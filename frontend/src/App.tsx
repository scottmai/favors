import styled from 'styled-components';
import Card from './components/Card';

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
      <Card />
    </AppContainer>
  );
}

export default App;
