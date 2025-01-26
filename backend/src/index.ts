import express from "express";
import { db } from "./db/db";
import { meetings } from "./db/schema";
import cors from "cors";
import dayjs from "dayjs";

const app = express();
app.use(cors());

app.listen(3000, () => {
  console.log("app is running op port 3000");
});

const data = [
  {
    distanceFromHome: 1000,
    endTime: dayjs().add(3, "hours").toDate(),
    expectedPayment: 3000,
    name: "random name for the begging",
    notes: "fdsfsdf",
    startTime: dayjs().add(10, "hours").toDate(),
    adress: "monuement point aprtment 3v",
  },

  {
    distanceFromHome: 1000,
    endTime: dayjs().add(3, "hours").toDate(),
    expectedPayment: 3000,
    name: "fds",
    notes: "fdsfgfsdsdf",
    startTime: dayjs().toDate(),
    adress: "monuement point aprtment 3v",
  },
  {
    distanceFromHome: 1000,
    endTime: dayjs().add(3, "hours").toDate(),
    expectedPayment: 3000,
    name: "fdsfsd",
    notes: "fdsfsdf",
    startTime: dayjs().toDate(),
    adress: "monuement point aprtment 3v",
  },
];

app.get("/meetings", async (req, res) => {
  const allMeetings = await db.select().from(meetings);
  res.json(allMeetings);
});
