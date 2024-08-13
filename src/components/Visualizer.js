import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { quickSort } from '../algorithms/quickSort';

const Visualizer = () => {
    const [array, setArray] = useState([]);

    useEffect(() => {
        resetArray();
    }, []);

    const resetArray = () => {
        const newArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 500) + 5);
        setArray(newArray);
    };

    const animateSort = () => {
        const animations = quickSort(array.slice());
        for (let i = 0; i < animations.length; i++) {
            setTimeout(() => {
                const [barOneIdx, barTwoIdx] = animations[i];
                const arrayBars = document.getElementsByClassName('array-bar');
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const tempHeight = barOneStyle.height;
                barOneStyle.height = barTwoStyle.height;
                barTwoStyle.height = tempHeight;
            }, i * 10);
        }
    };

    return (
        <div>
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                            backgroundColor: 'turquoise',
                            height: `${value}px`,
                        }}></div>
                ))}
            </div>
            <button onClick={resetArray}>Generate New Array</button>
            <button onClick={animateSort}>Quick Sort</button>
        </div>
    );
};

export default Visualizer;
