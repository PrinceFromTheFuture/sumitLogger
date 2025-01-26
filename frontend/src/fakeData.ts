import { Meeting } from "@db/db/schema";
import dayjs from "dayjs";
export const data: Meeting[] = [
  {
    distanceFromHome: 1000,
    endTime: dayjs().add(3, "hours").toDate(),
    expectedPayment: 3000,
    id: 1,
    name: "fds",
    notes: "fdsfsdf",
    startTime: dayjs().toDate(),
  },

  {
    distanceFromHome: 1000,
    endTime: dayjs().add(3, "hours").toDate(),
    expectedPayment: 3000,
    id: 3,
    name: "fds",
    notes: "fdsfgfsdsdf",
    startTime: dayjs().toDate(),
  },
  {
    distanceFromHome: 1000,
    endTime: dayjs().add(3, "hours").toDate(),
    expectedPayment: 3000,
    id: 2,
    name: "fdsfsd",
    notes: "fdsfsdf",
    startTime: dayjs().toDate(),
  },
];
