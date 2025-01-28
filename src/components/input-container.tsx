import Input from "./ui/input";

export default function InputContainer({
  events,
  title,
  startDateTime,
  endDateTime,
  setEvents,
  setTitle,
  setStartDateTime,
  setEndDateTime,
}: {
  events: EventProps[];
  title: string;
  startDateTime: string;
  endDateTime: string;
  setEvents: (events: EventProps[]) => void;
  setTitle: (title: string) => void;
  setStartDateTime: (startDateTime: string) => void;
  setEndDateTime: (endDateTime: string) => void;
}) {
  const handleAddEvent = () => {
    if (!title || !startDateTime || !endDateTime) {
      alert("Please fill out all fields");
      return;
    }
    const start = new Date(startDateTime);
    const end = new Date(endDateTime);
    if (end < start) {
      alert("End date/time must be after start date/time");
      return;
    }
    const newEvent = {
      title,
      start,
      end,
      sequence: events.length,
    };
    localStorage.setItem("events", JSON.stringify([...events, newEvent]));
    setEvents([...events, newEvent]);
    setTitle("");
    setStartDateTime("");
    setEndDateTime("");
  };

  return (
    <div className="mb-4 p-4 bg-white rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-2">일정 추가</h2>

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-2">
        <Input
          className="w-full md:w-1/3"
          label="일정 이름"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          className="w-full md:w-1/3"
          label="시작 시간"
          id="startDateTime"
          type="datetime-local"
          value={startDateTime}
          onChange={(e) => setStartDateTime(e.target.value)}
        />
        <Input
          className="w-full md:w-1/3"
          label="종료 시간"
          id="startDateTime"
          type="datetime-local"
          value={endDateTime}
          onChange={(e) => setEndDateTime(e.target.value)}
        />
      </div>
      <button
        onClick={handleAddEvent}
        className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-500/80"
      >
        추가
      </button>
    </div>
  );
}
