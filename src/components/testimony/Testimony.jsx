import TestimonyList from "../testimony/TestimonyList";
import TestimonyCont from "../testimony/TestimonyCont";

export default function Testimony() {
  return (
    <div>
      <div className="grid lg:grid-cols-2">
        <div className=" grid gap-6 grid-cols-1">
          <h1 className="text-3xl">Testimony</h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            hic consequatur eligendi ullam enim voluptatem recusandae ad
            repellendus sunt necessitatibus minima quod, quas aliquam tenetur,
            quam non accusamus molestias porro quo natus animi error quasi
            quibusdam. Porro inventore accusantium odit cupiditate, assumenda
            ducimus ad rerum corporis. Dicta, ex necessitatibus porro,
            architecto, deleniti quia voluptatum voluptatem quas totam dolore
            recusandae saepe.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-32">
        {TestimonyList.map((item, key) => {
          return <TestimonyCont data={item} key={key} />;
        })}
      </div>
    </div>
  );
}
