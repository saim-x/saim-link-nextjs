// app/components/AnimatedLinkCard.tsx
import { motion } from "framer-motion";

type AnimatedLinkCardProps = {
    href: string;
    title: string;
};

const AnimatedLinkCard = ({ href, title }: AnimatedLinkCardProps) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border-2 border-blue-600 rounded-lg text-lg text-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {title}
        </motion.a>
    );
};

export default AnimatedLinkCard;
