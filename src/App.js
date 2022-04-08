import "./App.css";
import FormRenderer from "./FormRender";
import DEFAULT_SCHEMA from "./config/defaultSchema";
function App() {
  return (
    <div className="App">
      <FormRenderer config={DEFAULT_SCHEMA}></FormRenderer>
    </div>
  );
}

export default App;
