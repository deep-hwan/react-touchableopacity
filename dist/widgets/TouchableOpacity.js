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
exports.TouchableOpacity = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var extandedProps_1 = require("../utils/extandedProps");
var mediaQuery_1 = require("../themes/mediaQuery");
var tab_1 = require("../themes/tab");
//
function TouchableOpacity(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    var _t = _a.as, as = _t === void 0 ? "div" : _t, txtSize = _a.txtSize, onClick = _a.onClick, props = __rest(_a, ["as", "txtSize", "onClick"]);
    var elementProps = (0, extandedProps_1.extandedProps)(props).elementProps;
    var mq_styles = (0, mediaQuery_1.extandedMediaQuery)({ mediaQuery: props.mediaQuery });
    var TYPOGRAPH_WEIGHT = {
        lighter: { fontWeight: "300" },
        normal: { fontWeight: 400 },
        medium: { fontWeight: "500" },
        bold: { fontWeight: "600" },
    };
    var txt_ellipsis_extend = {
        maxWidth: (_c = (_b = props === null || props === void 0 ? void 0 : props.ellipsis) === null || _b === void 0 ? void 0 : _b.width) !== null && _c !== void 0 ? _c : props.maxWidth,
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: (_d = props === null || props === void 0 ? void 0 : props.ellipsis) === null || _d === void 0 ? void 0 : _d.line,
    };
    var tab_theme = (0, tab_1.TabTheme)(__assign(__assign(__assign({}, props), { width: (_e = props.width) !== null && _e !== void 0 ? _e : "auto", positionType: (_f = props.positionType) !== null && _f !== void 0 ? _f : "relative", display: (_g = props.display) !== null && _g !== void 0 ? _g : "flex", direction: (_h = props.direction) !== null && _h !== void 0 ? _h : "row", align: (_j = props.align) !== null && _j !== void 0 ? _j : "center", crossAlign: (_k = props.crossAlign) !== null && _k !== void 0 ? _k : "center", txtSize: typeof txtSize === "string" ? txtSize : (txtSize !== null && txtSize !== void 0 ? txtSize : 14) / 16 + "rem", txtColor: (_l = props.txtColor) !== null && _l !== void 0 ? _l : "#5b94f0", txtWeight: TYPOGRAPH_WEIGHT[(_m = props.txtWeight) !== null && _m !== void 0 ? _m : "normal"].fontWeight, txtAlign: (_o = props.txtAlign) !== null && _o !== void 0 ? _o : "center", whiteSpace: ((_p = props === null || props === void 0 ? void 0 : props.ellipsis) === null || _p === void 0 ? void 0 : _p.ellipsis)
            ? "normal"
            : (_q = props.whiteSpace) !== null && _q !== void 0 ? _q : "nowrap", userSelect: props.userSelect ? props.userSelect : "none", cursor: props.cursor ? props.cursor : onClick && "pointer", transitionTime: (_r = props.transitionTime) !== null && _r !== void 0 ? _r : 0.3 }), (((_s = props.ellipsis) === null || _s === void 0 ? void 0 : _s.ellipsis) && txt_ellipsis_extend)));
    var globel_theme = __assign(__assign(__assign({}, tab_theme), mq_styles), { "&:hover": (0, tab_1.TabTheme)(__assign({}, props.hover)), "&:active": (0, tab_1.TabTheme)(__assign({}, props.active)), "&:disabled": (0, tab_1.TabTheme)(__assign({}, props.disabled)) });
    var Button = function () { return ((0, jsx_runtime_1.jsx)("button", __assign({ className: "TouchableOpacity", disabled: props.button_disabled, css: globel_theme, onClick: onClick }, elementProps, { children: props.children }))); };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: typeof props.button_disabled === "boolean" ? ((0, jsx_runtime_1.jsx)(Button, {})) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [as === "div" && ((0, jsx_runtime_1.jsx)("div", __assign({ className: "TouchableOpacity", css: globel_theme }, elementProps, { onClick: onClick }, { children: props.children }))), as === "li" && ((0, jsx_runtime_1.jsx)("li", __assign({ className: "TouchableOpacity", css: globel_theme }, elementProps, { onClick: onClick }, { children: props.children }))), as === "span" && ((0, jsx_runtime_1.jsx)("span", __assign({ className: "TouchableOpacity", css: globel_theme }, elementProps, { onClick: onClick }, { children: props.children }))), as === "button" && (0, jsx_runtime_1.jsx)(Button, {})] })) }));
}
exports.TouchableOpacity = TouchableOpacity;
