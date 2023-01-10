"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ImageHolder from "./(reusable)/ImageHolder";
import { OldSign } from "./(reusable)/OldSign";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vm7bcqe",
        "template_retc1vt",
        form.current!,
        "Shj5cvQCkYB9XL6RD"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current?.reset();
  };

  return (
    <>
      <div className="bg-main-neon-pink w-full quicksand py-6">
        <div className="center flex flex-col items-center">
          <h2 className="smoky-blue-text my-4 text-xl">Contact Me</h2>
          <div className="relative glitched-box-shadow-blue w-1/2 border border-white p-2">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col">
              <label className="text-white underline decoration-main-neon-blue">
                Your Name
              </label>
              <input
                className="w-full p-1"
                type="text"
                name="fullName"
                required
              ></input>
              <label className="text-white underline decoration-main-neon-blue">
                Your Email
              </label>
              <input
                className="w-full p-1"
                type="email"
                name="email"
                required
              ></input>
              <label className="text-white underline decoration-main-neon-blue">
                Message
              </label>
              <textarea
                className="w-full glitched-box-shadow-pink p-1"
                name="message"
                required
              ></textarea>
              <div className="flex items-center justify-between mt-4">
                <input
                  className="float-right py-2 px-4 w-fit rounded-xl border border-white bg-white/10 text-white font-bold"
                  type="submit"
                  value="Send"
                />
                {messageSent && (
                  <p className="text-white font-bold">Message has been sent!</p>
                )}
              </div>
            </form>
            <OldSign
              classNameInner="bg-white rounded-md right-[-9.8rem] bottom-[14.2rem]"
              classNameOuter="rounded-md text-white p-1 bg-old-gen-green"
              label="NEW"
            />
            <OldSign
              classNameInner="bg-white rounded-md right-[-9.6rem] bottom-[14.4rem]"
              classNameOuter="rounded-md text-white p-1 bg-old-gen-green"
              label="NEW"
            />
            <OldSign
              classNameInner="bg-white rounded-md right-[-9.4rem] bottom-[14.6rem]"
              classNameOuter="rounded-md text-white p-1 bg-old-gen-green"
              label="NEW"
            />
            <ImageHolder
              className="-left-[16rem] bottom-[30%]"
              image="/retro-(10).png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
