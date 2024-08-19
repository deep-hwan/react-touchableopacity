"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var react_1 = require("react");
var tab_1 = require("../themes/tab");
var mediaQuery_1 = require("../themes/mediaQuery");
var extandedProps_1 = require("../utils/extandedProps");
//
exports.Button = (0, react_1.forwardRef)(function (props, ref) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var _m = props.as, as = _m === void 0 ? "l" : _m, disabled = props.disabled, button_disabled = props.button_disabled, restProps = __rest(props, ["as", "disabled", "button_disabled"]);
    var elementProps = (0, extandedProps_1.extandedProps)(restProps).elementProps;
    var TAB_SIZE = {
        s: {
            minHeight: "auto",
            fontSize: "".concat(12 / 16, "rem"),
            borderRadius: 12,
        },
        m: {
            minHeight: "auto",
            fontSize: "".concat(14 / 16, "rem"),
            borderRadius: 14,
        },
        l: {
            minHeight: 56,
            fontSize: "".concat(15 / 16, "rem"),
            borderRadius: 18,
        },
    };
    var mq_styles = (0, mediaQuery_1.extandedMediaQuery)({ mediaQuery: props.mediaQuery });
    var tab_theme = (0, tab_1.TabTheme)(__assign(__assign({}, props), { display: (_a = props.display) !== null && _a !== void 0 ? _a : "flex", direction: (_b = props.direction) !== null && _b !== void 0 ? _b : "row", align: (_c = props.align) !== null && _c !== void 0 ? _c : "center", crossAlign: (_d = props.crossAlign) !== null && _d !== void 0 ? _d : "center", minHeight: (_e = restProps.minHeight) !== null && _e !== void 0 ? _e : TAB_SIZE[as].minHeight, txtColor: (_f = restProps.txtColor) !== null && _f !== void 0 ? _f : "#fff", padding: (as === "s" && { vertical: 11, horizontal: 16 }) ||
            (as === "m" && { vertical: 13, horizontal: 18 }) ||
            (as === "l" && { vertical: 15, horizontal: 20 }) ||
            restProps.padding, border: (_g = props.border) !== null && _g !== void 0 ? _g : { solid: 1, color: "transparent" }, borderRadius: (_h = restProps.borderRadius) !== null && _h !== void 0 ? _h : TAB_SIZE[as].borderRadius, backgroundColor: (_j = restProps === null || restProps === void 0 ? void 0 : restProps.backgroundColor) !== null && _j !== void 0 ? _j : "#5b94f0", cursor: "pointer", transitionTime: (_k = props.transitionTime) !== null && _k !== void 0 ? _k : 0.3 }));
    var globel_theme = __assign(__assign(__assign({}, tab_theme), mq_styles), { "&:hover": (0, tab_1.TabTheme)(__assign(__assign({}, props.hover), { filter: "saturate(88%)", shadow: { x: 0, y: 0, blur: 0 } })), "&:active": (0, tab_1.TabTheme)(__assign(__assign({}, props.active), { opacity: 0.8, shadow: { x: 0, y: 0, blur: 0 } })), "&:disabled": (0, tab_1.TabTheme)(__assign(__assign({}, props.disabled), { backgroundColor: "#ccc", txtColor: "#fff" })) });
    return ((0, jsx_runtime_1.jsx)("button", __assign({ className: "button", ref: ref, type: (_l = restProps.type) !== null && _l !== void 0 ? _l : "button", disabled: button_disabled, css: globel_theme }, elementProps, { children: props.children })));
});
