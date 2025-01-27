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
  const [endTime, setEndTime] = useState<string>();
  const [address, setAdress] = useState<string>();
  const [distance, setDistance] = useState<number>();
  const [additional, setAditional] = useState<string>();

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
            className="  items-center gap-2 justify-start  border-lightblue  p-2 flex w-full rounded-md border border-input bg-transparent px-3  text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          >
            <Calendar size={21} />
            <div className=" text-sm  ">
              <div className="   ">Date</div>
              <div className="  text-darkblue font-semibold">{dayjs(meetingDate).format("dddd, DD MMMM")}</div>
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
              className="  items-center gap-2 justify-start  border-lightblue  p-2 flex w-full rounded-md border border-input bg-transparent px-3  text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
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
              className="  items-center gap-2 justify-start  border-lightblue  p-2 flex w-full rounded-md border border-input bg-transparent px-3  text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
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
            <Input value={address} onChange={(e) => setAdress(e.target.value)} />
          </div>
          <div className=" mt-4 text-sm">
            Distance from home (in meters)
            <Input type="number" value={distance} onChange={(e) => setDistance(Number(e.target.value))} />
          </div>
          <div className=" mt-4 text-sm">
            Additional info
            <Input value={additional} onChange={(e) => setAditional(e.target.value)} />
          </div>
          <DrawerClose onClick={() => onsubmit()} className=" w-full rounded-lg mt-6 bg-darkblue py-2 text-sm font-semibold text-lightblue">
            Save
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default NewMeeting;
