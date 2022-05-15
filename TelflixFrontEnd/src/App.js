import InfoPanel from './layout/infoPanel.layout'
import Header from './layout/header'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Header course="Telflix" detail="get money for watch movies"/>
      <InfoPanel />
    </div>
  )
}

export default App;
