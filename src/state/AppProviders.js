import React from "react";
import { AuthProvider } from "./AuthContext";
import { GlobalStateProvider } from "./GlobalStateContext";

const AppProviders = ({ children }) => {
	return (
		<AuthProvider>
			<GlobalStateProvider>{children}</GlobalStateProvider>
		</AuthProvider>
	);
};

export { AppProviders };
