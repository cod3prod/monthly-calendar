"use client";

import DaysOfTheWeek from "./days-of-the-week";
import Month from "./month";
import MonthNavigator from "./month-navigator";
import InputContainer from "./input-container";
import EventListContainer from "./event-list-container";
import useCalendar from "@/hooks/use-calendar";

export default function Calendar() {
  const {
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
  } = useCalendar();
  function getDaysInMonth(year: number, month: number) {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }
  const daysArray = getDaysInMonth(currentYear, currentMonth);

  const firstDay = new Date(currentYear, currentMonth, 1);
  const startDay = firstDay.getDay();

  const weeks: (Date | null)[][] = [];
  let currentWeek: (Date | null)[] = Array(startDay).fill(null);

  daysArray.forEach((day) => {
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(day);
  });

  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">월간 캘린더</h1>
        <InputContainer
          events={events}
          title={title}
          startDateTime={startDateTime}
          endDateTime={endDateTime}
          setEvents={setEvents}
          setTitle={setTitle}
          setStartDateTime={setStartDateTime}
          setEndDateTime={setEndDateTime}
        />
        <MonthNavigator
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          currentYear={currentYear}
          setCurrentYear={setCurrentYear}
        />
        <DaysOfTheWeek />
        <Month weeks={weeks} events={events} />
        <EventListContainer events={events} setEvents={setEvents} />
      </div>
    </div>
  );
}
