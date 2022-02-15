import React, { useState } from "react";

const useProduct = () => {
    const [counter, setCounter] = useState(1);

    const increaseByValue = (value: number) => {
        setCounter((prev) => Math.max(prev + value, 0));
    };

    return {
        counter,
        increaseByValue,
    };
};

export default useProduct;
