import { useState } from "react";
import emailjs from "@emailjs/browser";
import services from "./data/services";
import { FaWhatsapp } from "react-icons/fa6";

export default function ServicePortal() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    details: "",
  });

  // OPEN APPLY FORM
  const openApplyForm = (service: any) => {
    setSelectedService(service);
    setShowModal(true);
  };

  // INPUT CHANGE
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT FORM
  const submitApplication = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_ihp2arm",
        "template_qozg3o1",
        {
          to_email: formData.email,

          service_name: selectedService.title,

          customer_name: formData.name,

          customer_mobile: formData.mobile,

          customer_details: formData.details,
        },
        "e0x3oL7FJYj_huyya",
      );

      // WHATSAPP MESSAGE
      const whatsappMessage = `Hello JPG PAN SERVICE,

Maine "${selectedService.title}" service apply ki hai.

Name: ${formData.name}
Mobile: ${formData.mobile}

Mera kaam kab tak ho jayega?`;

      // OPEN WHATSAPP
      window.open(
        `https://wa.me/918840201416?text=${encodeURIComponent(
          whatsappMessage,
        )}`,
        "_blank",
      );

      alert("Application Submitted Successfully ✅");

      setShowModal(false);

      setFormData({
        name: "",
        mobile: "",
        email: "",
        details: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong ❌");
    }
  };

  // FILTER SERVICES
  const filteredServices = services.filter((service) => {
    const matchesSearch = service.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || service.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-purple-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* PREMIUM NAVBAR */}
        <nav className="w-full bg-gradient-to-r from-sky-100 via-cyan-50 to-blue-100 shadow-2xl border-b border-cyan-200 mb-8">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 gap-4">
              {/* LEFT SIDE */}
              <div className="flex items-center gap-3">
                {/* ROUND LOGO */}
                <div className="h-16 w-16 rounded-full overflow-hidden bg-white shadow-2xl border-4 border-cyan-300 flex-shrink-0">
                  <img
                    src="https://i.ibb.co/qFBVHLq8/file.jpg"
                    alt="JPG PAN SERVICE Logo"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* TITLE */}
                <div>
                  <h1 className="text-[22px] md:text-3xl font-black text-slate-800 tracking-wide leading-none">
                    JPG PAN SERVICE
                  </h1>

                  {/* SERVICE TAGLINE BOX */}
                  <div className="mt-2 inline-block bg-white/80 backdrop-blur-md border border-cyan-200 px-4 py-2 rounded-full shadow-md">
                    <p className="text-slate-700 text-[11px] md:text-base font-medium leading-snug text-center">
                      Fast • Secure • Online Government Services
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col md:items-end gap-2">
                {/* NOTICE */}
                <div className="bg-gradient-to-r from-cyan-200 to-sky-200 text-slate-800 px-4 py-2 rounded-2xl text-xs md:text-sm font-bold shadow-lg max-w-full md:max-w-[500px]">
                  📢 सभी काम 100% गारंटी के साथ किए जाते हैं। काम के लिए
                  WhatsApp पर मैसेज करें। +91 8840201416
                </div>

                {/* CONTACT INFO */}
                <div className="flex flex-wrap justify-start md:justify-end gap-2 text-slate-700 text-[11px] md:text-sm font-semibold">
                  <span className="bg-white/80 px-3 py-1 rounded-full backdrop-blur-md border border-cyan-200 shadow-sm whitespace-nowrap">
                    📞 +91 8840201416
                  </span>

                  <span className="bg-white/80 px-3 py-1 rounded-full backdrop-blur-md border border-cyan-200 shadow-sm whitespace-nowrap">
                    📧 jpgpanservice@gmail.com
                  </span>

                  <span className="bg-white/80 px-3 py-1 rounded-full backdrop-blur-md border border-cyan-200 shadow-sm whitespace-nowrap">
                    ⏰ 09:30 PM - 11:00 AM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* SEARCH */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search Services..."
            className="w-full md:w-[400px] px-5 py-4 rounded-2xl bg-white/80 backdrop-blur-md border border-cyan-200 text-slate-800 outline-none shadow-xl"
          />

          {/* CATEGORY BUTTONS */}
          <div className="flex gap-3 flex-wrap justify-center">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-5 py-3 rounded-2xl font-semibold shadow-xl border transition-all ${
                activeCategory === "All"
                  ? "bg-gradient-to-r from-cyan-200 to-sky-200 text-slate-800 border-cyan-300"
                  : "bg-white/80 text-slate-700 border-cyan-100 hover:bg-cyan-50"
              }`}
            >
              All Services
            </button>

            <button
              onClick={() => setActiveCategory("Aadhaar")}
              className={`px-5 py-3 rounded-2xl font-semibold shadow-xl border transition-all ${
                activeCategory === "Aadhaar"
                  ? "bg-gradient-to-r from-cyan-200 to-sky-200 text-slate-800 border-cyan-300"
                  : "bg-white/80 text-slate-700 border-cyan-100 hover:bg-cyan-50"
              }`}
            >
              Aadhaar
            </button>

            <button
              onClick={() => setActiveCategory("PAN Card")}
              className={`px-5 py-3 rounded-2xl font-semibold shadow-xl border transition-all ${
                activeCategory === "PAN Card"
                  ? "bg-gradient-to-r from-cyan-200 to-sky-200 text-slate-800 border-cyan-300"
                  : "bg-white/80 text-slate-700 border-cyan-100 hover:bg-cyan-50"
              }`}
            >
              PAN Card
            </button>

            <button
              onClick={() => setActiveCategory("RC & DL")}
              className={`px-5 py-3 rounded-2xl font-semibold shadow-xl border transition-all ${
                activeCategory === "RC & DL"
                  ? "bg-gradient-to-r from-cyan-200 to-sky-200 text-slate-800 border-cyan-300"
                  : "bg-white/80 text-slate-700 border-cyan-100 hover:bg-cyan-50"
              }`}
            >
              RC & DL
            </button>
          </div>
        </div>
        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-100 border border-cyan-200 p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* TOP BORDER */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400"></div>

              {/* LOGO */}
              <div className="w-20 h-20 rounded-3xl overflow-hidden bg-white p-3 shadow-lg mb-5 mx-auto border border-cyan-200">
                <img
                  src={service.logo}
                  alt="service"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* TITLE */}
              <h2 className="text-slate-800 text-lg md:text-xl font-bold text-center min-h-[60px] leading-snug">
                {service.title}
              </h2>

              {/* CATEGORY */}
              <div className="mt-2 text-center">
                <span className="inline-block bg-white border border-cyan-200 text-cyan-700 text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                  {service.category}
                </span>
              </div>

              {/* PRICE */}
              <div className="mt-5 text-center">
                <span className="inline-block bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-black px-6 py-2 rounded-full shadow-lg text-lg">
                  {service.charge}
                </span>
              </div>

              {/* BUTTONS */}
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => openApplyForm(service)}
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition-all duration-300"
                >
                  🚀 Apply
                </button>

                <a
                  href="https://wa.me/918840201416"
                  target="_blank"
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-2xl font-bold text-center shadow-lg hover:scale-105 transition-all duration-300"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="text-center text-slate-500 mt-10 text-sm tracking-wide">
          © 2026 JPG PAN SERVICE • Developed by GPS Info Tech • All
          Rights Reserved.
        </div>
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
<div className="fixed bottom-5 right-5 z-50">

  {/* PULSE WAVES */}
  <span className="absolute inline-flex h-10 w-10 rounded-full bg-green-400 opacity-50 animate-ping"></span>

  {/* BUTTON */}
  <a
    href="https://wa.me/918840201416?text=Hello%20JPG%20PAN%20SERVICE"
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
  >
    <FaWhatsapp size={22} />
  </a>

</div>

      {/* APPLY MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[30px] w-full max-w-md p-6 shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-500"
            >
              ×
            </button>

            <h2 className="text-3xl font-black text-slate-800 mb-2">
              Apply Service
            </h2>

            <p className="text-slate-500 mb-6">{selectedService?.title}</p>

            <form onSubmit={submitApplication} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none"
              />

              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                required
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none"
              />

              <textarea
                name="details"
                placeholder="Enter Details"
                required
                value={formData.details}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none h-28"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
