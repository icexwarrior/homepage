import './App.css';
import Home from './pages/Home';
import Header from './pages/Header'
import Layout from './pages/Layout'
import Footer from './pages/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Layout/>
      <Footer/>
      <Home/>
    </div>
  );
}

export default App;
