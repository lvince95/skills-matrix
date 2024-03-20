import { clsx } from "clsx";
import { Link } from "./link";

export function Text({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p
      {...props}
      data-slot="text"
      className={clsx(
        className,
        "text-zinc-500 dark:text-zinc-400 text-base/6 sm:text-sm/6",
      )}
    />
  );
}

export function TextLink({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "text-zinc-950 decoration-zinc-950/50 data-[hover]:decoration-zinc-950 underline dark:text-white dark:decoration-white/50 dark:data-[hover]:decoration-white",
      )}
    />
  );
}

export function Strong({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"strong">) {
  return (
    <strong
      {...props}
      className={clsx(className, "text-zinc-950 font-medium dark:text-white")}
    />
  );
}

export function Code({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"code">) {
  return (
    <code
      {...props}
      className={clsx(
        className,
        "border-zinc-950/10 bg-zinc-950/[2.5%] text-zinc-950 rounded border px-0.5 text-sm font-medium sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5 dark:text-white",
      )}
    />
  );
}
