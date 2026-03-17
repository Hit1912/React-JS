import React, { useState } from "react";
import { NotebookPen, LayoutList } from "lucide-react";

const App = () => {
  const [Title, setTitle] = useState("");
  const [Notes, setNotes] = useState("");
  const [Tasks, setTasks] = useState([]);

  function SubmitForm(e) {
    e.preventDefault();

    if (!Title || !Notes) return;

    setTasks([...Tasks, { Heading: Title, List: Notes }]);
    setTitle("");
    setNotes("");
  }

  return (
    <section className="lg:flex min-h-screen">

      {/* LEFT SIDE */}
      <div className="lg:w-1/2 w-full flex items-center justify-center bg-[#f5f7f6] p-6">
        <form onSubmit={SubmitForm} className="w-full max-w-md">

          {/* 🔥 SUPER BIG PREMIUM HEADING */}
          <div className="flex items-center gap-5 mb-10">
            <NotebookPen size={70} className="text-green-700" />

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold bg-linear-to-r from-green-600 to-green-900 bg-clip-text text-transparent tracking-wide leading-tight">
              Add Your Task
            </h1>
          </div>

          {/* INPUT */}
          <input
            type="text"
            placeholder="Enter your task"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-green-200 outline-none mb-4 text-lg"
          />

          {/* TEXTAREA */}
          <textarea
            rows={6}
            placeholder="Enter your description"
            value={Notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-green-200 outline-none mb-4 text-lg"
          ></textarea>

          {/* BUTTON */}
          <button className="w-full bg-green-800 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-900 transition active:scale-95">
            New Task
          </button>
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-1/2 w-full border-l-2 border-dashed border-gray-400 bg-[#f1ede7] p-6 overflow-auto">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-6">
          <LayoutList size={30} />
          <h2 className="text-3xl font-semibold">
            Your Task
          </h2>
        </div>

        {/* TASK CARDS */}
        <div className="flex flex-wrap gap-6">
          {Tasks.map((task, id) => (
            <div
              key={id}
              className="w-72 bg-[#6b3f1d] text-white rounded-3xl p-4 shadow-xl relative hover:scale-105 transition"
            >
              {/* PIN */}
              <img
                src="https://pngimg.com/uploads/pushpin/pushpin_PNG76.png"
                alt=""
                className="w-10 absolute -top-3 left-1/2 -translate-x-1/2"
              />

              {/* NUMBER */}
              <h1 className="text-xl font-bold">{id + 1}</h1>

              {/* TITLE */}
              <h2 className="text-2xl font-semibold text-center my-2 italic">
                {task.Heading}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-sm opacity-90">{task.List}</p>

              {/* DATE */}
              <p className="text-xs text-right mt-4 opacity-70">
                {new Date().toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;