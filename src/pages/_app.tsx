import { type AppType } from "next/dist/shared/lib/utils";
import { Inter } from "next/font/google";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useState } from "react";
import Footer from "~/components/Footer";
import Nav from "~/components/Nav";
import "~/styles/globals.css";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		if (darkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		}

		setDarkMode((prev) => !prev);
	};

	useEffect(() => {
		const userTheme = localStorage.getItem("theme");
		const systemTheme = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		if (userTheme === "dark" || (!userTheme && systemTheme)) {
			document.documentElement.classList.add("dark");
			setDarkMode(true);
			return;
		}
		setDarkMode(false);
	}, []);

	return (
		<div className={inter.className}>
			<div className="min-h-screen p-4 dark:bg-neutral-900 dark:text-white lg:p-8">
				<NextNProgress color="#F6A01E" height={4} />
				<Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
				<Component {...pageProps} />
				<Footer darkMode={darkMode} />
			</div>
		</div>
	);
};

export default MyApp;
