import { useEffect, useState } from "react";
import styles from "./LoadingDiv.module.css";

function LoadingDiv() {
  const [isLoading, setIsLoading] = useState(true);
  // useEffect Hook nutzen, um Komponente nach 5 Sekunden einzublenden
  useEffect(() => {
    // Hier befindet sich der Code, der beim Laden der Komponente ausgeführt wird
    setTimeout(() => {
      // Dieser Code wir nach 5 Sekunden ausgeführt
      setIsLoading(false);
    }, 5000);
  }, []); // [] wird verwendet, wenn der Hook einmalig ausgeführt werden soll

  return (
    <div className={styles.mainContainer}>
      {isLoading ? "Ich lade gerade" : "Ich bin geladen"}
    </div>
  );
}

export default LoadingDiv;
