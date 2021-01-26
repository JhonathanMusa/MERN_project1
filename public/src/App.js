import GetInfo from "./sections/GetInfo";
import Forms from "./components/views/Forms";
import Navbar from "./components/parts/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <GetInfo />
      <Forms />
    </div>
  );
};

export default App;
