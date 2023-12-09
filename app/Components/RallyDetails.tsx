"use client";
import styles from "../RallyDetails.module.css";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParallaxSection from "../ParallaxSection";


const text = [
 "The Dakar Rally is one of the greatest challenges and adventures in motorsport.",
  "It was first held in 1978 and took its name from its first destination, Dakar  the capital of Senegal on the west coast of Africa.",

];
const text2 = [
    "Since its inception, the Dakar Rally has been the crown in the world of international rally-raid competition. ",
    "It is a two-week marathon through breathtaking landscapes and over challenging terrain – a real test for all participants, teams and vehicles.",
];

export default function RallyDetails() {
  
    return (
        <div className={styles.container}>
          <MaskText phrases ={text}  />
          <ParallaxSection />
          <MaskText phrases ={text2}  />
          
        </div>
      )
    }

 

    export function MaskText({ phrases }: {phrases: string[]}) {
    
      const animation = {
        initial: {y: "100%"},
        enter: (i:number) => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
      }
    
      const { ref, inView } = useInView({
        threshold: 0.75,
        triggerOnce: true
      });
    
      return(
        <div ref={ref} className={styles.body}>
          {
            phrases.map( (phrase, index) => {
              return <div key={index} className={styles.lineMask}>
                <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
              </div>
            })
          }
        </div>
      )
    }