import AirQuality from "../../components/air-quality";
import SunTime from "../../components/sun-time";
import TemperatureNow from "../../components/temperature-now";
import WeekWeather from "../../components/week-weather";

import styles from "./index.module.css";

function WeatherPage() {
  return (
    <div className={styles.pageContainer}>
      <TemperatureNow />
      <AirQuality />
      <SunTime />
      <WeekWeather />
    </div>
  );
}

export default WeatherPage;
