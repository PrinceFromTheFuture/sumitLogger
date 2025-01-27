import { useRef, useState } from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./components/ui/drawer";
import dayjs from "dayjs";
import { Calendar, Clock } from "lucide-react";
import { Input } from "./components/ui/input";
import axios from "axios";

const baseApiUri = import.meta.env.VITE_BASE_API_URI as string;

function NewMeeting() {
  const [meetingDate, setMeetingDate] = useState<Date | null>(dayjs().toDate());
  const [startTime, setStartTime] = useState<string>();
  //@ts-ignore
  const [endTime, setEndTime] = useState<string>();
  //@ts-ignore

  const [address, setAdress] = useState();
  //@ts-ignore

  const [distance, setDistance] = useState();
  //@ts-ignore

  const [additional, setAditional] = useState();

  const datePicketRef = useRef<HTMLInputElement>(null);
  const startTimePicketRef = useRef<HTMLInputElement>(null);
  const endTimePicketRef = useRef<HTMLInputElement>(null);

  const onsubmit = async () => {
    await axios.post(`${baseApiUri}/meetings`, {
      meetingDate,
      startTime,
      endTime,
      address,
      distance,
      additional,
    });
    window.location.reload();
  };
  return (
    <Drawer>
      <DrawerTrigger className=" text-lightblue shadow-lg rounded-md p-2 w-full  text-center mx-4 font-semibold text-xl bg-darkblue">
        Report New
      </DrawerTrigger>
      <DrawerContent className=" ">
        <div className=" p-4 w-full">
          <div className=" text-xl font-bold text-darkblue mb-6">Record New Meeting</div>
          <input
            type="date"
            className=" absolute invisible pointer-events-none "
            onChange={(e) => setMeetingDate(e.target.value as unknown as Date)}
            ref={datePicketRef}
          />
          <div
            onClick={() => {
              if (datePicketRef.current) {
                datePicketRef.current.click();
              }
            }}
            className=" flex items-center gap-2 justify-start  border-lightblue border-2  w-full  rounded-md p-2"
          >
            <Calendar size={21} />
            <div className=" text-sm ">
              <div className="   ">Date</div>
              <div className="  text-darkblue font-semibold">
                {dayjs(meetingDate).format("dddd, DD MMMM")}
              </div>
            </div>
          </div>
          <div className=" w-full gap-4 flex justify-between items-center mt-4">
            <input
              type="time"
              className=" absolute invisible pointer-events-none "
              onChange={(e) => {
                setStartTime(e.target.value as unknown as string);
              }}
              ref={startTimePicketRef}
            />
            <div
              onClick={() => {
                if (datePicketRef.current) {
                  datePicketRef.current.click();
                }
              }}
              className=" flex items-center gap-2 justify-start  border-lightblue border-2  w-full  rounded-md p-2"
            >
              <Clock size={21} />
              <div className=" text-sm ">
                <div className="   ">Start</div>
                <div className="  text-darkblue font-semibold">{dayjs(meetingDate).format("HH:mm")}</div>
              </div>
            </div>
            <input
              type="time"
              className=" absolute invisible pointer-events-none "
              onChange={(e) => setEndTime(e.target.value as unknown as string)}
              ref={endTimePicketRef}
            />
            <div
              onClick={() => {
                if (datePicketRef.current) {
                  datePicketRef.current.click();
                }
              }}
              className=" flex items-center gap-2 justify-start  border-lightblue border-2  w-full  rounded-md p-2"
            >
              <Clock size={21} />
              <div className=" text-sm ">
                <div className="   ">End</div>
                <div className="  text-darkblue font-semibold">{dayjs(meetingDate).format("HH:mm")}</div>
              </div>
            </div>
          </div>
          <div className=" mt-4 text-sm">
            Address
            <Input />
          </div>
          <div className=" mt-4 text-sm">
            Distance from home (in meters)
            <Input />
          </div>
          <div className=" mt-4 text-sm">
            Additional info
            <Input />
          </div>
          <DrawerClose
            onClick={() => onsubmit()}
            className=" w-full rounded-lg mt-6 bg-darkblue py-2 text-sm font-semibold text-lightblue"
          >
            Save
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default NewMeeting;
