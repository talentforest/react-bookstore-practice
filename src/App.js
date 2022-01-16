import './App.css';
import Header from './components/Header';
import Prototypes from './components/Prototypes';
import Orders from './components/Orders';
import Footer from './components/Footer';
import AppStateProvider from './providers/AppStateProvider';

function App() {
  return (
    <AppStateProvider>
      <div className="App">
        <Header />
        <div className="Prototypes-Orders">
          <Prototypes />
          <Orders />
        </div>
        <Footer />
      </div>
     </AppStateProvider>
  );
}

export default App;
