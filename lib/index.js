"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var polyfill_1 = require("./polyfill");
var axios_1 = require("axios");
var axios_adapter_uniapp_1 = require("axios-adapter-uniapp");
(0, polyfill_1.default)();
axios_1.default.defaults.adapter = axios_adapter_uniapp_1.default;
exports.default = axios_1.default;
//# sourceMappingURL=index.js.map