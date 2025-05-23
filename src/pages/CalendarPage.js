import React from "react";
import { CalendarTitle } from "../components/Titles";
import Calendario from "../components/Calendar";

const CalendarPage = () => {
    return (
        <div className="calendar-page">
            <CalendarTitle />
            <Calendario></Calendario>
        </div>
    );
}
export default CalendarPage;