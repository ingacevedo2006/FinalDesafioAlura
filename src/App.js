import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import NewVideo from "./pages/NewVideo/NewVideo"
import { VideoProvider } from "./contexts/VideoContext"

function App() {
  return (
    <VideoProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/new-video" component={NewVideo} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </VideoProvider>
  )
}

export default App
