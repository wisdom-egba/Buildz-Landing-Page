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
    </div>
  )
}

export default App
