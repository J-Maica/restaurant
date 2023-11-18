import Testimony from "../components/testimony/Testimony";
import BookNow from "../components/BookNow";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Reservation() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contact: "",
    person: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const currentDate = new Date();
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.contact === "" ||
      formData.person < 0 ||
      formData.date === "" ||
      formData.time === ""
    ) {
      alert("Please complete the contact form");
    } else if (formData.contact.length != 11) {
      alert("Contact must be at least 11 numbers");
    } else if (new Date(formData.date).getTime() <= currentDate.getTime()) {
      alert("Invalid date: " + formData.date);
    } else {
      console.log(formData);
      alert(
        "Reservation successfully sent. Please wait for the email confirmation"
      );
      setContactData({
        fullname: "",
        email: "",
        contact: "",
        person: "",
        date: "",
        time: "",
      });
    }
  };

  return (
    <div>
      <section className="grid px-8 gap-6 md:text-start lg:p-0 lg:gap-0 lg:grid-cols-2 mt-16 lg:mt-64">
        <div className="lg:ms-32 grid gap-6">
          <h1 className="text-3xl">Reservation</h1>
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
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Fullname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              name="contact"
              id="contact"
              type="text"
              placeholder="Contact No."
              value={formData.contact}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              name="person"
              id="person"
              type="number"
              placeholder="How many people?"
              value={formData.person > 1 ? formData.person : 1}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              name="time"
              id="time"
              type="time"
              placeholder="Time"
              value={formData.time}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              name="date"
              id="date"
              type="date"
              placeholder="Date"
              value={formData.date}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
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
