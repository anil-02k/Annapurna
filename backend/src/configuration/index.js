"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USE_API = exports.WEATHER_API_KEY = exports.AMBEE_API_KEY = exports.PORT = void 0;
exports.PORT = process.env.PORT || '3002';
exports.AMBEE_API_KEY = process.env.AMBEE_API_KEY || '30fdcabfaf877fa7f7628b581b09012a059e6481d51d8c9a56ffa4fd2608550a';
exports.WEATHER_API_KEY = process.env.WEATHER_API_KEY || '061aa26d58c642c4b43fdb72b2d0e7b8';
;
exports.USE_API = process.env.USE_API === 'true' || false;
