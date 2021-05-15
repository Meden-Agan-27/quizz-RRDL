import './App.scss';

// components
import Button from "./shared/components/buttons/Button";
import Checkboxes from "./shared/components/checkboxes/Checkboxes";

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
            <Button variant="is-link" children="Hello" />
            <Button variant="is-success" children="Coucou" />
            <Button variant="is-danger" children="Test" />

            <Checkboxes />
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;
