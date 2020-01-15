import React, { useState, createContext } from "react";

export const NewTaskContext = createContext();

export const NewTaskProvider = ({ children }) => {
	const [showNewTaskModal, setShowNewTaskModal] = useState(false);

	return (
		<NewTaskContext.Provider value={{ showNewTaskModal, setShowNewTaskModal }}>
			{children}
		</NewTaskContext.Provider>
	);
};
