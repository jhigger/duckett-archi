import { type AppType } from "next/dist/shared/lib/utils";
import Footer from "~/components/Footer";
import Nav from "~/components/Nav";
import NextNProgress from "nextjs-progressbar";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<div className="min-h-screen p-4 lg:p-8 ">
			<NextNProgress color="#F6A01E" height={4} />

			<Nav />

			<Component {...pageProps} />

			<Footer />
		</div>
	);
};

export default MyApp;
