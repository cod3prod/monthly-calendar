"use client";

import { useEffect, useState } from "react";

export default function useCalendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [title, setTitle] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [events, setEvents] = useState<EventProps[]>([]);

  useEffect(() => {
    const prevEvents = localStorage.getItem("events");
    if (prevEvents) {
      const events = JSON.parse(prevEvents);
      events.forEach((ev: EventProps) => {
        ev.start = new Date(ev.start);
        ev.end = new Date(ev.end);
      });
      setEvents(events);
    }
  }, [setEvents]);
  
  return {
    currentMonth,
    setCurrentMonth,
    currentYear,
    setCurrentYear,
    title,
    setTitle,
    startDateTime,
    setStartDateTime,
    endDateTime,
    setEndDateTime,
    events,
    setEvents,
  };
}
