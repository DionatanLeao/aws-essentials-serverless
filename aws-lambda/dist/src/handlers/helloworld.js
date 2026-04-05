"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event, _) => {
    console.log(event);
    return "Hello World";
};
exports.handler = handler;
