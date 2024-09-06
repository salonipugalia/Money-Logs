import './App.css';
import { MainLayout } from './styles/layout';
import styled from "styled-components";
import Orb from './component/Orb/Orb.jsx';
import Navigation from './component/navigation/navigation.jsx';
import React, { useMemo, useState } from 'react';
import bg from './img/bg.jpg';
import Dashboard from './component/dashboard/dashboard.jsx';
import Incomes from './component/incomes/incomes.jsx';
import Expenses from './component/expenses/expenses.jsx';
import { useGlobalContext } from './context/globalContext.jsx';


function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);
  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Incomes />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }



  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayoutStyled>
        <Navigation active={active} setActive={setActive} />
        <main>
        {displayData()}    
        </main>
      </MainLayoutStyled>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const MainLayoutStyled = styled(MainLayout)`
  display: flex;
  flex: 1;
  overflow: hidden;

  nav {
    flex: 0 0 374px; /* Adjust the width as needed */
    overflow-y: auto;
  }

  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    padding: 2rem; /* Add padding if needed */
      
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
