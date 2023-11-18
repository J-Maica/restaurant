import GallerMain from "../components/gallery/GalleryMain";
import Testimony from "../components/testimony/Testimony";
import BookNow from "../components/BookNow";
import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <div>
      <section className="grid px-8 gap-6 md:text-start lg:p-0 lg:gap-0 lg:grid-cols-2 mt-16 lg:mt-64">
        <div className="lg:ms-32 grid gap-6">
          <h1 className="text-3xl">Our Delicous Menu</h1>
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
      </section>

      <section className="mt-16 lg:mt-64 md:mx-32 px-6 md:px-0">
        <GallerMain />
      </section>

      <section className="grid px-8 gap-6 text-start lg:px-32 lg:gap-0 mt-16 lg:mt-64">
        <Testimony />
      </section>

      <section className="mt-32 bookNow py-16">
        <BookNow />
      </section>

      <footer className="px-8 pb-16 mt:16 md:mt-32 lg:px-32">
        <Footer></Footer>
      </footer>
    </div>
  );
}
