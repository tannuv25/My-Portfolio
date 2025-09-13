
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/about' element = {<AboutPage/>}/>
        <Route path='/projects' element = {<ProjectPage/>}/>
        <Route path='/contact' element = {<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
