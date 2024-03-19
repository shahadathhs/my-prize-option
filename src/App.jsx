import './App.css'
import LineChart from './components/LineCharts/LineChart'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import Phone from './components/Phone/Phone'

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <LineChart></LineChart>
      <Phone></Phone>
    </>
  )
}

export default App
