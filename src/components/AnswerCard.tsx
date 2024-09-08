import { motion } from "framer-motion"
import { Check, XIcon } from "lucide-react";

interface AnswerCardProps {
    label: string;
    index: number;
    selected: boolean;
    correct: boolean;
    incorrect: boolean;
    onClick: () => void;
}

export const AnswerCard = ({ label, index, selected, correct, incorrect, onClick }: AnswerCardProps) => {
	const alphabet = ['A', 'B', 'C', 'D'];
	let borderColor = 'border-gray-200 dark:border-gray-400';
	let iconColor = 'text-gray-300 dark:text-gray-600';

	if (correct) {
		borderColor = 'border-green-500';
		iconColor = 'text-green-500';
	}

	if (incorrect) {
		borderColor = 'border-red-500';
		iconColor = 'text-red-500';
	}

	return (
		<motion.div
			className={`card cursor-pointer group hover:bg-slate-100 dark:hover:bg-slate-500 transition-all transform bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center gap-4 border-2 ${borderColor} ${
				selected ? 'bg-gray-300 dark:bg-slate-600' : ''
			}`}
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			onClick={onClick}
		>
			<div className={`w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg text-slate-600 dark:text-slate-400 font-bold border-2 ${borderColor}`}>
				{alphabet[index]}
			</div>
			<p className="text-gray-800 dark:text-gray-200 font-medium flex-grow">
				{label}
			</p>
            {(correct || incorrect) && (
                <div className={`w-6 h-6 ${iconColor}`}>
                    {correct ? <Check /> : <XIcon />}
                </div>
            )}
		</motion.div>
	);
};
