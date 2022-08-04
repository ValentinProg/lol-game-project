import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react';
import Switch from './components/Switch/Switch';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';




function App() {
  

  const [sidebar, setSidebar] = useState(false)
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }
  const closeSidebar = () => {
    setSidebar(false)
  }

  const [theme, setTheme] = useState(false)

  const toggleTheme = () => {
    setTheme((prevState) => !prevState)
  }
  
  const backgroundTheme = theme === false ? {backgroundColor: '#0D1117'}: {backgroundColor: '#F0FFFF'}
  
  return (
    
    <div className="app" style={backgroundTheme}>
      <Header openSidebar={toggleSidebar} theme={theme} changeTheme={toggleTheme}/>
      <Sidebar sidebar={sidebar} theme={theme}/>
      <Cards closeSidebar={closeSidebar}/>    
      <BackToTopButton/>
    </div>
    
  );
}

export default App;
