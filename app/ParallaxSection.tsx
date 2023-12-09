'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Parallax.module.css';
import Image from 'next/image'
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion, MotionValue } from 'framer-motion';

const images = [
  "A236409_large.jpg",
  "A236410_large.jpg",
  "A236411_large.jpg",
  "A236412_large.jpg",
  "A236414_large.jpg",
  "A236413_large.jpg",
  "A236415_large.jpg",
  "A236416_large.jpg",
  "A236417_large.jpg",
  "A236418_large.jpg",
  "A236419_large.jpg",
  "A236420_large.jpg",
]


export default function ParallaxSection() {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time:number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <main className={styles.main}>
    
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
  
      </div>

    </main>
  )
}


const Column = ({images, y}: {
    images: string[];
    y: MotionValue<number>;
  }) => {
  return (
    <motion.div 
      className={styles.column}
      style={{y}}
      >
      {
        images.map( (src, i) => {
          return <div key={i} className={styles.imageContainer}>
            <Image 
              src={`/assets/DakarAlbum/${src}`}
              alt='image'
              fill
            />
          </div>
        })
      }
    </motion.div>
  )
}