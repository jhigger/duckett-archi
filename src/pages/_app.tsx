import { type AppType } from "next/dist/shared/lib/utils";
import { Inter } from "next/font/google";
import NextNProgress from "nextjs-progressbar";
import Footer from "~/components/Footer";
import Nav from "~/components/Nav";
import "~/styles/globals.css";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<div className={inter.className}>
			<div className="min-h-screen p-4 lg:p-8">
				<NextNProgress color="#F6A01E" height={4} />
				<Nav />
				<Component {...pageProps} />
				<Footer />
			</div>
		</div>
	);
};

export default MyApp;
