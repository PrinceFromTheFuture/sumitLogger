"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meetings = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
exports.meetings = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    name: (0, pg_core_1.text)().notNull(),
    distanceFromHome: (0, pg_core_1.integer)().notNull(), //in meters
    startTime: (0, pg_core_1.timestamp)({ withTimezone: true }).notNull(),
    endTime: (0, pg_core_1.timestamp)({ withTimezone: true }).notNull(),
    expectedPayment: (0, pg_core_1.integer)().notNull(), //in agorot
    adress: (0, pg_core_1.text)().notNull(),
    notes: (0, pg_core_1.text)(),
});
