import Navbar from "@/ui/navbar";
import Footer from "@/ui/Footer";
import "../app/globals.css";
import { useState } from "react";

interface Month {
  id: number;
  name: string;
  file: string;
}

export default function Newsletter() {
  const months: Month[] = [
    { id: 1, name: "January", file: "files/newsletter_jan.pdf" },
    // Add more months as needed
  ];

  const [selectedMonth, setSelectedMonth] = useState<Month>(months[0]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-500 min-h-screen flex flex-col md:flex-row py-16 p-10 md:p-20 font-primary">
        <div className="hidden md:block w-1/4 bg-gray-200 p-4 my-10 rounded-lg">
          
          <div className="space-y-2">
            {months.map((month) => (
              <button
                key={month.id}
                className={`px-4 py-2 rounded-lg w-full font-bold text-black font-secondary ${
                  selectedMonth.id === month.id
                    ? "bg-slate-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
                onClick={() => setSelectedMonth(month)}
              >
                {month.name}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full md:w-3/4 bg-white p-4 my-10 rounded-lg md:ml-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 font-secondary text-center">
            {selectedMonth.name} Newsletter
          </h2>
          <div className="newsletter-pdf">
            <iframe
              src={selectedMonth.file}
              width="100%"
              height="600"
              title="newsletter"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
