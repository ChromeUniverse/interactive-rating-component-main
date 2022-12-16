import React, { useState } from "react";
import starIcon from "./assets/icon-star.svg";
import illustration from "./assets/illustration-thank-you.svg";

function RatingBtn({ label, rating, selected = false, setRating }) {
  return (
    <button
      onClick={() => (label !== rating ? setRating(label) : setRating(0))}
      className={`
        w-12 h-12 rounded-full flex items-center pt-1 justify-center font-bold transition-all outline-none
        ${
          selected
            ? "bg-orange bg-opacity-100 text-white"
            : "bg-medium-grey bg-opacity-10 text-medium-grey hover:bg-opacity-100 hover:text-white"
        }
      `}
    >
      {label.toString()}
    </button>
  );
}

function ThankYouView({ rating }) {
  return (
    <div className="flex flex-col items-center w-full h-full">
      {/* Image */}
      <img className="mt-6" src={illustration} alt="" />
      {/* Rating */}
      <div className="mt-8 rounded-full bg-medium-grey bg-opacity-10 px-4 py-1 text-orange text-sm">
        <p>You selected {rating} out of 5</p>
      </div>
      {/* Title */}
      <h2 className="text-white text-2xl font-bold mt-7 mb-3">Thank you!</h2>
      {/* Text */}
      <p className="text-medium-grey text-center text-md">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

function FormView({ setView, rating, setRating }) {
  return (
    <div className="flex flex-col h-full">
      {/* Star icon */}
      <div className="w-12 h-12 bg-medium-grey bg-opacity-10 rounded-full flex items-center justify-center">
        <img src={starIcon} alt="" />
      </div>

      {/* Title */}
      <h1 className="mt-6 text-3xl text-white font-bold">How did we do?</h1>

      {/* Text */}
      <p className="text-medium-grey mt-4 mb-8">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      {/* Rating Buttons */}
      <div className="flex justify-between">
        {[1, 2, 3, 4, 5].map((num) => (
          <RatingBtn
            key={num}
            label={num}
            rating={rating}
            selected={num === rating}
            setRating={setRating}
          />
        ))}
      </div>

      {/* Submit button */}
      <button
        className="bg-orange uppercase w-full rounded-full h-12 text-white font-bold tracking-wider mt-auto hover:bg-white hover:text-orange transition-all disabled:brightness-50 disabled:hover:bg-orange disabled:hover:text-white disabled:cursor-not-allowed"
        onClick={() => setView(1)}
        disabled={rating < 1 || rating > 5}
      >
        Submit
      </button>
    </div>
  );
}

function App() {
  // Views
  // 0 -> Form view
  // 1 -> Thank You view
  const [view, setView] = useState(0);
  // Rating
  const [rating, setRating] = useState(0);

  return (
    // BG
    <div className="bg-very-dark-blue w-screen h-screen flex items-center justify-center">
      {/* Card */}
      <main className="w-[80%] md:w-[420px] h-[440px] md:h-[420px] bg-gradient-to-b from-dark-blue to-card-bg rounded-3xl p-8">
        {view === 0 && (
          <FormView setView={setView} rating={rating} setRating={setRating} />
        )}
        {view === 1 && <ThankYouView rating={rating} />}
      </main>
    </div>
  );
}

export default App;
