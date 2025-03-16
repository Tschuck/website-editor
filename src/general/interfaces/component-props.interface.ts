import { PropsWithChildren } from "react";

export interface BaseComponentProps {
  className?: string;
}

export interface BaseComponentPropsWithChildren extends PropsWithChildren {
  className?: string;
}
