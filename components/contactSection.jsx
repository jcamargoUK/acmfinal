'use client'

// https://formspree.io/f/xeqbqlnv

import React, { useState } from 'react';
import axios from 'axios';

export default function ContactSection() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        message: '',
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
      method: 'POST',
      url: 'https://formspree.io/xeqbqlnv',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main 
      className=' 
      flex 
      flex-col 
      m-auto 
      text-center
      border-2
      mx-4
      rounded-xl'>
      <h1 className=' flex m-auto text-2xl text-gray-600 '>Get in Touch</h1>
      <form 
        className=' flex flex-col p-2 pt-4'
        onSubmit={handleOnSubmit}>
        <label 
          className=' 
          flex 
          m-auto 
          text-xl
           text-gray-600
           mb-2'
          htmlFor="email">Email</label>
        <input
          className=' 
          border-2 
          w-3/4 
          flex 
          m-auto 
          p-1 
          rounded-lg
          mb-6'
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <label 
          className=' flex m-auto text-xl text-gray-600 mb-2'
          htmlFor="message">Message</label>
        <textarea
          className=' border-2 w-3/4 flex m-auto p-1 rounded-lg pb-16 mb-6'
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <button 
          className=' 
            text-xl 
            w-3/4 
            m-auto  
            font-bold
           text-white
           bg-blue-500 
           rounded-lg 
           p-2
           hover:bg-blue-700'
          type="submit" 
          disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  );
};