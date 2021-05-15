import './App.scss';

// components
import Button from "./shared/components/buttons/Button";

function App() {
  return (
    <div className="App">
      <body>
        <section className="section">
          <div className="container">
            <h1 className="title">Section</h1>
            <h2 className="subtitle">
              A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
            </h2>
            <Button variant="is-link" children="Hello"></Button>
            <Button variant="is-success" children="Coucou"></Button>
            <Button variant="is-danger" children="Test"></Button>

            
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;
