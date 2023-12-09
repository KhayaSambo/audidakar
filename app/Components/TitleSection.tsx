"use client"
import {  useRef } from "react";
import styles from "../Title.module.css";
const TitleSection = () => {
  const plane = useRef<HTMLDivElement | null>(null);

  const maxRotate = 45;

  const manageMouseMove = (e: any) => {
    const x = e.clientX / window.innerWidth;

    const y = e.clientY / window.innerHeight;

    const perspective = window.innerWidth * 4;

    const rotateX = maxRotate * x - maxRotate / 2;

    const rotateY = (maxRotate * y - maxRotate / 2) * -1;

    if (plane.current !== null) {
      plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
    }
  };

  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={styles.container}
    >
    <img src="./assets/ADakar1.jpg" alt="Audi Dakar" style={{position: 'absolute', width: '100vw', height: '100vh', objectFit: 'cover' }} />
      <div ref={plane} className={styles.body}>
       
        <Text3d primary={"Dakar"} secondary={"Dakar"} />
        <Text3d primary={"Rally"} secondary={"Rally"} />
        <Text3d primary={"2024"} secondary={"2024"} />
      </div>
    </div>
  );
};

function Text3d({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) {
  return (
    <div className={styles.textContainer}>
      <p className={styles.primary}>{primary}</p>
      <p className={styles.secondary}>{secondary}</p>
    </div>
  );
}

export default TitleSection;
