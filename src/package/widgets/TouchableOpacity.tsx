/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes } from "react";
import { Interpolation, Theme } from "@emotion/react";
import { extandedProps } from "../utils/extandedProps";
import { extandedMediaQuery } from "../themes/mediaQuery";
import { TabTheme } from "../themes/tab";
import { TabType } from "../types/tab";

//
type AttriType = Omit<
  HTMLAttributes<
    | HTMLDivElement
    | HTMLLIElement
    | HTMLSpanElement
    | HTMLButtonElement
    | HTMLAnchorElement
  >,
  "color" | "disabled"
>;

type Types = {
  as?: "div" | "li" | "span" | "button";
  disabled?: boolean | null;
} & AttriType &
  TabType;

//
export function TouchableOpacity({
  as = "div",
  txtSize,
  onClick,
  ...props
}: Types) {
  const { elementProps } = extandedProps(props);
  const mq_styles = extandedMediaQuery({ _mediaQuery: props._mediaQuery });

  const TYPOGRAPH_WEIGHT = {
    lighter: { fontWeight: "300" },
    normal: { fontWeight: 400 },
    medium: { fontWeight: "500" },
    bold: { fontWeight: "600" },
  } as const;

  const txt_ellipsis_extend = {
    maxWidth: props?.ellipsis?.width ?? props.maxWidth,
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: props?.ellipsis?.line,
  } as any;

  const tab_theme = TabTheme({
    ...props,
    width: props.width ?? "auto",
    positionType: props.positionType ?? "relative",
    display: props.display ?? "flex",
    direction: props.direction ?? "row",
    align: props.align ?? "center",
    crossAlign: props.crossAlign ?? "center",
    txtSize:
      typeof txtSize === "string" ? txtSize : (txtSize ?? 14) / 16 + "rem",
    txtColor: props.txtColor ?? "#5b94f0",
    txtWeight: TYPOGRAPH_WEIGHT[props.txtWeight ?? "normal"].fontWeight,
    txtAlign: props.txtAlign ?? "center",
    whiteSpace: props?.ellipsis?.ellipsis
      ? "normal"
      : props.whiteSpace ?? "nowrap",
    userSelect: props.userSelect ? props.userSelect : "none",
    cursor: props.cursor ? props.cursor : onClick && "pointer",
    transitionTime: props.transitionTime ?? 0.3,
    ...(props.ellipsis?.ellipsis && txt_ellipsis_extend),
  });

  const globel_theme = {
    ...(tab_theme as any),
    ...mq_styles,
    "&:hover": TabTheme({ ...props._hover }),
    "&:active": TabTheme({
      ...props._active,
      opacity: props._active?.opacity ?? 0.75,
    }),
    "&:disabled": TabTheme({ ...props._disabled }),
  };

  const Button = () => (
    <button
      className="TouchableOpacity"
      disabled={props.disabled}
      css={globel_theme}
      onClick={onClick}
      {...elementProps}
    >
      {props.children}
    </button>
  );

  return (
    <>
      {typeof props.disabled === "boolean" ? (
        <Button />
      ) : (
        <>
          {as === "div" && (
            <div
              className="TouchableOpacity"
              css={globel_theme}
              {...elementProps}
              onClick={onClick}
            >
              {props.children}
            </div>
          )}

          {as === "li" && (
            <li
              className="TouchableOpacity"
              css={globel_theme}
              {...elementProps}
              onClick={onClick}
            >
              {props.children}
            </li>
          )}

          {as === "span" && (
            <span
              className="TouchableOpacity"
              css={globel_theme}
              {...elementProps}
              onClick={onClick}
            >
              {props.children}
            </span>
          )}

          {as === "button" && <Button />}
        </>
      )}
    </>
  );
}
