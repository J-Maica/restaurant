import AllMenuItems from "../menu/AllMenuItems";
import AllMenuCont from "../menu/AllMenuCont";

export default function AllMenu() {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {AllMenuItems.map((item, key) => {
          return <AllMenuCont data={item} key={key} />;
        })}
      </div>
    </div>
  );
}
