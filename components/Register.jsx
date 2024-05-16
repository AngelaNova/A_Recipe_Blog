
import React, { useState } from "react";
import Link from "next/link";

const Register = ({ handleChange }) => {
  const [inputError, setInputError] = useState(false);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const totalCharacters = inputValue.replace(/\s/g, '').length;
    const specialCharacters = inputValue.replace(/[\w\s]/g, '').length;

    if (totalCharacters >= 30 && specialCharacters >= totalCharacters / 2) {
      setInputError(true);
    } else {
      setInputError(false);
    }

    setPost({ ...post, prompt: inputValue });
  };

  const remainingCharacters = Math.max(15 - password.password.replace(/\s/g, '').length, 0);

  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='orange'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        <br/>
        Join the Orange Blog! Register Here. <br/> 

      </p>

      <registration
        onSubmit={handleChange}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Username
          </span>

          <textarea
            value={account.username}
            onChange={handleChange}
            placeholder='Write your username here'
            required
            className='form_textarea '
          />
          {!inputError && remainingCharacters > 0 && (
            <span className="text-xs text-gray-500">You must write at least another {remainingCharacters} character</span>
          )}
          {inputError && (
            <span className="text-xs text-gray-500">You have too many special characters.</span>
          )}
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Field of Password{" "}
          </span>
          <input
            value={account.password}
            onChange={handleChange}
            type='text'
            placeholder='password'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting || inputError || remainingCharacters > 0}
            className={`px-5 py-1.5 text-sm ${
              (inputError || remainingCharacters > 0) ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-orange'
            } rounded-full text-white`}
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </registration>
    </section>
  );
};

export default Register;
