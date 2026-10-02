import React from "react";


function Contact() {
  return (
    <main className="min-h-screen px-6 py-20">
      <section className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span
            className=" inline-block px-5 py-3 mb-4 rounded-full bg-[#e0e0e0] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-sm"
          >
            Contact Us
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold">Let's Talk.</h1>

          <p className="mt-4 text-lg text-gray-600">
            Have a question or want to work together? Send us a message.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div
            className=" p-8 md:p-10 rounded-[40px] bg-[#e0e0e0] shadow-[12px_12px_25px_#bebebe,-12px_-12px_25px_#ffffff  "
          >
            <h2 className="text-3xl font-semibold">Send us a message</h2>

            <form className="mt-8 flex flex-col gap-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className=" w-full px-5 py-3 rounded-full bg-[#e0e0e0] outline-none shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff "
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className=" w-full px-5 py-3 rounded-full bg-[#e0e0e0] outline-none shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff "
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                  className=" w-full px-5 py-4 rounded-[25px]  bg-[#e0e0e0] outline-none resize-none shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff  "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className=" w-full py-3 rounded-full  bg-black  text-white font-medium transition hover:scale-[1.02 "
                style={{ borderRadius: "9999px" }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div
            className=" p-8 md:p-10 rounded-[40px] bg-[#e0e0e0] shadow-[12px_12px_25px_#bebebe,-12px_-12px_25px_#ffffff] flex flex-col justify-betwee "
          >
            <div>
              <h2 className="text-3xl font-semibold">Get in touch</h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                We'd love to hear from you. Whether you have a question,
                feedback or just want to say hello, feel free to reach out.
              </p>
            </div>

            {/* Contact Details */}
            <div className="mt-10 flex flex-col gap-6">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="mt-1 font-medium">priyanshmanav0@gmail.com</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="mt-1 font-medium">+91 9045645364</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="mt-1 font-medium">New Delhi, India</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Working Hours</p>
                <p className="mt-1 font-medium">Mon – Fri, 9:00 AM – 6:00 PM</p>
              </div>
            </div>

            {/* Bottom */}
            <div
              className=" mt-10 p-5 rounded-[25px] bg-[#e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff "
            >
              <p className="font-medium">We usually reply within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
