export function classNames(...classes: (string | undefined)[]) {
  return classes.filter((className) => !!className).join(" ");
}
