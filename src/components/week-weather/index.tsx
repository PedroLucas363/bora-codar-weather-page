import Section from "../section";
import Text from "../text";
import Cloudy from "../../assets/images/cloudy.png";
import Sunny from "../../assets/images/sunny.png";
import Rainy from "../../assets/images/rainy.png";
import Stormy from "../../assets/images/stormy.png";
import PartlyCloudy from "../../assets/images/partly-cloudy.png";

import styles from "./index.module.css";

type Props = {};

function WeekWeather({}: Props) {
  return (
    <Section className={styles.weekWeather}>
      <div className={styles.dayInfo}>
        <Text color="title" lineHeight={17} size={14}>
          Amanhã
        </Text>
        <img src={Cloudy} alt="cloudy" className={styles.weatherIcon} />
        <div className={styles.temperature}>
          <Text>21°</Text> <Text color="secondary">16°</Text>
        </div>
      </div>
      <div className={styles.dayInfo}>
        <Text color="title" lineHeight={17} size={14}>
          Sexta-Feira
        </Text>
        <img src={Sunny} alt="cloudy" className={styles.weatherIcon} />
        <div className={styles.temperature}>
          <Text>28°</Text> <Text color="secondary">20°</Text>
        </div>
      </div>
      <div className={styles.dayInfo}>
        <Text color="title" lineHeight={17} size={14}>
          Sábado
        </Text>
        <img src={Rainy} alt="cloudy" className={styles.weatherIcon} />
        <div className={styles.temperature}>
          <Text>25°</Text> <Text color="secondary">21°</Text>
        </div>
      </div>
      <div className={styles.dayInfo}>
        <Text color="title" lineHeight={17} size={14}>
          Domingo
        </Text>
        <img src={Stormy} alt="cloudy" className={styles.weatherIcon} />
        <div className={styles.temperature}>
          <Text>20°</Text> <Text color="secondary">14°</Text>
        </div>
      </div>
      <div className={styles.dayInfo}>
        <Text color="title" lineHeight={17} size={14}>
          Segunda-Feira
        </Text>
        <img src={PartlyCloudy} alt="cloudy" className={styles.weatherIcon} />
        <div className={styles.temperature}>
          <Text>24°</Text> <Text color="secondary">18°</Text>
        </div>
      </div>
    </Section>
  );
}

export default WeekWeather;
