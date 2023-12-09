'use client'
import { useEffect , useRef , MutableRefObject  } from "react";

const Header = () => {
    const container : MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const stickyMask : MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);

    const initialMaskSize : number = 0.8;
    const targetMaskSize : number = 10;
    const easing : number = 0.15;
    let easedScrollProgress : number = 10;

    useEffect(() : void => {
      requestAnimationFrame(animate);
    }, []);

    const animate = () : void => {
      const maskSizeProgress : number = targetMaskSize * getScrollProgress();
      const maskOpacity : number = 1 - maskSizeProgress / targetMaskSize;
      if (stickyMask.current !== null) {
        stickyMask.current.style.maskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
        stickyMask.current.style.opacity = maskOpacity.toString();
      }

      requestAnimationFrame(animate);
    };

    const getScrollProgress = () : number => {
      if (stickyMask.current !== null && container.current !== null) {
        const scrollProgress : number = stickyMask.current.offsetTop  / (container.current.getBoundingClientRect().height - window.innerHeight);
        const delta : number = scrollProgress - easedScrollProgress;
        easedScrollProgress += delta * easing;
        return easedScrollProgress;
      }

      return 0;
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
