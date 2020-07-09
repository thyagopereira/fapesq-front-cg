import React ,{useEffect}from 'react';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Principal from './Principal'
import MainPanel from './MainPanel'
import context from './utils/Context'
import {BACK_END_URL} from './utils/Utils'
import axios from 'axios'

function App() {
  const { Provider } = context;
  const [state, setState] = React.useState({
    dataInfo:undefined
  });

  useEffect(() => {
    const fetchData = async () => {
      const dataInfoBuscado = await axios.get(BACK_END_URL+'/registros');
      setState({ ...state,  dataInfo:dataInfoBuscado.data});
    }
    
    fetchData();  
  },[] );
  

  return (
    <Provider
      value={{
        state
      }}
    >
      <BrowserRouter>
        <MainPanel />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
