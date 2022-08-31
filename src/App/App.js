import './App.css';
import HomePage from "./components/pages/HomePage";
import DetailPage from "./components/pages/DetailPage";
import {data} from "./data/data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <HomePage/>
          <DetailPage data={data}/>
      </header>
    </div>
  );
}

export default App;
