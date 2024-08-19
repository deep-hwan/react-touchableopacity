/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes, forwardRef, ForwardedRef } from "react";
import { TabType } from "../types/tab";
import { TabTheme } from "../themes/tab";
import { extandedMediaQuery } from "../themes/mediaQuery";
import { extandedProps } from "../utils/extandedProps";

//
type AttriType = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "color" | "disabled"
>;

//
type Types = {
  as?: "s" | "m" | "l";
  button_disabled?: boolean;
} & AttriType &
  TabType;

//
export const Button = forwardRef<HTMLButtonElement, Types>(
  (props: Types, ref: ForwardedRef<HTMLButtonElement>) => {
    const { as = "l", disabled, button_disabled, ...restProps } = props;
    const { elementProps } = extandedProps(restProps);

    const TAB_SIZE = {
      s: {
        minHeight: "auto",
        fontSize: `${12 / 16}rem`,
        borderRadius: 12,
      },
      m: {
        minHeight: "auto",
        fontSize: `${14 / 16}rem`,
        borderRadius: 14,
      },
      l: {
        minHeight: 56,
        fontSize: `${15 / 16}rem`,
        borderRadius: 18,
      },
    };

    const mq_styles = extandedMediaQuery({ mediaQuery: props.mediaQuery });

    const tab_theme = TabTheme({
      ...props,
      display: props.display ?? "flex",
      direction: props.direction ?? "row",
      align: props.align ?? "center",
      crossAlign: props.crossAlign ?? "center",
      minHeight: restProps.minHeight ?? TAB_SIZE[as].minHeight,
      whiteSpace: restProps.whiteSpace ?? "nowrap",
      txtColor: restProps.txtColor ?? "#fff",
      padding:
        (as === "s" && { vertical: 11, horizontal: 16 }) ||
        (as === "m" && { vertical: 13, horizontal: 18 }) ||
        (as === "l" && { vertical: 15, horizontal: 20 }) ||
        restProps.padding,
      border: props.border ?? { solid: 1, color: "transparent" },
      borderRadius: restProps.borderRadius ?? TAB_SIZE[as].borderRadius,
      backgroundColor: (restProps?.backgroundColor as string) ?? "#5b94f0",
      cursor: "pointer",
      transitionTime: props.transitionTime ?? 0.3,
    });

    const globel_theme = {
      ...(tab_theme as any),
      ...mq_styles,

      "&:hover": TabTheme({
        ...props.hover,
        filter: "saturate(88%)",
        shadow: { x: 0, y: 0, blur: 0 },
      }),
      "&:active": TabTheme({
        ...props.active,
        opacity: 0.8,
        shadow: { x: 0, y: 0, blur: 0 },
      }),
      "&:disabled": TabTheme({
        ...props.disabled,
        backgroundColor: "#ccc",
        txtColor: "#fff",
      }),
    };

    return (
      <button
        className="button"
        ref={ref}
        type={restProps.type ?? "button"}
        disabled={button_disabled}
        css={globel_theme}
        {...elementProps}
      >
        {props.children}
      </button>
    );
  }
);
