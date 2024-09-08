import { motion } from "framer-motion";

export const ErrorToast = ({ message }: { message: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="bg-red-200 text-red-500 p-3 rounded-md text-center"
    >
        {message}
    </motion.div>
);

export const SuccessToast = ({ message }: { message: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="absolute top-20 max-w-6xl w-full bg-green-200 text-green-500 p-3 rounded-md text-center"
    >
        {message}
    </motion.div>
);
