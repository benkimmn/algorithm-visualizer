import React, { useState, useEffect } from 'react';
import { quickSort } from '../algorithms/quickSort';
import { mergeSort } from '../algorithms/mergeSort';
import { bubbleSort } from '../algorithms/bubbleSort';
import { selectionSort } from '../algorithms/selectionSort';
import { insertionSort } from '../algorithms/insertionSort';
import { heapSort } from '../algorithms/heapSort';
import './Visualizer.css';

const Visualizer = () => {
    const [array, setArray] = useState([]);
    const [array1, setArray1] = useState([]);
    const [algorithm1, setAlgorithm1] = useState('insertionSort');
    const [algorithm2, setAlgorithm2] = useState('mergeSort');
    const [time1, setTime1] = useState(0);
    const [time2, setTime2] = useState(0);

    useEffect(() => {
        resetArray();
    }, []);

    const resetArray = () => {
        const newArray = Array.from({ length: 50 }, () => Math.floor(Math.random() * 500) + 5);
        setArray(newArray);
        setArray1([...newArray]);
    };

    const getAnimations = (algo, array) => {
        if (algo === 'quickSort') return quickSort(array.slice());
        if (algo === 'mergeSort') return mergeSort(array.slice());
        if (algo === 'bubbleSort') return bubbleSort(array.slice());
        if (algo === 'selectionSort') return selectionSort(array.slice());
        if (algo === 'insertionSort') return insertionSort(array.slice());
        if (algo === 'heapSort') return heapSort(array.slice());
        return [];
    };

    const animateSort = () => {
        const animations1 = getAnimations(algorithm1, array);
        const animations2 = getAnimations(algorithm2, array1);
    
        const animate = (animations, arrayBarsClass, algorithm, setTime) => {
            const arrayBars = document.getElementsByClassName(arrayBarsClass);
            const startTime = performance.now(); // Start timer
            // Start an interval to update the timer in real-time
            const timerInterval = setInterval(() => {
                setTime(performance.now() - startTime);
            }, 100);
            
            animations.forEach((animation, i) => {
                const isColorChange = i % 3 !== 2;
    
                setTimeout(() => {
                    if (algorithm === 'quickSort') {
                        const [barOneIdx, barTwoIdx, newHeightOne, newHeightTwo] = animation;
                        // Skip "no-op" animations
                        if (barOneIdx === -1 && barTwoIdx === -1) return;
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        const color = i % 3 === 0 ? 'red' : 'turquoise';
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                        if (newHeightOne !== -1 && newHeightTwo !== -1) {
                            barOneStyle.height = `${newHeightOne}px`;
                            barTwoStyle.height = `${newHeightTwo}px`;
                        }
                    } else if (algorithm === 'bubbleSort') {
                        const [barOneIdx, barTwoIdx, newHeightOne, newHeightTwo] = animation;
                        // Skip "no-op" swaps
                        if (barOneIdx === -1 && barTwoIdx === -1) return;
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        const color = i % 3 !== 2 ? 'red' : 'turquoise';
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                        if (barOneIdx !== -1 && barTwoIdx !== -1) {
                            barOneStyle.height = `${newHeightOne}px`;
                            barTwoStyle.height = `${newHeightTwo}px`;
                        }
                    } else if (algorithm === 'selectionSort') {
                        const [barOneIdx, barTwoIdx, newHeightOne, newHeightTwo] = animation;
                        // Skip "no-op" swaps
                        if (barOneIdx === -1 && barTwoIdx === -1) return;
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        const color = i % 3 !== 2 ? 'red' : 'turquoise';
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                        if (newHeightOne !== -1 && newHeightTwo !== -1) {
                            barOneStyle.height = `${newHeightOne}px`;
                            barTwoStyle.height = `${newHeightTwo}px`;
                        }
                    } else if (algorithm === 'insertionSort') {
                        const [barOneIdx, barTwoIdx, newHeightOne, newHeightTwo] = animation;
                        // Skip "no-op" swaps
                        if (barOneIdx === -1 && barTwoIdx === -1) return;
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        const color = i % 3 !== 2 ? 'red' : 'turquoise';
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                        if (newHeightOne !== -1 && newHeightTwo !== -1) {
                            barOneStyle.height = `${newHeightOne}px`;
                            barTwoStyle.height = `${newHeightTwo}px`;
                        }
                    } else if (algorithm === 'heapSort') {
                        const [barOneIdx, barTwoIdx, newHeightOne, newHeightTwo] = animation;
                        // Skip "no-op" swaps
                        if (barOneIdx === -1 && barTwoIdx === -1) return;
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        const color = i % 3 !== 2 ? 'red' : 'turquoise';
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                        if (newHeightOne !== -1 && newHeightTwo !== -1) {
                            barOneStyle.height = `${newHeightOne}px`;
                            barTwoStyle.height = `${newHeightTwo}px`;
                        }
                    } else {
                        if (isColorChange) {
                            const [barOneIdx, barTwoIdx] = animation;
                            const barOneStyle = arrayBars[barOneIdx].style;
                            const barTwoStyle = arrayBars[barTwoIdx].style;
                            const color = i % 3 === 0 ? 'red' : 'lightgreen';
                            barOneStyle.backgroundColor = color;
                            barTwoStyle.backgroundColor = color;
                        } else {
                            const [barOneIdx, newHeight] = animation;
                            const barOneStyle = arrayBars[barOneIdx].style;
                            barOneStyle.height = `${newHeight}px`;
                        }
                    }
                }, i * 10);
            });
            // Stop the timer after the last animation has been processed
            setTimeout(() => {
                clearInterval(timerInterval);
            }, animations.length * 10);
        };
    
        animate(animations1, 'array-bar-1', algorithm1, setTime1);
        animate(animations2, 'array-bar-2', algorithm2, setTime2);
    };
    
    return (
        <div>
            <div className="controls">
                <select onChange={(e) => setAlgorithm1(e.target.value)} value={algorithm1}>
                    <option value="quickSort">Quick Sort</option>
                    <option value="mergeSort">Merge Sort</option>
                    <option value="bubbleSort">Bubble Sort</option>
                    <option value="selectionSort">Selection Sort</option>
                    <option value="insertionSort">Insertion Sort</option>
                    <option value="heapSort">Heap Sort</option>
                </select>
                <select onChange={(e) => setAlgorithm2(e.target.value)} value={algorithm2}>
                    <option value="quickSort">Quick Sort</option>
                    <option value="mergeSort">Merge Sort</option>
                    <option value="bubbleSort">Bubble Sort</option>
                    <option value="selectionSort">Selection Sort</option>
                    <option value="insertionSort">Insertion Sort</option>
                    <option value="heapSort">Heap Sort</option>
                </select>
                <button onClick={resetArray}>Generate New Array</button>
                <button onClick={animateSort}>Compare</button>
            </div>
            <div className="comparison-container">
                <div className="array-container">
                    <h2>{algorithm1}</h2>
                    <p>Time: {time1.toFixed(2)} ms</p> 
                    {array.map((value, idx) => (
                        <div
                            className="array-bar-1"
                            key={idx}
                            style={{
                                backgroundColor: 'turquoise',
                                height: `${value}px`,
                            }}></div>
                    ))}
                </div>
                <div className="array-container">
                    <h2>{algorithm2}</h2>
                    <p>Time: {time2.toFixed(2)} ms</p>
                    {array1.map((value, idx) => (
                        <div
                            className="array-bar-2"
                            key={idx}
                            style={{
                                backgroundColor: 'lightgreen',
                                height: `${value}px`,
                            }}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Visualizer;