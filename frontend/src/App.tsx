import { useEffect, useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "./components/ui/drawer";
import "./index.css";
import axios from "axios";
import { Meeting } from "@db/db/schema";
import MeetingCard from "./MeetingCard";

const baseApiUri = import.meta.env.VITE_BASE_API_URI as string;

function App() {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get<Meeting[]>(`${baseApiUri}/meetings`);
      setMeetings(res.data);
      console.log(res.data);
    };
    getData();
  }, []);
  return (
    <div className=" p-4  'w-full  flex justify-center flex-col items-center  min-h-[100vh]">
      <div className=" text-2xl text-darkblue font-bold mb-2">Sumit recorder</div>
      <div className=" w-full text-center text-md mb-3">
        Log Your Recordibngs ro make sure no one takes your money!
      </div>
      <Drawer>
        <DrawerTrigger className=" text-lightblue shadow-lg rounded-md p-2 w-full  text-center mx-4 font-semibold text-xl bg-darkblue">
          Report New
        </DrawerTrigger>
        <DrawerContent className=" min-h-[40vh]">fd</DrawerContent>
      </Drawer>
      <div className=" w-full flex justify-start items-start flex-col mt-20 ">
        {meetings?.map((meeting) => {
          return <MeetingCard key={meeting.id} meeting={meeting} />;
        })}
      </div>
    </div>
  );
}

export default App;
