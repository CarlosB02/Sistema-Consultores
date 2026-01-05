import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, type UseInViewOptions } from "framer-motion";

interface Props {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    once?: boolean;
    threshold?: number;
}

export const Reveal = ({
    children,
    width = "100%",
    className = "",
    delay = 0.25,
    direction = "up",
    duration = 0.5,
    once = true,
    threshold = 0.3
}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold } as UseInViewOptions);

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } else if (!once) {
            // If not once, we reset to hidden when out of view
            mainControls.start("hidden");
        }
    }, [isInView, mainControls, once]);

    const getVariants = () => {
        const distance = 75;
        if (direction === "up") return { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } };
        if (direction === "down") return { hidden: { opacity: 0, y: -distance }, visible: { opacity: 1, y: 0 } };
        if (direction === "left") return { hidden: { opacity: 0, x: distance }, visible: { opacity: 1, x: 0 } };
        if (direction === "right") return { hidden: { opacity: 0, x: -distance }, visible: { opacity: 1, x: 0 } };
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    };

    return (
        <div ref={ref} style={{ position: "relative", width }} className={className}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
