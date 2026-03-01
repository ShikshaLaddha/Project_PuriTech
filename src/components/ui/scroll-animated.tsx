import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimatedProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const getVariants = (direction: string): Variants => {
  const distance = 40;
  const initial: { opacity: number; x?: number; y?: number } = { opacity: 0 };

  switch (direction) {
    case "up":
      initial.y = distance;
      break;
    case "down":
      initial.y = -distance;
      break;
    case "left":
      initial.x = distance;
      break;
    case "right":
      initial.x = -distance;
      break;
  }

  return {
    hidden: initial,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
};

export const ScrollAnimated = ({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollAnimatedProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      variants={getVariants(direction)}
    >
      {children}
    </motion.div>
  );
};

export const FadeIn = ({
  children,
  className,
  delay = 0,
}: Omit<ScrollAnimatedProps, "direction">) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({
  children,
  className,
  delay = 0,
}: Omit<ScrollAnimatedProps, "direction">) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};
