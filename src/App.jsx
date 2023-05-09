import { Result } from "./components/Result"
import { Achievement } from "./components/Achievement"
import Header from "./components/Header"
import { Hero } from "./components/Hero"
import { Experience } from "./components/Experience"
import { Pricing } from "./components/Pricing"

function App() {
  return (
    <div>
      <Header />
      <section>
        <Hero />
      </section>
      <body>
        <Achievement />
      </body>
      <section>
        <Result />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Pricing />
      </section>
    </div>
  )
}

export default App
