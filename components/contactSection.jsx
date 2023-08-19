"use client";

// https://formspree.io/f/xeqbqlnv

import React, { useState } from "react";
import axios from "axios";

export default function ContactSection() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/xeqbqlnv",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          <h1 className="text-xl pb-2 text-hoverbg bg-backgroundTwo">Thank you, your message has been submitted.</h1>
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main
      className=" 
      bg-secondary
      flex 
      flex-col 
      m-auto 
      text-center
      mt-12
      shadow-lg
      shadow-lime-700
      md:w-2/3
      md:m-auto
      md:mt-16
      md:rounded-xl
      "
    >
      <h1 className="text-4xl 
      font-medium 
      text-center 
      pt-6 
      pb-6 
      md:text-4xl
      md:pt-12
      md:pb-4
      lg:text-4xl text-black">Talk To Us!</h1>
      <form
        className=" flex flex-col p-2 pt-4 md:text-2xl"
        onSubmit={handleOnSubmit}
      >
        <label
          className=" 
          flex 
          m-auto 
          text-xl
           text-gray-600
           mb-2
           md:text-2xl"
          htmlFor="name"
        ></label>

        <input
          className=" 
          bg-gray-300
          text-gray-600
          text-left
          w-5/6 
          flex 
          m-auto 
          pt-2
          pb-2
          pl-2
          rounded-lg
          mb-6"
          id="name"
          type="name"
          name="name"
          onChange={handleOnChange}
          placeholder="Name"
          required
          value={inputs.name}
        />
        <label
          className=" 
          flex 
          m-auto 
          text-xl
           text-gray-600
           mb-2
           md:text-2xl"
          htmlFor="email"
        ></label>
        <input
          className=" 
          bg-gray-300
          text-gray-600
          text-left
          w-5/6 
          flex 
          m-auto 
          pt-2
          pb-2
          pl-2
          rounded-lg
          mb-6"
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          placeholder="Email"
          required
          value={inputs.email}
        />
        <label
          className=" flex m-auto text-xl text-gray-600 mb-2 md:text-2xl"
          htmlFor="message"
        ></label>
        <textarea
          className=" 
            bg-gray-300
            text-gray-600
            text-left 
            w-5/6 
            flex 
            m-auto 
            pt-2
            pl-2
            rounded-lg 
            pb-16 
            mb-6"
          id="message"
          name="message"
          onChange={handleOnChange}
          placeholder="Message..."
          required
          value={inputs.message}
        />
        <button
          className=" 
            text-xl 
            w-5/6 
            m-auto 
            mb-6 
            font-bold
           text-white
           bg-blue
           hover:bg-hoverbg
           hover:text-hovertext
           md:tracking-widest
           rounded-lg 
           p-2
           hover:bg-blue-700
           shadow-lg
           shadow-blue-400"
          type="submit"
          disabled={status.submitting}
        >
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  );
}
