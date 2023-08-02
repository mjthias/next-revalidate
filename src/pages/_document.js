import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <nav className="flex gap-3 m-4">
          <a href="/">Home</a>
          <a href="/dog-1">Dog-1</a>
          <a href="/dog-2">Dog-2</a>
          <a href="/dog-3">Dog-3</a>
        </nav>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
