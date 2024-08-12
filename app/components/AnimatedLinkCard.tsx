// app/components/AnimatedLinkCard.tsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

type AnimatedLinkCardProps = {
    href: string;
    title: string;
};

const iconMap: Record<string, React.ReactNode> = {
    "GitHub": <FaGithub size={24} />,
    "LinkedIn": <FaLinkedin size={24} />,
    "Email": <FaEnvelope size={24} />
};

const AnimatedLinkCard = ({ href, title }: AnimatedLinkCardProps) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border-2 border-blue-600 rounded-lg text-lg text-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{
                scale: 1.1,
                rotate: 5,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.3 }
            }}
            whileTap={{
                scale: 0.95,
                rotate: -5,
                boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.2 }
            }}
        >
            <div className="flex items-center justify-center mb-2">
                {iconMap[title]}
            </div>
            {title}
        </motion.a>
    );
};

export default AnimatedLinkCard;
