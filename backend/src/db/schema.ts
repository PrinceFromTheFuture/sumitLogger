import { InferSelectModel } from "drizzle-orm";
import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const meetings = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text().notNull(),
  distanceFromHome: integer().notNull(), //in meters
  startTime: timestamp({ withTimezone: true }).notNull(),
  endTime: timestamp({ withTimezone: true }).notNull(),
  expectedPayment: integer().notNull(), //in agorot
  adress: text().notNull(),
  notes: text(),
});

export type Meeting = InferSelectModel<typeof meetings>;
