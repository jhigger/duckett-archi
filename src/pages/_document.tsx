import type { DocumentContext } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initalProps = await Document.getInitialProps(ctx);

		return initalProps;
	}

	render() {
		return (
			<Html>
				<Head>
					<meta name="author" content="John Jhigger" />
					<meta
						name="description"
						content="Duckett Architecture Palmerston North"
					/>
					<meta
						name="keywords"
						content="Duckett Architecture, architecture, architects, Palmerston North, architectural designers, Palmerston North architects"
					/>
					<link rel="icon" href="/favicon.ico" />
					<link rel="shortcut icon" href="/favicon.ico" />

					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="anonymous"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
						rel="stylesheet"
					></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
