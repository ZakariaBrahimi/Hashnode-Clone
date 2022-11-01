import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  
  return (
    <div className="App flex flex-col gap-5 mb-24 bg-[#fafbff]">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
