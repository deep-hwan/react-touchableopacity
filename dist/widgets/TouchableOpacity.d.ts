/** @jsxImportSource @emotion/react */
import { HTMLAttributes } from "react";
import { TabType } from "../types/tab";
type AttriType = Omit<HTMLAttributes<HTMLDivElement | HTMLLIElement | HTMLSpanElement | HTMLButtonElement | HTMLAnchorElement>, "color" | "disabled">;
type Types = {
    as?: "div" | "li" | "span" | "button";
    disabled?: boolean | null;
} & AttriType & TabType;
export declare function TouchableOpacity({ as, txtSize, onClick, ...props }: Types): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
