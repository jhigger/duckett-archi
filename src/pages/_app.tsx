import { type AppType } from "next/dist/shared/lib/utils";
import Nav from "~/components/Nav";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<div className="min-h-screen p-8">
			<Nav />

			<Component {...pageProps} />
		</div>
	);
};

export default MyApp;
