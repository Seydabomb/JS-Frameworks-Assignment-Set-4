import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
	return createPortal(
		<>
			<div className="backdrop" onClick={onClose} />
			<motion.dialog
				variants={{
					// hidden and visible names are up to you
					hidden: { opacity: 0, y: 30 },
					visible: { opacity: 1, y: 0 },
				}}
				// When the modal is added to the dom it starts with the initial animation
				// Then it fixes itself to the ending animation when clicked
				initial="hidden" // {{ opacity: 0, y: 30 }}
				animate="visible" // {{ opacity: 1, y: 0 }}
				// The state we animate to when the modal is removed from the DOM
				exit="hidden" // {{ opacity: 0, y: 30 }}
				open
				className="modal"
			>
				<h2>{title}</h2>
				{children}
			</motion.dialog>
		</>,
		document.getElementById("modal"),
	);
}
