import { DataInteractive as HeadlessDataInteractive } from "@headlessui/react";
import { NavLink as RemixLink, type NavLinkProps } from "@remix-run/react";
import React from "react";

export const NavLink = React.forwardRef(function Link(
  props: { href: string | NavLinkProps["to"] } & Omit<NavLinkProps, "to">,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <HeadlessDataInteractive>
      <RemixLink {...props} to={props.href} ref={ref} />
    </HeadlessDataInteractive>
  );
});
