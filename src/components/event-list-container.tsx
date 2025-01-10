import { EventItemList } from "./event-list-item";

export default function EventListContainer({
  events,
  setEvents,
}: {
  events: EventProps[];
  setEvents: (events: EventProps[]) => void;
}) {
  const handleDeleteEvent = (index: number) => {
    const newEvents = events.filter((_, i) => i !== index);
    setEvents(newEvents);
  };

  return (
    <ul className="mt-4 space-y-4">
      {events.map((event, index) => (
        <EventItemList
          key={index}
          event={event}
          onDelete={() => handleDeleteEvent(index)}
        />
      ))}
    </ul>
  );
}
