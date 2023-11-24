import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <section className="md:grid md:grid-cols-3 ">
      <div className="mt-16 md:mt-0 text-center md:text-start">
        <h1 className="font-bold mb-6">SITE NAME</h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          inventore accusamus, eveniet minus a aperiam? Quo eveniet aspernatur
          tenetur recusandae modi, reprehenderit iure! Officiis magni eum eos
          sed nobis fuga?
        </p>
      </div>

      <div className="text-center mt-16 md:mt-0">
        <h1 className="font-bold mb-6">LINK</h1>
        <ul className="grid gap-4 text-gray-400">
          <li>
            <Link to={"/restaurant/"}>Home</Link>
          </li>
          <li>
            <Link to={"/restaurant/menu"}>Menu</Link>
          </li>
          <li>
            <Link to={"/restaurant/gallery"}>Gallery</Link>
          </li>
          <li>
            <Link to={"/restaurant/reservation"}>Reservation</Link>
          </li>
          <li>
            <Link to={"/restaurant/about"}>About</Link>
          </li>
          <li>
            <Link to={"/restaurant/contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      <div className="mt-16 md:mt-0 text-center md:text-start">
        <h1 className="font-bold mb-6">CONTACT INFORMATION</h1>
        <ul className="grid gap-4 text-gray-400">
          <li>123 Building No. Street, Country 1233</li>
          <li>+ 1234 5678 90</li>
          <li>sitename@emai.com</li>
          <li>websiteLink</li>
        </ul>
      </div>

      <div className="text-center mt-32 col-span-3 ">
        <p className="text-gray-400">© 2023 Jean Maica. All Rights Reserved.</p>
        <div className="mt-6 flex gap-4 justify-center text-lg text-red-600">
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-regular fa-envelope"></i>
        </div>
      </div>
    </section>
  );
}
