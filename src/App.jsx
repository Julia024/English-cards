import './App.css'
import Header from './assets/components/header/Header'
import CardContainer from './assets/components/cardTable/CardContainer'
import Slider from './assets/components/cardDisplay/Slider'
import Arr from './assets/components/Arr'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Missing from './assets/components/missing/Missing'


function App() {
  return (
    <Router>
      <>
        <Header/>
        <Routes>
          <Route path='/' element={<CardContainer/>} />
          <Route path='/game' element={<Slider cards={Arr}/>} />
          <Route path='*' element={<Missing/>} />
        </Routes>
      </>
    </Router>

  )
}

export default App
