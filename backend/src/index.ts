import express from "express";
import { db } from "./db/db";
import { meetings } from "./db/schema";
import cors from "cors";
import dayjs from "dayjs";

interface Body {
  meetingDate: Date;
  startTime: string;
  endTime: string;
  address: string;
  distance: number;
  additional: string;
}

const MeetingMinumumLengthPayment = 3;
const hourlyRateInAgorot = 5000;
const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("app is running op port 3000");
});

app.get("/meetings", async (req, res) => {
  const allMeetings = await db.select().from(meetings);
  res.json(allMeetings);
});

app.post("/meetings", async (req, res) => {
  console.log(req.body);
  const { additional, address, distance, endTime, meetingDate, startTime } = req.body as Body;
  const endTimeDateFormat = dayjs(meetingDate)
    .set("hours", Number(endTime.split(":")[0]))
    .set("minutes", Number(endTime.split(":")[1]))
    .toDate();
  const startTimeDateFormat = dayjs(meetingDate)
    .set("hours", Number(startTime.split(":")[0]))
    .set("minutes", Number(startTime.split(":")[1]))
    .toDate();

  const calculatePayment = () => {
    let expectedPayment = 0;

    const meetingLength = dayjs(endTimeDateFormat).diff(dayjs(startTimeDateFormat), "hours");
    const additionalOneHourAheadAndAfter = 1;

    expectedPayment += additionalOneHourAheadAndAfter;

    if (meetingLength < MeetingMinumumLengthPayment) {
      expectedPayment += MeetingMinumumLengthPayment;
    } else {
      expectedPayment += meetingLength;
    }
    expectedPayment *= hourlyRateInAgorot;
    console.log(expectedPayment);
    return expectedPayment;
  };

  try {
    await db.insert(meetings).values({
      adress: address,
      distanceFromHome: distance,
      endTime: endTimeDateFormat,
      startTime: startTimeDateFormat,
      name: additional,
      expectedPayment: calculatePayment(),
    });
  } catch (e) {
    console.log(e);
  }
});
