import { LazyLoadImage } from "react-lazy-load-image-component";

const SampleMenuCont = (props) => {
  const { image, eventName, eventDate, desc } = props.data;

  return (
    <div>
      <div className="grid gap-6 place-items-center bg-[#2c2c2c]">
        <LazyLoadImage
          src={image}
          effect="blur"
          width={"100%"}
          className="h-[500px]"
        />
        <div className="grid gap-4 px-4 pb-8">
          <h1 className="font-semibold text-2xl">{eventName}</h1>
          <p className="text-2xl text-yellow-500">{eventDate}</p>
          <p className="text-gray-400">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SampleMenuCont;
