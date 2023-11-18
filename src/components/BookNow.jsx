import { Link } from "react-router-dom";

export default function BookNow() {
  return (
    <div>
      <div className="grid gap-6 place-items-center text-center">
        <h1 className="text-3xl">Book a Table</h1>
        <p className="px-16 xl:mx-96">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          hic consequatur eligendi ullam enim voluptatem recusandae ad
          repellendus sunt necessitatibus minima quod, quas aliquam tenetur,
          quam non accusamus molestias porro quo natus animi error quasi
          quibusdam. Porro inventore accusantium odit cupiditate, assumenda
          ducimus ad rerum corporis. Dicta, ex necessitatibus porro, architecto,
          deleniti quia voluptatum voluptatem quas totam dolore recusandae
          saepe.
        </p>
        <button className="border px-4 py-1 border-red-600">
          <Link to={"/reservation"}>Book Now</Link>
        </button>
      </div>
    </div>
  );
}
