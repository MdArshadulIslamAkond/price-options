// import { LineChart } from "recharts";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import PriceOptions from "./components/priceOptions/priceOptions";
import LineChart from "./components/lineChart/lineChart";
import Phones from "./components/phones/phones";
// import DaisyNav from "./components/daisyNav/daisyNav";

function App() {
  return (
    <>
      <Navbar />
      {/* <DaisyNav /> */}
      <h1 className="text-7xl bg-rose-200">Vite + React</h1>
      <PriceOptions />
      <LineChart />
      <Phones />
    </>
  );
}

export default App;
