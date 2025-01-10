
export function EventItemList({
    event,
    onDelete,
  }: {
    event: EventProps;
    onDelete: () => void;
  }) {
    const formatDate = (date: Date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      return `${year}년 ${month + 1}월 ${day}일`;
    };
  
    return (
      <li className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-gray-800">{event.title}</p>
          <p className="hidden md:blocktext-sm text-gray-600">{`${formatDate(event.start)} ~ ${formatDate(event.end)}`}</p>
        </div>
        <button
          className="bg-red-500 hover:bg-red-600 text-xs md:text-sm text-white font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={onDelete}
        >
          삭제
        </button>
      </li>
    );
  }