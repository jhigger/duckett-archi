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
						content="Duckett Architecture is an award winning Architectural practice based in Palmerston North."
					/>
					<meta
						name="keywords"
						content="Duckett Architecture, Architecture, Engineering & Design, Construction, Architects, Palmerston North, Architectural Designers, Palmerston North architects, Architect in Palmerston North, Colin Duckett"
					/>
					<link rel="icon" href="/favicon.ico" />
					<link rel="shortcut icon" href="/favicon.ico" />
					<meta
						name="google-site-verification"
						content="QM1QKn7wn_NGvS2JXj_D6hg2VhYDaq004JN5w1KQl70"
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
