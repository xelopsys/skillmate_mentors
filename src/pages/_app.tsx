import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import NiceModal from "@ebay/nice-modal-react";

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NiceModal.Provider>
				<Component {...pageProps} />
			</NiceModal.Provider>
		</>
	);
}

export default appWithTranslation(App);
