import { useEffect, useRef, useState } from "react";

export const useFoldingGesture = (threshold: number, callback: Function) => {
    const [translate, setTranslate] = useState(0);
    const startY = useRef<number | null>(null);
    const heightRef = useRef(0);
    const isDragging = useRef(false);

    useEffect(() => {
        heightRef.current = translate;
    }, [translate]);

    const endGesture = () => {
        if (!isDragging.current) return;
        isDragging.current = false;
        removeListeners();
        if (heightRef.current > threshold) callback();
        setTranslate(0);
    };

    const moveGesture = (clientY: number) => {
        if (!startY.current || !isDragging.current) return;
        const diffY = clientY - startY.current;
        if (diffY > 0) setTranslate(diffY);
    };

    const handleMouseMove = (e: MouseEvent) => moveGesture(e.clientY);
    const handleTouchMove = (e: TouchEvent) => moveGesture(e.touches[0].clientY);

    const handleMouseUp = () => endGesture();
    const handleTouchEnd = () => endGesture();

    const removeListeners = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
    };

    const handleStart: React.MouseEventHandler<HTMLDivElement> & React.TouchEventHandler<HTMLDivElement> = (e) => {
        if (e.type === "touchstart") {
            const touchEvent = e as React.TouchEvent<HTMLDivElement>;
            startY.current = touchEvent.touches[0].clientY;
            document.addEventListener("touchmove", handleTouchMove);
            document.addEventListener("touchend", handleTouchEnd);
        } else if (e.type === "mousedown") {
            const mouseEvent = e as React.MouseEvent<HTMLDivElement>;
            startY.current = mouseEvent.clientY;
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }

        isDragging.current = true;
    };

    return { translateY: translate, isDragging, handleStart };
};
