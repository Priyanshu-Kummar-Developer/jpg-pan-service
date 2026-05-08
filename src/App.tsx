import { useState } from "react";
import emailjs from "@emailjs/browser";
import services from "./data/services";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT FORM
  const submitApplication = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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
        "e0x3oL7FJYj_huyya"
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
          whatsappMessage
        )}`,
        "_blank"
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
      activeCategory === "All" ||
      service.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-purple-100 p-4 md:p-8">

      <div className="max-w-7xl mx-auto">

        {/* HERO SECTION */}
        <div className="rounded-[40px] bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 p-8 md:p-12 shadow-2xl mb-10 text-center">

          <div className="inline-block px-6 py-2 rounded-full bg-white/20 text-slate-700 tracking-[4px] uppercase text-sm font-bold mb-6">
            Digital Service Portal
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-slate-800">
            JPG PAN SERVICE
          </h1>

          <p className="text-slate-700 text-lg md:text-2xl mt-5 font-medium">
            Fast • Secure • Premium Online Government Services
          </p>

        </div>

        {/* SEARCH */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search Services..."
            className="w-full md:w-[400px] px-5 py-4 rounded-2xl bg-white border border-gray-200 text-black outline-none shadow-xl"
          />

          {/* CATEGORY BUTTONS */}
          <div className="flex gap-3 flex-wrap justify-center">

            <button
              onClick={() => setActiveCategory("All")}
              className={`px-5 py-3 rounded-2xl text-white font-semibold shadow-xl ${
                activeCategory === "All"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500"
                  : "bg-gray-400"
              }`}
            >
              All Services
            </button>

            <button
              onClick={() => setActiveCategory("Aadhaar")}
              className={`px-5 py-3 rounded-2xl text-white font-semibold shadow-xl ${
                activeCategory === "Aadhaar"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500"
                  : "bg-gray-400"
              }`}
            >
              Aadhaar
            </button>

            <button
              onClick={() => setActiveCategory("PAN Card")}
              className={`px-5 py-3 rounded-2xl text-white font-semibold shadow-xl ${
                activeCategory === "PAN Card"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500"
                  : "bg-gray-400"
              }`}
            >
              PAN Card
            </button>

            <button
              onClick={() => setActiveCategory("RC & DL")}
              className={`px-5 py-3 rounded-2xl text-white font-semibold shadow-xl ${
                activeCategory === "RC & DL"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500"
                  : "bg-gray-400"
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
              className="rounded-[30px] bg-white p-6 shadow-xl hover:scale-105 transition-all duration-300"
            >

              <div className="w-20 h-20 rounded-3xl overflow-hidden bg-white p-3 shadow-xl mb-5 mx-auto border border-gray-200">

                <img
                  src={service.logo}
                  alt="service"
                  className="w-full h-full object-contain"
                />

              </div>

              <h2 className="text-slate-800 text-xl font-bold text-center min-h-[60px]">
                {service.title}
              </h2>

              <div className="mt-4 text-center">

                <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold px-5 py-2 rounded-full">
                  {service.charge}
                </span>

              </div>

              <div className="mt-6 flex gap-3">

                <button
                  onClick={() => openApplyForm(service)}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-2xl font-bold hover:scale-105 transition"
                >
                  🚀 Apply
                </button>

                <a
                  href="https://wa.me/918840201416"
                  target="_blank"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-2xl font-bold text-center hover:scale-105 transition"
                >
                  💬 WhatsApp
                </a>

              </div>

            </div>

          ))}

        </div>

        {/* FOOTER */}
        <div className="text-center text-slate-500 mt-10 text-sm tracking-wide">
          © 2026 JPG PAN SERVICE • Premium Digital Online Portal
        </div>

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

            <p className="text-slate-500 mb-6">
              {selectedService?.title}
            </p>

            <form
              onSubmit={submitApplication}
              className="space-y-4"
            >

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