import "./assets/global.scss";
import ToDo from "./components/ToDo";
import "./App.scss";

function App() {
  return (
    <>
      <header className="header">My tasks</header>
      <main className="mainSection">
        <ToDo />
      </main>
    </>
  );
}

export default App;
