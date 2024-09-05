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
Object.defineProperty(exports, "__esModule", { value: true });
exports.extandedMediaQuery = void 0;
var tab_1 = require("./tab");
var ViewThemes = function (props) { return (0, tab_1.TabTheme)(props); };
var extandedMediaQuery = function (_a) {
    var _b;
    var _c, _d, _e, _f, _g, _h;
    var _mediaQuery = _a._mediaQuery;
    var mq_theme = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (_mediaQuery) {
            return {
                s1440: __assign(__assign({}, ViewThemes(_mediaQuery.s1440 || {})), { "&:hover": ViewThemes(((_a = _mediaQuery.s1440) === null || _a === void 0 ? void 0 : _a._hover) || {}), "&:active": ViewThemes(((_b = _mediaQuery.s1440) === null || _b === void 0 ? void 0 : _b._active) || {}) }),
                s1280: __assign(__assign({}, ViewThemes(_mediaQuery.s1280 || {})), { "&:hover": ViewThemes(((_c = _mediaQuery.s1280) === null || _c === void 0 ? void 0 : _c._hover) || {}), "&:active": ViewThemes(((_d = _mediaQuery.s1280) === null || _d === void 0 ? void 0 : _d._active) || {}) }),
                s1080: __assign(__assign({}, ViewThemes(_mediaQuery.s1080 || {})), { "&:hover": ViewThemes(((_e = _mediaQuery.s1080) === null || _e === void 0 ? void 0 : _e._hover) || {}), "&:active": ViewThemes(((_f = _mediaQuery.s1080) === null || _f === void 0 ? void 0 : _f._active) || {}) }),
                s768: __assign(__assign({}, ViewThemes(_mediaQuery.s768 || {})), { "&:hover": ViewThemes(((_g = _mediaQuery.s768) === null || _g === void 0 ? void 0 : _g._hover) || {}), "&:active": ViewThemes(((_h = _mediaQuery.s768) === null || _h === void 0 ? void 0 : _h._active) || {}) }),
                s600: __assign(__assign({}, ViewThemes(_mediaQuery.s600 || {})), { "&:hover": ViewThemes(((_j = _mediaQuery.s600) === null || _j === void 0 ? void 0 : _j._hover) || {}), "&:active": ViewThemes(((_k = _mediaQuery.s600) === null || _k === void 0 ? void 0 : _k._active) || {}) }),
                s428: __assign(__assign({}, ViewThemes(_mediaQuery.s428 || {})), { "&:hover": ViewThemes(((_l = _mediaQuery.s428) === null || _l === void 0 ? void 0 : _l._hover) || {}), "&:active": ViewThemes(((_m = _mediaQuery.s428) === null || _m === void 0 ? void 0 : _m._active) || {}) }),
            };
        }
    };
    var screenSize = [1440, 1280, 1080, 768, 600, 428];
    var MQ = screenSize.map(function (bp) { return "@media (max-width: ".concat(bp, "px)"); });
    return _b = {},
        _b[MQ[0]] = __assign({}, (_c = mq_theme()) === null || _c === void 0 ? void 0 : _c.s1440),
        _b[MQ[1]] = __assign({}, (_d = mq_theme()) === null || _d === void 0 ? void 0 : _d.s1280),
        _b[MQ[2]] = __assign({}, (_e = mq_theme()) === null || _e === void 0 ? void 0 : _e.s1080),
        _b[MQ[3]] = __assign({}, (_f = mq_theme()) === null || _f === void 0 ? void 0 : _f.s768),
        _b[MQ[4]] = __assign({}, (_g = mq_theme()) === null || _g === void 0 ? void 0 : _g.s600),
        _b[MQ[5]] = __assign({}, (_h = mq_theme()) === null || _h === void 0 ? void 0 : _h.s428),
        _b;
};
exports.extandedMediaQuery = extandedMediaQuery;
