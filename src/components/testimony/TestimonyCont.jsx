import { LazyLoadImage } from "react-lazy-load-image-component";

const AllMenuCont = (props) => {
  const { image, name, desc } = props.data;

  return (
    <div>
      <div className="grid gap-4 text-start place-items-center">
        <LazyLoadImage
          src={image}
          alt={name}
          effect="blur"
          id="testimony"
          placeholderSrc={image}
        />
        <h1 className="font-semibold text-xl">{name}</h1>
        <p className="text-gray-400 text-center">{desc}</p>
      </div>
    </div>
  );
};

export default AllMenuCont;
