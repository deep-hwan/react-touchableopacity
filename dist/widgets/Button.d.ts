/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes } from "react";
type AttriType = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "disabled">;
export declare const Button: React.ForwardRefExoticComponent<{
    as?: "s" | "m" | "l" | undefined;
    button_disabled?: boolean | undefined;
} & AttriType & {
    display?: "none" | "flex" | undefined;
    direction?: "row" | "column" | undefined;
    flex?: string | number | undefined;
    reverse?: boolean | undefined;
    align?: "start" | "end" | "center" | "stretch" | "baseline" | undefined;
    crossAlign?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
    alignContent?: "start" | "end" | "center" | "stretch" | "space-between" | "space-around" | "space-evenly" | undefined;
    alignSelf?: "auto" | "start" | "end" | "center" | "stretch" | "baseline" | undefined;
    flow?: string | undefined;
    wrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
    basis?: string | number | undefined;
    grow?: number | undefined;
    shrink?: number | undefined;
    gap?: number | undefined;
    crossGap?: number | undefined;
    order?: number | undefined;
} & {
    positionType?: "static" | "relative" | "fixed" | "absolute" | "sticky" | undefined;
    position?: {
        top?: string | number | undefined;
        bottom?: string | number | undefined;
        left?: string | number | undefined;
        right?: string | number | undefined;
    } | undefined;
    axis?: {
        x?: string | number | undefined;
        y?: string | number | undefined;
    } | undefined;
} & {
    width?: string | undefined;
    minWidth?: string | number | undefined;
    maxWidth?: string | number | undefined;
    height?: string | undefined;
    minHeight?: string | number | undefined;
    maxHeight?: string | number | undefined;
} & {
    txtColor?: string | undefined;
    txtSize?: string | number | undefined;
    txtWeight?: "lighter" | "normal" | "medium" | "bold" | undefined;
    lineHeight?: string | number | undefined;
    txtAlign?: "start" | "end" | "center" | undefined;
    whiteSpace?: "nowrap" | "normal" | "pre" | "pre-wrap" | "pre-line" | undefined;
    txtTransform?: "none" | "initial" | "inherit" | "capitalize" | "uppercase" | "lowercase" | undefined;
    ellipsis?: {
        ellipsis?: boolean | undefined;
        line?: number | undefined;
        width?: number | undefined;
    } | undefined;
    txtDecoration?: string | undefined;
} & {
    backgroundColor?: string | undefined;
    background?: string | undefined;
    backgroundRepeat?: "repeat-x" | "repeat-y" | "repeat" | "space" | "round" | "no-repeat" | undefined;
    backgroundSize?: string | undefined;
    backgroundPosition?: "string" | "center" | "top" | "bottom" | "left" | "right" | undefined;
    backgroundClip?: "border-box" | "padding-box" | "content-box" | "initial" | "inherit" | undefined;
    backgroundImageUrl?: string | undefined;
    filter?: string | number | undefined;
    shadow?: {
        x?: number | undefined;
        y?: number | undefined;
        blur?: number | undefined;
        color?: string | undefined;
    } | undefined;
    zIndex?: number | undefined;
    transitionTime?: number | undefined;
    cursor?: "default" | "grab" | "pointer" | "zoom" | undefined;
    opacity?: number | undefined;
    userSelect?: "auto" | "none" | "contain" | "text" | "all" | undefined;
    scale?: string | number | undefined;
} & {
    border?: {
        solid: number;
        position?: "top" | "bottom" | "left" | "right" | "all" | undefined;
        color: string;
        shape?: "solid" | "dotted" | "dashed" | "double" | "outset" | "inset" | "groove" | "ridge" | undefined;
    } | undefined;
    borderRadius?: string | number | undefined;
} & {
    padding?: {
        all?: string | number | undefined;
        horizontal?: string | number | undefined;
        vertical?: string | number | undefined;
        top?: string | number | undefined;
        bottom?: string | number | undefined;
        left?: string | number | undefined;
        right?: string | number | undefined;
    } | undefined;
    margin?: {
        all?: string | number | undefined;
        horizontal?: string | number | undefined;
        vertical?: string | number | undefined;
        top?: string | number | undefined;
        bottom?: string | number | undefined;
        left?: string | number | undefined;
        right?: string | number | undefined;
    } | undefined;
} & {
    scroll?: {
        x?: "auto" | "visible" | "scroll" | "hidden" | undefined;
        y?: "auto" | "visible" | "scroll" | "hidden" | undefined;
        type?: "auto" | "visible" | "scroll" | "hidden" | undefined;
        bar?: boolean | undefined;
    } | undefined;
} & {
    hover?: ({
        display?: "none" | "flex" | undefined;
        direction?: "row" | "column" | undefined;
        flex?: string | number | undefined;
        reverse?: boolean | undefined;
        align?: "start" | "end" | "center" | "stretch" | "baseline" | undefined;
        crossAlign?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
        alignContent?: "start" | "end" | "center" | "stretch" | "space-between" | "space-around" | "space-evenly" | undefined;
        alignSelf?: "auto" | "start" | "end" | "center" | "stretch" | "baseline" | undefined;
        flow?: string | undefined;
        wrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        basis?: string | number | undefined;
        grow?: number | undefined;
        shrink?: number | undefined;
        gap?: number | undefined;
        crossGap?: number | undefined;
        order?: number | undefined;
    } & {
        positionType?: "static" | "relative" | "fixed" | "absolute" | "sticky" | undefined;
        position?: {
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
        axis?: {
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
    } & {
        width?: string | undefined;
        minWidth?: string | number | undefined;
        maxWidth?: string | number | undefined;
        height?: string | undefined;
        minHeight?: string | number | undefined;
        maxHeight?: string | number | undefined;
    } & {
        txtColor?: string | undefined;
        txtSize?: string | number | undefined;
        txtWeight?: "lighter" | "normal" | "medium" | "bold" | undefined;
        lineHeight?: string | number | undefined;
        txtAlign?: "start" | "end" | "center" | undefined;
        whiteSpace?: "nowrap" | "normal" | "pre" | "pre-wrap" | "pre-line" | undefined;
        txtTransform?: "none" | "initial" | "inherit" | "capitalize" | "uppercase" | "lowercase" | undefined;
        ellipsis?: {
            ellipsis?: boolean | undefined;
            line?: number | undefined;
            width?: number | undefined;
        } | undefined;
        txtDecoration?: string | undefined;
    } & {
        backgroundColor?: string | undefined;
        background?: string | undefined;
        backgroundRepeat?: "repeat-x" | "repeat-y" | "repeat" | "space" | "round" | "no-repeat" | undefined;
        backgroundSize?: string | undefined;
        backgroundPosition?: "string" | "center" | "top" | "bottom" | "left" | "right" | undefined;
        backgroundClip?: "border-box" | "padding-box" | "content-box" | "initial" | "inherit" | undefined;
        backgroundImageUrl?: string | undefined;
        filter?: string | number | undefined;
        shadow?: {
            x?: number | undefined;
            y?: number | undefined;
            blur?: number | undefined;
            color?: string | undefined;
        } | undefined;
        zIndex?: number | undefined;
        transitionTime?: number | undefined;
        cursor?: "default" | "grab" | "pointer" | "zoom" | undefined;
        opacity?: number | undefined;
        userSelect?: "auto" | "none" | "contain" | "text" | "all" | undefined;
        scale?: string | number | undefined;
    } & {
        border?: {
            solid: number;
            position?: "top" | "bottom" | "left" | "right" | "all" | undefined;
            color: string;
            shape?: "solid" | "dotted" | "dashed" | "double" | "outset" | "inset" | "groove" | "ridge" | undefined;
        } | undefined;
        borderRadius?: string | number | undefined;
    } & {
        padding?: {
            all?: string | number | undefined;
            horizontal?: string | number | undefined;
            vertical?: string | number | undefined;
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
        margin?: {
            all?: string | number | undefined;
            horizontal?: string | number | undefined;
            vertical?: string | number | undefined;
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
    } & {
        scroll?: {
            x?: "auto" | "visible" | "scroll" | "hidden" | undefined;
            y?: "auto" | "visible" | "scroll" | "hidden" | undefined;
            type?: "auto" | "visible" | "scroll" | "hidden" | undefined;
            bar?: boolean | undefined;
        } | undefined;
    }) | undefined;
    active?: ({
        display?: "none" | "flex" | undefined;
        direction?: "row" | "column" | undefined;
        flex?: string | number | undefined;
        reverse?: boolean | undefined;
        align?: "start" | "end" | "center" | "stretch" | "baseline" | undefined;
        crossAlign?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
        alignContent?: "start" | "end" | "center" | "stretch" | "space-between" | "space-around" | "space-evenly" | undefined;
        alignSelf?: "auto" | "start" | "end" | "center" | "stretch" | "baseline" | undefined;
        flow?: string | undefined;
        wrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        basis?: string | number | undefined;
        grow?: number | undefined;
        shrink?: number | undefined;
        gap?: number | undefined;
        crossGap?: number | undefined;
        order?: number | undefined;
    } & {
        positionType?: "static" | "relative" | "fixed" | "absolute" | "sticky" | undefined;
        position?: {
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
        axis?: {
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
    } & {
        width?: string | undefined;
        minWidth?: string | number | undefined;
        maxWidth?: string | number | undefined;
        height?: string | undefined;
        minHeight?: string | number | undefined;
        maxHeight?: string | number | undefined;
    } & {
        txtColor?: string | undefined;
        txtSize?: string | number | undefined;
        txtWeight?: "lighter" | "normal" | "medium" | "bold" | undefined;
        lineHeight?: string | number | undefined;
        txtAlign?: "start" | "end" | "center" | undefined;
        whiteSpace?: "nowrap" | "normal" | "pre" | "pre-wrap" | "pre-line" | undefined;
        txtTransform?: "none" | "initial" | "inherit" | "capitalize" | "uppercase" | "lowercase" | undefined;
        ellipsis?: {
            ellipsis?: boolean | undefined;
            line?: number | undefined;
            width?: number | undefined;
        } | undefined;
        txtDecoration?: string | undefined;
    } & {
        backgroundColor?: string | undefined;
        background?: string | undefined;
        backgroundRepeat?: "repeat-x" | "repeat-y" | "repeat" | "space" | "round" | "no-repeat" | undefined;
        backgroundSize?: string | undefined;
        backgroundPosition?: "string" | "center" | "top" | "bottom" | "left" | "right" | undefined;
        backgroundClip?: "border-box" | "padding-box" | "content-box" | "initial" | "inherit" | undefined;
        backgroundImageUrl?: string | undefined;
        filter?: string | number | undefined;
        shadow?: {
            x?: number | undefined;
            y?: number | undefined;
            blur?: number | undefined;
            color?: string | undefined;
        } | undefined;
        zIndex?: number | undefined;
        transitionTime?: number | undefined;
        cursor?: "default" | "grab" | "pointer" | "zoom" | undefined;
        opacity?: number | undefined;
        userSelect?: "auto" | "none" | "contain" | "text" | "all" | undefined;
        scale?: string | number | undefined;
    } & {
        border?: {
            solid: number;
            position?: "top" | "bottom" | "left" | "right" | "all" | undefined;
            color: string;
            shape?: "solid" | "dotted" | "dashed" | "double" | "outset" | "inset" | "groove" | "ridge" | undefined;
        } | undefined;
        borderRadius?: string | number | undefined;
    } & {
        padding?: {
            all?: string | number | undefined;
            horizontal?: string | number | undefined;
            vertical?: string | number | undefined;
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
        margin?: {
            all?: string | number | undefined;
            horizontal?: string | number | undefined;
            vertical?: string | number | undefined;
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
    } & {
        scroll?: {
            x?: "auto" | "visible" | "scroll" | "hidden" | undefined;
            y?: "auto" | "visible" | "scroll" | "hidden" | undefined;
            type?: "auto" | "visible" | "scroll" | "hidden" | undefined;
            bar?: boolean | undefined;
        } | undefined;
    }) | undefined;
    disabled?: ({
        display?: "none" | "flex" | undefined;
        direction?: "row" | "column" | undefined;
        flex?: string | number | undefined;
        reverse?: boolean | undefined;
        align?: "start" | "end" | "center" | "stretch" | "baseline" | undefined;
        crossAlign?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
        alignContent?: "start" | "end" | "center" | "stretch" | "space-between" | "space-around" | "space-evenly" | undefined;
        alignSelf?: "auto" | "start" | "end" | "center" | "stretch" | "baseline" | undefined;
        flow?: string | undefined;
        wrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        basis?: string | number | undefined;
        grow?: number | undefined;
        shrink?: number | undefined;
        gap?: number | undefined;
        crossGap?: number | undefined;
        order?: number | undefined;
    } & {
        positionType?: "static" | "relative" | "fixed" | "absolute" | "sticky" | undefined;
        position?: {
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
        axis?: {
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
    } & {
        width?: string | undefined;
        minWidth?: string | number | undefined;
        maxWidth?: string | number | undefined;
        height?: string | undefined;
        minHeight?: string | number | undefined;
        maxHeight?: string | number | undefined;
    } & {
        txtColor?: string | undefined;
        txtSize?: string | number | undefined;
        txtWeight?: "lighter" | "normal" | "medium" | "bold" | undefined;
        lineHeight?: string | number | undefined;
        txtAlign?: "start" | "end" | "center" | undefined;
        whiteSpace?: "nowrap" | "normal" | "pre" | "pre-wrap" | "pre-line" | undefined;
        txtTransform?: "none" | "initial" | "inherit" | "capitalize" | "uppercase" | "lowercase" | undefined;
        ellipsis?: {
            ellipsis?: boolean | undefined;
            line?: number | undefined;
            width?: number | undefined;
        } | undefined;
        txtDecoration?: string | undefined;
    } & {
        backgroundColor?: string | undefined;
        background?: string | undefined;
        backgroundRepeat?: "repeat-x" | "repeat-y" | "repeat" | "space" | "round" | "no-repeat" | undefined;
        backgroundSize?: string | undefined;
        backgroundPosition?: "string" | "center" | "top" | "bottom" | "left" | "right" | undefined;
        backgroundClip?: "border-box" | "padding-box" | "content-box" | "initial" | "inherit" | undefined;
        backgroundImageUrl?: string | undefined;
        filter?: string | number | undefined;
        shadow?: {
            x?: number | undefined;
            y?: number | undefined;
            blur?: number | undefined;
            color?: string | undefined;
        } | undefined;
        zIndex?: number | undefined;
        transitionTime?: number | undefined;
        cursor?: "default" | "grab" | "pointer" | "zoom" | undefined;
        opacity?: number | undefined;
        userSelect?: "auto" | "none" | "contain" | "text" | "all" | undefined;
        scale?: string | number | undefined;
    } & {
        border?: {
            solid: number;
            position?: "top" | "bottom" | "left" | "right" | "all" | undefined;
            color: string;
            shape?: "solid" | "dotted" | "dashed" | "double" | "outset" | "inset" | "groove" | "ridge" | undefined;
        } | undefined;
        borderRadius?: string | number | undefined;
    } & {
        padding?: {
            all?: string | number | undefined;
            horizontal?: string | number | undefined;
            vertical?: string | number | undefined;
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
        margin?: {
            all?: string | number | undefined;
            horizontal?: string | number | undefined;
            vertical?: string | number | undefined;
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
    } & {
        scroll?: {
            x?: "auto" | "visible" | "scroll" | "hidden" | undefined;
            y?: "auto" | "visible" | "scroll" | "hidden" | undefined;
            type?: "auto" | "visible" | "scroll" | "hidden" | undefined;
            bar?: boolean | undefined;
        } | undefined;
    }) | undefined;
    focus?: ({
        display?: "none" | "flex" | undefined;
        direction?: "row" | "column" | undefined;
        flex?: string | number | undefined;
        reverse?: boolean | undefined;
        align?: "start" | "end" | "center" | "stretch" | "baseline" | undefined;
        crossAlign?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
        alignContent?: "start" | "end" | "center" | "stretch" | "space-between" | "space-around" | "space-evenly" | undefined;
        alignSelf?: "auto" | "start" | "end" | "center" | "stretch" | "baseline" | undefined;
        flow?: string | undefined;
        wrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        basis?: string | number | undefined;
        grow?: number | undefined;
        shrink?: number | undefined;
        gap?: number | undefined;
        crossGap?: number | undefined;
        order?: number | undefined;
    } & {
        positionType?: "static" | "relative" | "fixed" | "absolute" | "sticky" | undefined;
        position?: {
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
        axis?: {
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
    } & {
        width?: string | undefined;
        minWidth?: string | number | undefined;
        maxWidth?: string | number | undefined;
        height?: string | undefined;
        minHeight?: string | number | undefined;
        maxHeight?: string | number | undefined;
    } & {
        txtColor?: string | undefined;
        txtSize?: string | number | undefined;
        txtWeight?: "lighter" | "normal" | "medium" | "bold" | undefined;
        lineHeight?: string | number | undefined;
        txtAlign?: "start" | "end" | "center" | undefined;
        whiteSpace?: "nowrap" | "normal" | "pre" | "pre-wrap" | "pre-line" | undefined;
        txtTransform?: "none" | "initial" | "inherit" | "capitalize" | "uppercase" | "lowercase" | undefined;
        ellipsis?: {
            ellipsis?: boolean | undefined;
            line?: number | undefined;
            width?: number | undefined;
        } | undefined;
        txtDecoration?: string | undefined;
    } & {
        backgroundColor?: string | undefined;
        background?: string | undefined;
        backgroundRepeat?: "repeat-x" | "repeat-y" | "repeat" | "space" | "round" | "no-repeat" | undefined;
        backgroundSize?: string | undefined;
        backgroundPosition?: "string" | "center" | "top" | "bottom" | "left" | "right" | undefined;
        backgroundClip?: "border-box" | "padding-box" | "content-box" | "initial" | "inherit" | undefined;
        backgroundImageUrl?: string | undefined;
        filter?: string | number | undefined;
        shadow?: {
            x?: number | undefined;
            y?: number | undefined;
            blur?: number | undefined;
            color?: string | undefined;
        } | undefined;
        zIndex?: number | undefined;
        transitionTime?: number | undefined;
        cursor?: "default" | "grab" | "pointer" | "zoom" | undefined;
        opacity?: number | undefined;
        userSelect?: "auto" | "none" | "contain" | "text" | "all" | undefined;
        scale?: string | number | undefined;
    } & {
        border?: {
            solid: number;
            position?: "top" | "bottom" | "left" | "right" | "all" | undefined;
            color: string;
            shape?: "solid" | "dotted" | "dashed" | "double" | "outset" | "inset" | "groove" | "ridge" | undefined;
        } | undefined;
        borderRadius?: string | number | undefined;
    } & {
        padding?: {
            all?: string | number | undefined;
            horizontal?: string | number | undefined;
            vertical?: string | number | undefined;
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
        margin?: {
            all?: string | number | undefined;
            horizontal?: string | number | undefined;
            vertical?: string | number | undefined;
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
    } & {
        scroll?: {
            x?: "auto" | "visible" | "scroll" | "hidden" | undefined;
            y?: "auto" | "visible" | "scroll" | "hidden" | undefined;
            type?: "auto" | "visible" | "scroll" | "hidden" | undefined;
            bar?: boolean | undefined;
        } | undefined;
    }) | undefined;
} & import("../types/tab").TabMediaQueryType & React.RefAttributes<HTMLButtonElement>>;
export {};
