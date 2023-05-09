import { Result } from "./components/Result"
import { Achievement } from "./components/Achievement"
import Header from "./components/Header"
import { Hero } from "./components/Hero"

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
    </div>
  )
}

export default App
