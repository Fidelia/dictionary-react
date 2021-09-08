import logo from "./logo.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <a href="#" className="btn btn primary shadow">
            hello
          </a>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">Coded by Fidelia Okandze</footer>
      </div>
    </div>
  );
}

export default App;
