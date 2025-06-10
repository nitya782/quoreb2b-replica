"use client"; // Only if you're using this in App Router (Next.js 13+)

import { useState } from "react";

export default function Cards() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 px-12 py-12 bg-transparent">
      {/* Card 1 */}
      <div className="flex-1 bg-[#232323] rounded-2xl shadow-2xl p-10 flex flex-col items-center min-h-[390px] max-w-[900px]">
        <div className="text-white text-xl font-semibold mt-2 text-center mb-15">Are You Ready?</div>
        <div className="text-white text-4xl md:text-5xl font-bold mb-15 text-center font-quicksand">
          Start a New Project
        </div>

        {!isSubmitted ? (
<form
  onSubmit={async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "a8fe8c95-167c-41a6-bd53-987b128dff69");
    formData.append("subject", "New Project Inquiry");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setIsSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  }}
  className="w-full flex justify-center"
>
  <div className="flex w-full max-w-xl">
    <input
      type="email"
      name="email"
      required
      placeholder="Enter Your Email Address"
      className="flex-1 rounded-full bg-[#444] text-white px-6 py-4 text-lg outline-none border-none placeholder-gray-300"
    />
    <button
      type="submit"
      className="ml-2 rounded-full bg-[#444] text-white px-8 py-4 text-lg font-semibold hover:bg-[#00d8a6] transition"
    >
      SUBMIT
    </button>
  </div>
</form>

        ) : (
          <p className="text-green-400 text-lg mt-6">Thanks! We'll get in touch soon. 💌</p>
        )}
      </div>

      {/* Card 2 */}
      <div className="flex-1 rounded-2xl shadow-2xl p-10 flex flex-col items-center min-h-[390px] max-w-[900px] bg-gradient-to-r from-[#00d8a6] to-[#c6e94a]">
        <div className="text-white text-xl font-semibold mt-2 text-center mb-15">What Are You Waiting For?</div>
        <div className="text-white text-4xl md:text-5xl font-bold mb-15 text-center font-quicksand">
          Let's Talk About Work
        </div>
        <button className="rounded-full bg-black text-white px-10 py-4 text-lg font-semibold hover:bg-[#00d8a6] transition">
          Start Now
        </button>
      </div>
    </div>
  );
}
