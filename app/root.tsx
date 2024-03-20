import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import fontStyleSheetUrl from "./styles/inter.css";
import tailwindStylesheetUrl from "./styles/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preload", href: fontStyleSheetUrl, as: "style" },
  { rel: "preload", href: tailwindStylesheetUrl, as: "style" },
  { rel: "stylesheet", href: fontStyleSheetUrl },
  { rel: "stylesheet", href: tailwindStylesheetUrl },
];

export default function App() {
  return (
    <html lang="en" className="h-full text-base">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-full flex-col bg-zinc-50 dark:bg-zinc-950">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
