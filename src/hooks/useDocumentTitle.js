import { useEffect } from "react";

export function useDocumentTitle(title) {
	const appName = import.meta.env.VITE_APP_NAME;

	useEffect(() => {
		if (title) {
			document.title = `${title} | ${appName}`;
		} else {
			document.title = appName;
		}
	}, [title, appName]);
}
