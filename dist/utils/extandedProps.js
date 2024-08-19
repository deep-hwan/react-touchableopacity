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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extandedProps = void 0;
var extandedProps = function (props) {
    var styleProps = {};
    var elementProps = __assign({}, props);
    var stylePropKeys = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], layoutKeys, true), layerKeys, true), flexKeys, true), typoKeys, true), positionKeys, true), spaceKeys, true), borderKeys, true), scollKeys, true), mediaQueryKeys, true), hoverActiveKeys, true);
    Object.keys(props).forEach(function (key) {
        if (stylePropKeys.includes(key)) {
            styleProps[key] = props[key];
            delete elementProps[key];
        }
    });
    return { elementProps: elementProps };
};
exports.extandedProps = extandedProps;
var layoutKeys = ['width', 'minWidth', 'maxWidth', 'height', 'minHeight', 'maxHeight'];
var flexKeys = [
    'display',
    'flex',
    'direction',
    'reverse',
    'align',
    'crossAlign',
    'alignContent',
    'alignSelf',
    'wrap',
    'flow',
    'basis',
    'grow',
    'shrink',
    'gap',
    'crossGap',
    'order',
];
var positionKeys = ['position', 'axis', 'transform'];
var layerKeys = [
    'backgroundColor',
    'background',
    'backgroundRepeat',
    'backgroundSize',
    'backgroundPosition',
    'backgroundClip',
    'backgroundImageUrl',
    'filter',
    'shadow',
    'zIndex',
    'cursor',
    'userSelect',
    'transitionTime',
    'opacity',
];
var borderKeys = ['border', 'borderRadius'];
var spaceKeys = ['padding', 'margin'];
var scollKeys = ['scroll'];
var hoverActiveKeys = ['active', 'focus', 'hover', 'disabled'];
var typoKeys = [
    'txtColor',
    'color',
    'txtSize',
    'size',
    'align',
    'txtAlign',
    'txtWeight',
    'whiteSpace',
    'txtTransform',
    'ellipsis',
    'txtDecoration',
];
var mediaQueryKeys = ['mediaQuery'];
