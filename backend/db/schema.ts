import { InferSelectModel } from "drizzle-orm";
import { integer, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const meetings = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  distanceFromHome: integer().notNull(), //in meters
  startTime: timestamp({ withTimezone: true }).notNull(),
  endTime: timestamp({ withTimezone: true }).notNull(),
  expectedPayment: integer().notNull(), //in agorot
  notes: text(),
});

export type Meeting = InferSelectModel<typeof meetings>;
