import { Switch, Route } from 'react-router-dom'
import './App.css'
import NavBar from "./NavBar"
import Header from "./Header"
import Home from "./Home"
import About from "./About"
import ContactUs from "./ContactUs"
import NotFound from "./NotFound"
import Footer from "./Footer"


function App () {
  return (
    <>
      <NavBar />
      <Header />
      <div className='container'>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={ContactUs} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </>
  )
}

export default App
