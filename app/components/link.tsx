/*
TODO: Update this component to use your client-side framework's link
component. We've provided examples of how to do this for Next.js,
Remix, and Inertia.js in the Catalyst documentation:

https://catalyst.tailwindui.com/docs#client-side-router-integration
*/

import { DataInteractive as HeadlessDataInteractive } from "@headlessui/react";
import { Link as RemixLink, type LinkProps } from "@remix-run/react";
import React from "react";

export const Link = React.forwardRef(function Link(
  props: { href: string | LinkProps["to"] } & Omit<LinkProps, "to">,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <HeadlessDataInteractive>
      <RemixLink {...props} to={props.href} ref={ref} />
    </HeadlessDataInteractive>
  );
});