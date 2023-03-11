import Section from "../section";
import Text from "../text";
import Leaf from "../../assets/icons/leaf.svg";

import styles from "./index.module.css";

type Props = {};

function AirQuality({}: Props) {
  return (
    <Section className={styles.airQuality}>
      <div className={styles.title}>
        <img src={Leaf} alt="leaf" />
        <Text color="title">Qualidade do ar</Text>
      </div>
      <div className={styles.currentQuality}>
        <Text size={18} lineHeight={21.6} color="green">
          Boa
        </Text>
        <Text size={40} lineHeight={48}>
          21
        </Text>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <Text size={14} lineHeight={17} color="green">
            12.9
          </Text>
          <Text size={12} lineHeight={14} weight={400}>
            PM2.5
          </Text>
        </div>
        <div className={styles.info}>
          <Text size={14} lineHeight={17} color="green">
            12.9
          </Text>
          <Text size={12} lineHeight={14} weight={400}>
            PM10
          </Text>
        </div>
        <div className={styles.info}>
          <Text size={14} lineHeight={17} color="green">
            2.1
          </Text>
          <Text size={12} lineHeight={14} weight={400}>
            SO₂
          </Text>
        </div>
        <div className={styles.info}>
          <Text size={14} lineHeight={17} color="green">
            1.4
          </Text>
          <Text size={12} lineHeight={14} weight={400}>
            NO₂
          </Text>
        </div>
        <div className={styles.info}>
          <Text size={14} lineHeight={17} color="green">
            21.2
          </Text>
          <Text size={12} lineHeight={14} weight={400}>
            O₃
          </Text>
        </div>
        <div className={styles.info}>
          <Text size={14} lineHeight={17} color="green">
            0.7
          </Text>
          <Text size={12} lineHeight={14} weight={400}>
            CO
          </Text>
        </div>
      </div>
    </Section>
  );
}

export default AirQuality;
