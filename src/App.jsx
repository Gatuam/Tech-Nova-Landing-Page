import { motion } from "motion/react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Page from "./components/Page"
import Hero from "./components/Hero"
import Review from "./components/Review"
import Logos from "./components/Logos"

function App() {
  return (
    <div className="main w-full h-screen ">
      <Page>
      <Header>
        <Nav/>
      </Header>
      <Hero></Hero>
      <Logos></Logos>
      </Page>
    </div>
  )
}

export default App
