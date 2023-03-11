import Section from "../section";
import Text from "../text";
import Time from "../../assets/icons/time.svg";

import styles from "./index.module.css";

type Props = {};

function SunTime({}: Props) {
  return (
    <Section className={styles.sunTime}>
      <div className={styles.title}>
        <img src={Time} alt="time" />
        <Text color="title">Horário do sol</Text>
      </div>
      <div className={styles.container}>
        <div className={styles.sunTimeContainer}>
          <Text size={14} lineHeight={17} className={styles.hour} color="white">
            16:01
          </Text>
          <div className={styles.sun} />
          <div className={styles.sunSemiCircle}>
            <div className={styles.sunLight} />
          </div>
        </div>
        <div className={styles.hourRange}>
          <Text size={12} lineHeight={14} weight={400} color="white">
            06:12
          </Text>
          <Text size={12} lineHeight={14} weight={400} color="white">
            18:52
          </Text>
        </div>
      </div>
    </Section>
  );
}

export default SunTime;
