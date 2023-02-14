"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var miniprogram_formdata_1 = require("miniprogram-formdata");
var miniprogram_blob_1 = require("miniprogram-blob");
if (typeof globalThis === 'undefined') {
    Object.defineProperty(Object.prototype, 'globalThis', {
        get: function () {
            return this;
        }
    });
}
function polyfill() {
    if (typeof FormData === 'undefined') {
        // @ts-ignore
        Object.defineProperties(globalThis, { FormData: miniprogram_formdata_1.default });
    }
    if (typeof Blob === 'undefined') {
        // @ts-ignore
        Object.defineProperties(globalThis, { Blob: miniprogram_blob_1.default });
    }
}
polyfill();
exports.default = polyfill;
//# sourceMappingURL=polyfill.js.map