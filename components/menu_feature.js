export default function MenuFeature() {
  return (
    <>
      <ul className="flex flex-col gap-3 py-4 pl-6">
        <li className="inline-flex items-center gap-3 text-black/50 hover:text-black">
          <span>
            <img src="icon-todo.svg" />
          </span>
          <a href="#">Todo List</a>
        </li>
        <li className="inline-flex items-center gap-3 text-black/50 hover:text-black">
          <span>
            <img src="icon-calendar.svg" />
          </span>
          <a href="#">Calendar</a>
        </li>
        <li className="inline-flex items-center gap-3 text-black/50 hover:text-black">
          <span>
            <img src="icon-reminders.svg" />
          </span>
          <a href="#">Reminders</a>
        </li>
        <li className="inline-flex items-center gap-3 text-black/50 hover:text-black">
          <span>
            <img src="icon-planning.svg" />
          </span>
          <a href="#">Planning</a>
        </li>
      </ul>
    </>
  );
}
