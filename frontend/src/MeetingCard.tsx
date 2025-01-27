//@ts-ignore
import { Meeting } from "@db/db/schema";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./components/ui/drawer";
import { AlignLeft, Calendar, Clock, MapPin, Ruler } from "lucide-react";
import dayjs from "dayjs";
import { cn } from "./lib/utils";
import { Separator } from "./components/ui/separator";
import formatAmountInAgorot from "./lib/formatAmountInAgorot";
function MeetingCard(props: { meeting: Meeting }) {
  const { meeting } = props;
  const isMeetingHappened = dayjs(meeting.startTime).isBefore(dayjs());
  return (
    <Drawer>
      <DrawerTrigger className=" w-full bg-lightblue mb-4 gap-2 rounded-md text-start p-2 flex justify-start items-center">
        <div className=" h-12 w-1 rounded-full bg-darkblue" />
        <div>
          <div className=" text-sm font-medium">{meeting.name}</div>
          <div className=" text-xs font-medium text-blue">
            estemated payment: {formatAmountInAgorot(meeting.expectedPayment)}
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className=" w-full p-4">
          <div className=" w-full flex justify-between items-start gap-12">
            <div className=" text-xl font-bold text-darkblue max-">{meeting.name}</div>
            <div
              className={cn(
                " p-1 rounded-lg font-medium px-2 ",
                isMeetingHappened ? "bg-darkblue/10 text-darkblue" : "bg-[#5A7A40]/10 text-[#5A7A40]"
              )}
            >
              {isMeetingHappened ? "occurred" : "scheduled "}
            </div>
          </div>
          <Separator className=" my-6" />
          <div className=" flex flex-col justify-between text-sm items-start gap-4">
            <div className=" text-black flex justify-start items-center gap-2">
              <Clock size={21} />
              <div className=" font-semibold">
                {dayjs(meeting.startTime).format("HH:mm a")} - {dayjs(meeting.endTime).format("HH:mm a")}
              </div>
            </div>
            <div className=" text-black flex justify-start items-center gap-2">
              <Calendar size={21} />
              <div className=" font-semibold">{dayjs(meeting.startTime).format("dddd, DD MMMM")}</div>
            </div>
            <div className=" text-black flex justify-start items-center gap-2">
              <MapPin size={21} />
              <div className=" font-semibold">{meeting.adress}</div>
            </div>
            <div className=" text-black flex justify-start items-center gap-2">
              <AlignLeft size={21} />
              <div className=" font-semibold text-blue">{meeting.notes}</div>
            </div>
            <div className=" text-black flex justify-start items-center gap-2">
              <Ruler size={21} />
              <div className=" font-semibold">{(meeting.distanceFromHome / 1000).toFixed(2)} km away</div>
            </div>
          </div>
          <div className=" w-full text-center my-6">
            Estmated revenue amount: {formatAmountInAgorot(meeting.expectedPayment, true)}
          </div>
          <DrawerClose className=" w-full rounded-lg bg-lightblue py-2 text-sm font-semibold text-darkblue">
            Okay
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default MeetingCard;
