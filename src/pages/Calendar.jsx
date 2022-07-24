import React from "react";
import {
  Agenda,
  Day,
  DragAndDrop,
  Month,
  Resize,
  ScheduleComponent,
  Week,
  Inject,
  WorkWeek,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";
import { Header } from "../Components";
import { useStateContext } from "../contexts/ContextProvider";

const Calendar = () => {
  const { currentMode } = useStateContext();

  return (
    // <div className={currentMode === "Dark" ? "dark" : ""}>
    <div className="m-12 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg ">
      <Header category="App" title="Calender" />

      <ScheduleComponent
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
        height="650"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2022, 10, 16)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
    // </div>
  );
};

export default Calendar;
