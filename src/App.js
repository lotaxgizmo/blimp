import Home from './components/Home'
import Community from './components/Community'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="App overflow-clip">
      <Header />
      <Home />
      <Community />
      <About />
      <Tokenomics />
      <Footer />
    </div>
  );
}

export default App;
