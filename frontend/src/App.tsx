import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
//@ts-ignore
import { Meeting } from "@db/db/schema";
import MeetingCard from "./MeetingCard";
import NewMeeting from "./NewMeeting";

const baseApiUri = import.meta.env.VITE_BASE_API_URI as string;

function App() {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const getData = async () => {
    try {
      const res = await axios.get<Meeting[]>(`${baseApiUri}/meetings`);
      setMeetings(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className=" p-4  'w-full  flex justify-center flex-col items-center  min-h-[100vh]">
      <div className=" text-2xl text-darkblue font-bold mb-2">Sumit recorder</div>
      <div className=" w-full text-center text-md mb-3">
        Log Your Recordibngs ro make sure no one takes your money!
      </div>
      {}

      <NewMeeting />
      <div className=" w-full flex justify-start items-start flex-col mt-20 ">
        {meetings?.map((meeting) => {
          return <MeetingCard key={meeting.id} meeting={meeting} />;
        })}
      </div>
    </div>
  );
}

export default App;
