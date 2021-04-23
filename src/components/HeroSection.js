import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import '../App.css'
import './HeroSection.css'
import FOG from 'vanta/dist/vanta.fog.min'
import CardGroup from './CardGroup';

const HeroSection = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(FOG({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                highlightColor: 0xc8c8c8
            }))
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div ref={myRef} className="hero-container">
            <h1>MUSIC QUIZ</h1>
            <p>How well do you know the lyrics to your favorite songs?</p>

            <div className="hero-btns">
                <Button link="/newGame" className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    LET'S FIND OUT! 
                    <i class="fas fa-angle-double-right"></i>
                </Button>
            </div>

            <CardGroup />
        </div>
    )
}

export default HeroSection;