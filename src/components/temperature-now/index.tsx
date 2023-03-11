import Section from "../section";
import Text from "../text";
import Wind from "../../assets/icons/wind.svg";
import Water from "../../assets/icons/water.svg";
import Rain from "../../assets/icons/rain.svg";
import Pin from "../../assets/icons/pin.svg";
import Cloudy from "../../assets/images/cloudy.png";

import styles from "./index.module.css";

type Props = {};

function TemperatureNow({}: Props) {
  return (
    <Section className={styles.temperatureNow}>
      <img src={Cloudy} alt="cloudy" className={styles.sectionIcon} />
      <div className={styles.location}>
        <img src={Pin} alt="pin" />
        <Text
          size={14}
          lineHeight={17}
          color="secondary"
          className={styles.location}
        >
          Rio do Sul, SC
        </Text>
      </div>
      <div className={styles.temperatureContainer}>
        <div className={styles.temperatureInfos}>
          <Text size={88} lineHeight={106}>
            18
          </Text>
          <div>
            <Text size={20} lineHeight={24}>
              22°
            </Text>
            <Text size={20} lineHeight={24} color="secondary">
              16°
            </Text>
          </div>
        </div>
        <Text size={24} lineHeight={29 + 34} color="secondary">
          °C
        </Text>
      </div>
      <div className={styles.statistics}>
        <div className={styles.littleSection}>
          <img src={Wind} alt="wind" />
          <div className={styles.info}>
            <Text size={12} lineHeight={14} weight={400} color="secondary">
              Vento
            </Text>
            <div>
              <Text size={18} lineHeight={22}>
                17
              </Text>
              <Text size={14} lineHeight={17} color="secondary">
                km/h
              </Text>
            </div>
          </div>
        </div>
        <div className={styles.littleSection}>
          <img src={Water} alt="wind" />
          <div className={styles.info}>
            <Text size={12} lineHeight={14} weight={400} color="secondary">
              Umidade
            </Text>
            <div>
              <Text size={18} lineHeight={22}>
                31
              </Text>
              <Text size={14} lineHeight={17} color="secondary">
                %
              </Text>
            </div>
          </div>
        </div>
        <div className={styles.littleSection}>
          <img src={Rain} alt="wind" />
          <div className={styles.info}>
            <Text size={12} lineHeight={14} weight={400} color="secondary">
              Chuva
            </Text>
            <div>
              <Text size={18} lineHeight={22}>
                10
              </Text>
              <Text size={14} lineHeight={17} color="secondary">
                %
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default TemperatureNow;
