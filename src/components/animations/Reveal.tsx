import { motion, type HTMLMotionProps } from 'framer-motion';
import { fadeUp } from '../../animations/variants';

export function Reveal({ children, ...props }: HTMLMotionProps<'div'>) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
