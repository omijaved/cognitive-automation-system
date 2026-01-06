import { useState } from "react";

// Dummy availability data (slots per date)
const dummyAvailability = {
  "2026-01-08": ["10:00 AM", "11:00 AM", "02:00 PM"],
  "2026-01-09": ["09:00 AM", "01:00 PM", "03:00 PM"],
  "2026-01-10": ["11:00 AM", "12:00 PM", "04:00 PM"],
  "2026-01-11": ["12:00 PM", "01:00 PM", "02:00 PM"],
  "2026-01-12": ["12:00 PM", "01:00 PM", "02:00 PM"],


};

export default function DummyCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookedSlot, setBookedSlot] = useState(null);

  // Get all dummy dates
  const dates = Object.keys(dummyAvailability);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold mb-8">
          Book a Slot
        </h3>

        {/* Calendar Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-8">
          {dates.map((date) => (
            <button
              key={date}
              onClick={() => {
                setSelectedDate(date);
                setBookedSlot(null);
              }}
              className={`py-2 px-3 rounded border transition
                ${
                  selectedDate === date
                    ? "bg-black text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
            >
              {new Date(date).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </button>
          ))}
        </div>

        {/* Available Slots */}
        {selectedDate && (
          <div>
            <h4 className="text-xl font-semibold mb-4">
              Available Slots for {new Date(selectedDate).toLocaleDateString()}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {dummyAvailability[selectedDate].map((slot, i) => (
                <button
                  key={i}
                  onClick={() => setBookedSlot(slot)}
                  className={`py-2 px-4 rounded shadow transition
                    ${
                      bookedSlot === slot
                        ? "bg-green-600 text-white"
                        : "bg-black text-white hover:bg-blue-700"
                    }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Booking Confirmation */}
        {bookedSlot && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
            ✅ You have booked <strong>{bookedSlot}</strong> on{" "}
            <strong>
              {new Date(selectedDate).toLocaleDateString("en-US")}
            </strong>
          </div>
        )}
      </div>
    </section>
  );
}
