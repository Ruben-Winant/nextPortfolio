import Document, {
  Html,
  DocumentContext,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-PCNW5DBKQP"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-PCNW5DBKQP');`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    initialProps.html;
    return initialProps;
  }
}

export default MyDocument;
