import Events from "./SampleEvent";
import EventCont from "./EventCont";

export default function SampleMenu() {
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {Events.map((item, key) => {
          return <EventCont data={item} key={key} />;
        })}
      </div>
    </div>
  );
}
