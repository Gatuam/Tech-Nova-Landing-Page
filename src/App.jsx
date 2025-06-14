import { motion } from "motion/react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Page from "./components/Page"
import Hero from "./components/Hero"
import Review from "./components/Review"
import Logos from "./components/Logos"
import Note from "./components/Note"
import FAQ from "./components/FAQ"
import TexReview from "./components/TexReview"
import Footer from "./components/Footer"
   

function App() {
  return (
    <div className="main w-full h-screen ">
      <Page>
      <Header>
        <Nav/>
      </Header>
      <Hero></Hero> 
      <Logos></Logos>
      <Note></Note>
      <FAQ></FAQ>
      <TexReview> </TexReview>
      <Footer></Footer>
      </Page>
    </div>
  )
}

export default App
