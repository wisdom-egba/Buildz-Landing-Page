import { Result } from "./components/Result"
import { Achievement } from "./components/Achievement"
import Header from "./components/Header"
import { Hero } from "./components/Hero"
import { Experience } from "./components/Experience"
import { Pricing } from "./components/Pricing"
import React from "react"
import { DisplaySlider } from "./components/DisplaySlider"
import { FormData } from "./components/FormData"
import { Footer } from "./components/Footer"
function App() {
  return (
    <div>
      <header id="header">
        <Header />
      </header>

      <section id="home">
        <Hero />
      </section>
      <body>
        <section id="achievement">
          <Achievement />
        </section>
        <section id="result">
          <Result />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="slide">
          <DisplaySlider />
        </section>
        <section id="form">
          <FormData />
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
