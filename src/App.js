import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react';


function App() {

  const [sidebar, setSidebar] = useState(false)

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }
  const closeSidebar = () => {
    setSidebar(false)
  }

  return (
    <div className="app">
      <Header openSidebar={toggleSidebar}/>
      <Sidebar sidebar={sidebar}/>
      <Cards closeSidebar={closeSidebar}/>    
    </div>
  );
}

export default App;
