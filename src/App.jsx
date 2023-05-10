import "./App.css";

import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDeatails from "./components/TemperatureAndDeatails";
import Forecast from "./components/Forecast";
import getWeatherData from "../Services/getWeatherData";
import getFormattedWeatherData from "../Services/getWeatherData";

function App() {
  const fecthWeatcher = async () => {
    const data = await getFormattedWeatherData({ q: "delhi" });
    console.log(data);
  };
  fecthWeatcher();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TemperatureAndDeatails />
      <Forecast title={"Hourly Forecast"} />
      <Forecast title={"Daily Forecast"} />
    </div>
  );
}

export default App;
