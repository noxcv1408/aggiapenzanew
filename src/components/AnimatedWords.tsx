import { motion } from "framer-motion";

interface AnimatedWordsProps {
  text: string;
  className?: string;
}

const AnimatedWords = ({ text, className = "" }: AnimatedWordsProps) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimatedWords;
