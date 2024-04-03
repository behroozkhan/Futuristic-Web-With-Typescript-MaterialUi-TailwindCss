import React, { useState, useEffect } from 'react';

interface CounterProps {
    label: string;
    finalValue: number;
    countClassName?: string;
    labelClassName?: string;
}

const Counter: React.FC<CounterProps> = ({ label, finalValue, countClassName, labelClassName }) => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        let currentCount = 0;
        const increment = Math.ceil(finalValue / 500); // Adjust the increment based on finalValue
        const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= finalValue) {
                currentCount = finalValue;
                clearInterval(timer);
            }
            setCount(currentCount);
        }, 10); // Adjust the delay as needed

        return () => clearInterval(timer);
    }, [finalValue]);

    return (
        <div className="counter text-center">
            <div className={`count ${countClassName || ''}`}>{count}+</div>
            <div className={`label ${labelClassName || ''}`}>{label}</div>
        </div>
    );
};

export default Counter;
