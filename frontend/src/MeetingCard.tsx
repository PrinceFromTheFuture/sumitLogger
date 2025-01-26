import React from "react";
import { Meeting } from "@db/db/schema";
import { Drawer, DrawerTrigger } from "./components/ui/drawer";
function MeetingCard(props: { meeting: Meeting }) {
  const { meeting } = props;

  return (
    <Drawer>
      <DrawerTrigger>{meeting.name}</DrawerTrigger>
    </Drawer>
  );
}

export default MeetingCard;
