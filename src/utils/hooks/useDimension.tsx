import { useState, useEffect } from "react";

export default function useDimension() {
    const [ dimension, setDimension ] = useState(window.innerWidth);

    useEffect(() => {
        const resize = () => setDimension(window.innerWidth);
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    })
    
    return [ dimension];
}