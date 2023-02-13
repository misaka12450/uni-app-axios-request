"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var axios_adapter_uniapp_1 = require("axios-adapter-uniapp");
axios_1.default.defaults.adapter = axios_adapter_uniapp_1.default;
exports.default = axios_1.default;
//# sourceMappingURL=index.js.map