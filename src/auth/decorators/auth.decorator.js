"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
var jwt_guard_1 = require("../guards/jwt.guard");
var common_1 = require("@nestjs/common");
var Auth = function () { return (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard); };
exports.Auth = Auth;
