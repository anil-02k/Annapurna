"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (cause, details, req, res) => {
    return res.status(400).json({
        message: cause,
        details,
        sentParameters: req.body,
    });
};
exports.handleError = handleError;
