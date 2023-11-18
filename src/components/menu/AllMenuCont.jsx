import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const AllMenuCont = (props) => {
  const { image, name, price, desc } = props.data;

  return (
    <div>
      <div className="grid gap-4 text-start">
        <LazyLoadImage
          src={image}
          alt={name}
          effect="blur"
          placeholderSrc={image}
        />
        <h1 className="font-semibold text-2xl">{name}</h1>
        <p className="text-2xl text-yellow-500">₱{price}</p>
        <p className="text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

export default AllMenuCont;
