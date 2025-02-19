import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Second from './components/Second';
import About from './components/About'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Second/>
        <About/>
      </main>
    </>
  );
}

export default App;
