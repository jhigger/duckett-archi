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
					<meta name="author" content="github.com/jhigger" />
					<meta
						name="description"
						content="Duckett Architecture Palmerston North"
					/>
					<meta
						name="keywords"
						content="Duckett Architecture, architecture, architects, Palmerston North, architectural designers, Palmerston North architects, Architects in Palmerston North"
					/>
					<link rel="icon" href="/favicon.ico" />
					<link rel="shortcut icon" href="/favicon.ico" />
					<link
						rel="canonical"
						href="https://www.duckettarchitecture.co.nz/"
					/>
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
