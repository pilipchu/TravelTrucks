import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import './App.css'

const Navigation = lazy(()=> import('../Navigation/Navigation.jsx'))
const HomePage = lazy(()=> import('../../pages/HomePage/HomePage.jsx'))

function App() {

  return (
    <><Navigation/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      {/* <Route path='*' element={}/> */}
      </Routes></>
  )
}

export default App
