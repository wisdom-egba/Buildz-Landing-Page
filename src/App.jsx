import { Result } from "./components/Result"
import { Achievement } from "./components/Achievement"
import Header from "./components/Header"
import { Hero } from "./components/Hero"
import { Experience } from "./components/Experience"
import { Pricing } from "./components/Pricing"
import React from "react"
import { DisplaySlider } from "./components/DisplaySlider"
import { FormData } from "./components/FormData"
function App() {
  return (
    <div>
      <Header />
      <section id="hero">
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
        <section id="price">
          <Pricing />
        </section>
        <section id="slide">
          <DisplaySlider />
        </section>
        <section id="form">
          <FormData />
        </section>
      </body>
      <footer></footer>
    </div>
  )
}

export default App
