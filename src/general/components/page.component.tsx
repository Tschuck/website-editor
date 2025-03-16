import { BaseComponentPropsWithChildren } from "@/general/interfaces/component-props.interface";
import { classNames } from "@/general/utils/utils";

export interface PageProps extends BaseComponentPropsWithChildren {}

export function Page({ className, children }: PageProps) {
  return (
    <div
      className={classNames(
        className,
        "mx-auto overflow-y-auto h-full overflow-x-hidden px-4 sm:px-8 xl:px-32 pt-4 pb-32 md:pb-0",
      )}
    >
      {children}
    </div>
  );
}
