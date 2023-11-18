import SampleMenuItems from "../sampleMenu/SampleMenuItems";
import SampleMenuCont from "../sampleMenu/SampleMenuCont";

export default function SampleMenu() {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sampleMenu">
        {SampleMenuItems.map((item, key) => {
          return <SampleMenuCont data={item} key={key} />;
        })}
      </div>
    </div>
  );
}
