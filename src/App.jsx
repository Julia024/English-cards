import './App.css'
import CardContainer from './assets/components/cardTable/CardContainer'
import Slider from './assets/components/cardDisplay/Slider'
import Arr from './assets/components/Arr'

function App() {
  return (
    <>
      <Slider cards={Arr}/>
      <CardContainer/>
    </>
  )
}

export default App
