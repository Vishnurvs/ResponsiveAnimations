
import { useEffect } from 'react';
import './App.css';
import Page from './components/pages/Page';
import AOS from 'aos';
import "aos/dist/aos.css"


function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="App">

      <Page />
    </div>
  );
}

export default App;
