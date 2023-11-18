import { useState } from "react";
import Testimony from "../components/testimony/Testimony";
import BookNow from "../components/BookNow";
import Footer from "../components/Footer";

export default function Contact() {
  const [contactData, setContactData] = useState({
    fullname: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      contactData.fullname === "" ||
      contactData.email === "" ||
      contactData.contact === "" ||
      contactData.message === ""
    ) {
      alert("Please complete the contact form");
    } else if (contactData.contact.length != 11 || isNaN(contactData.contact)) {
      alert("Contact must be at least 11 numbers");
    } else {
      console.log(contactData);
      alert("Message successfully sent");
      setContactData({
        fullname: "",
        email: "",
        contact: "",
        message: "",
      });
    }
  };

  return (
    <div>
      <section className="grid px-8 gap-6 md:text-start lg:p-0 lg:gap-0 lg:grid-cols-2 mt-16 lg:mt-64">
        <div className="lg:ms-32 grid gap-6">
          <h1 className="text-3xl">Contact Us</h1>
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

      <section className="px-8 md:text-start mt-16 lg:mt-64 lg:px-32">
        <div className="w-full flex justify-start md:justify-end">
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full md:w-[500px] xl:w-[800px] border-2 p-8 border-gray-600"
          >
            <input
              name="fullname"
              id="fullname"
              type="text"
              placeholder="Fullname"
              value={contactData.fullname}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              value={contactData.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              name="contact"
              id="contact"
              type="text"
              placeholder="Contact No."
              value={contactData.contact}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              value={contactData.message}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
            <button
              type="submit"
              className="border border-red-600 px-4 py-1 w-[150px]"
            >
              Send Message
            </button>
          </form>
        </div>
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
