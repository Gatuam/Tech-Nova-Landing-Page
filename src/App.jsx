import { motion } from "motion/react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Page from "./components/Page"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="main w-full h-screen ">
      <Page>
      <Header>
        <Nav/>
      </Header>
      <Hero></Hero>
      </Page>
    </div>
  )
}

export default App
