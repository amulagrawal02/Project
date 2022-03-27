import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <form action="/post" method="post" className="form">
        <button type="submit">Connected?</button>
      </form>
    </div>
  );
}

export default App;
