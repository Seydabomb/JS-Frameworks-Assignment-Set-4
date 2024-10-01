import { useContext } from "react";
import { createContext } from "react";

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
	const ctx = useContext(AccordionItemContext);

	if (!ctx) {
		throw new Error(
			"Accordion Item-related components must be wrapped by <Accordion.item></Accordion.item>.",
		);
	}

	return ctx;
}

const AccordionItem = ({ id, className, children }) => {
	return (
		<AccordionItemContext.Provider value={id}>
			<li className={className}>{children}</li>
		</AccordionItemContext.Provider>
	);
};

export default AccordionItem;
