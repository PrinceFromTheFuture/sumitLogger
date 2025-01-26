import { Drawer, DrawerContent, DrawerTrigger } from "./components/ui/drawer";
import "./index.css";
function App() {
  return (
    <div className=" p-4  'w-full  flex justify-center flex-col items-center bg-lightblue min-h-[100vh]">
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
    </div>
  );
}

export default App;
