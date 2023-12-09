'use client'
import { useEffect , useRef , MutableRefObject  } from "react";

const Header = () => {
   
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = .8;
  const targetMaskSize = 30;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect( () => {
    requestAnimationFrame(animate)
  }, [])

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
    requestAnimationFrame(animate)
  }

  const getScrollProgress = () => {
    const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress
  }

    return (
      <>
     <section>   
          <div ref={container} className='containerStyle'>
            <div ref={stickyMask} className='sticky'>
           
            <video autoPlay muted loop>
            <source src="./assets/video.mp4" type="video/mp4"/>
          </video>
            </div>
          </div>
      </section>
 
      </>
    );
  };


export default Header;
