import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

function BookingForm() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    fullName: '',
    phone: '',
    message: '',
    email: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userKey = `${formData.fullName}_${formData.phone}`;
    const existingBooking = localStorage.getItem(userKey);

    if (existingBooking) {
      setStatusMessage('❗ You have already booked an appointment.');
    } else {
      localStorage.setItem(userKey, JSON.stringify(formData));
      setStatusMessage('✅ Appointment booked successfully!');

      // Send Email via EmailJS
      emailjs.sendForm(
        'service_bs8g7wt',         // 🔁 Replace with your actual Service ID
        'template_0bse367',        // 🔁 Replace with your actual Template ID
        formRef.current,
        'UgUKGHQJciMLNhl07'       // 🔁 Replace with your actual Public Key
      ).then((result) => {
        console.log("✅ Email sent:", result.text);
      }).catch((error) => {
        console.error("❌ Email error:", error.text);
      });

      setFormData({
        department: '',
        doctor: '',
        date: '',
        time: '',
        fullName: '',
        phone: '',
        message: '',
        email: ''
      });
    }

    setTimeout(() => setStatusMessage(''), 4000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Status Message */}
      {statusMessage && (
        <div className={`mb-4 text-sm p-3 rounded text-center ${
          statusMessage.includes('❗') 
            ? 'bg-red-100 text-red-800 border border-red-300' 
            : 'bg-green-100 text-green-800 border border-green-300'
        }`}>
          {statusMessage}
        </div>
      )}

      {/* Form */}
      <form ref={formRef} className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
        {/* Department & Doctor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="relative">
            <select 
              name="department" 
              value={formData.department} 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded px-3 py-3 md:py-4 text-sm bg-[#F4F9FC] text-slate-500 appearance-none"
              required
            >
              <option value="" disabled>Choose Department</option>
              <option>Cardiology</option>
              <option>Dental</option>
              <option>Neurology</option>
              <option>Medicine</option>
              <option>Pediatric</option>
              <option>Traumatology</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          <div className="relative">
            <select 
              name="doctor" 
              value={formData.doctor} 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded px-3 py-3 md:py-4 text-sm bg-[#F4F9FC] text-slate-500 appearance-none"
              required
            >
              <option value="" disabled>Select Doctor</option>
              <option>Dr. A Sharma</option>
              <option>Dr. B Gupta</option>
              <option>Dr. C Mehta</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="relative">
            <input 
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded px-3 py-3 md:py-4 text-sm bg-[#F4F9FC] text-gray-700"
              required 
            />
          </div>
          <div className="relative">
            <input 
              type="time" 
              name="time" 
              value={formData.time} 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded px-3 py-3 md:py-4 text-sm bg-[#F4F9FC] text-gray-700"
              required 
            />
          </div>
        </div>

        {/* Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <input 
            type="text" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            placeholder="Full Name" 
            className="w-full border border-gray-300 rounded px-3 py-3 md:py-4 text-sm bg-[#F4F9FC]"
            required 
          />
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            placeholder="Phone Number" 
            className="w-full border border-gray-300 rounded px-3 py-3 md:py-4 text-sm bg-[#F4F9FC]"
            required 
          />
        </div>

        {/* Email */}
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Email Address" 
          className="w-full border border-gray-300 rounded px-3 py-3 md:py-4 text-sm bg-[#F4F9FC]"
          required 
        />

        {/* Message */}
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          rows="4" 
          placeholder="Your Message" 
          className="w-full border border-gray-300 rounded px-3 py-3 md:py-4 text-sm bg-[#F4F9FC]"
        ></textarea>

        {/* Submit Button */}
        <div className="pt-2">
          <button 
            type="submit" 
            className="w-full md:w-auto uppercase text-white p-3 md:p-4 px-6 md:px-8 font-exo text-xs md:text-[13px] font-bold rounded-full bg-[#223A66] hover:bg-[#E12454] transform duration-300"
          >
            Make an Appointment
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;