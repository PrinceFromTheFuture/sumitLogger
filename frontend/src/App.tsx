import { useEffect, useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "./components/ui/drawer";
import "./index.css";
import axios from "axios";
import { Meeting } from "@db/db/schema";
import MeetingCard from "./MeetingCard";
import { data } from "./fakeData";

const baseApiUri = import.meta.env.VITE_BASE_API_URI as string;

function App() {
  const [meetings, setMeetings] = useState<Meeting[]>(data);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get<Meeting[]>(`${baseApiUri}/meetings`);
      setMeetings(res.data);
    };
  }, []);
  return (
    <div className=" p-4  'w-full  flex justify-center flex-col items-center bg-lightblue min-h-[100vh]">
      <div className=" text-2xl text-darkblue font-bold mb-2">Sumit recorder</div>
      <div className=" w-full text-center text-md mb-3">Log Your Recordibngs ro make sure no one takes your money!</div>
      <Drawer>
        <DrawerTrigger className=" text-lightblue shadow-lg rounded-md p-2 w-full  text-center mx-4 font-semibold text-xl bg-darkblue">
          Report New
        </DrawerTrigger>
        <DrawerContent className=" min-h-[40vh]">fd</DrawerContent>
      </Drawer>
      {meetings?.map((meeting) => {
        return <MeetingCard key={meeting.id} meeting={meeting} />;
      })}
    </div>
  );
}

export default App;
