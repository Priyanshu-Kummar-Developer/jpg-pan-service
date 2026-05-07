import { useState } from "react";

export default function ServicePortal() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const services = [
    {
      title: "New RC PDF",
      charge: "₹20/",
      logo: "https://cdn-icons-png.flaticon.com/512/2554/2554936.png",
    },
    {
      title: "Find Lost Pan",
      charge: "₹100",
      logo: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    },
    {
      title: "Voter Card Advance PDF",
      charge: "₹20",
      category: "Voter",
      logo: "https://cdn-icons-png.flaticon.com/512/681/681494.png",
    },
    {
      title: "UID To Mobile Owner Details",
      charge: "₹50",
      category: "Aadhaar",
      logo: "https://cdn-icons-png.flaticon.com/512/3059/3059518.png",
    },
    {
      title: "Mobile Number Owner Details",
      charge: "₹30",
      category: "Mobile",
      logo: "https://cdn-icons-png.flaticon.com/512/724/724664.png",
    },
    {
      title: "UP Edistrict PDF Instant",
      charge: "₹10/PDF",
      category: "Edistrict",
      logo: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
    },
    {
      title: "Masked Pan",
      charge: "₹1/Search",
      category: "PAN Card",
      logo: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    },
    {
      title: "Pan Name Verify",
      charge: "₹2/-",
      category: "PAN Card",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      title: "UP Kisan Card",
      charge: "₹20/PDF",
      category: "Kisan",
      logo: "https://cdn-icons-png.flaticon.com/512/2909/2909767.png",
    },
    {
      title: "All State Kisan Card",
      charge: "₹20/PDF",
      category: "Kisan",
      logo: "https://cdn-icons-png.flaticon.com/512/2909/2909767.png",
    },
    {
      title: "Pan Card Advance Print",
      charge: "₹20",
      category: "PAN Card",
      logo: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    },
    {
      title: "UP Edistrict Advance",
      charge: "₹10/PDF",
      category: "Edistrict",
      logo: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
    },
    {
      title: "UP Family ID Card",
      charge: "₹5/PDF",
      category: "Family ID",
      logo: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
    },
    {
      title: "IGNOU Result",
      charge: "₹0.50/PDF",
      category: "Education",
      logo: "https://cdn-icons-png.flaticon.com/512/3976/3976626.png",
    },
    {
      title: "Ration Card PDF 2.0",
      charge: "₹20",
      category: "Ration",
      logo: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    },
    {
      title: "OLD RC PDF",
      charge: "₹20/",
      category: "RC & DL",
      logo: "https://cdn-icons-png.flaticon.com/512/2554/2554936.png",
    },
    {
      title: "UP AgriStack Status",
      charge: "Free",
      category: "Kisan",
      logo: "https://cdn-icons-png.flaticon.com/512/2909/2909767.png",
    },
    {
      title: "DL HD PVC",
      charge: "₹20/PDF",
      category: "RC & DL",
      logo: "https://cdn-icons-png.flaticon.com/512/942/942799.png",
    },
    {
      title: "Aadhaar Manual",
      charge: "₹20/PDF",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "DL PDF Download",
      charge: "₹20/PDF",
      category: "RC & DL",
      logo: "https://cdn-icons-png.flaticon.com/512/942/942799.png",
    },
    {
      title: "RC PDF Server II",
      charge: "₹20/",
      category: "RC & DL",
      logo: "https://cdn-icons-png.flaticon.com/512/2554/2554936.png",
    },
    {
      title: "DL Original PDF",
      charge: "₹30",
      category: "RC & DL",
      logo: "https://cdn-icons-png.flaticon.com/512/942/942799.png",
    },
    {
      title: "Download All UP Edistrict Docs",
      charge: "₹20",
      category: "Edistrict",
      logo: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
    },
    {
      title: "UP Old Birth To New Birth",
      charge: "₹120",
      category: "Birth Certificate",
      logo: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    },
    {
      title: "Aadhaar Status Check",
      charge: "Free",
      category: "Aadhaar",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "Pan To UID Find",
      charge: "₹150",
      category: "PAN Card",
      logo: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    },
    {
      title: "Voter Card Manual",
      charge: "₹20",
      logo: "https://cdn-icons-png.flaticon.com/512/681/681494.png",
    },
    {
      title: "Pan Card Manual Print",
      charge: "₹15",
      logo: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    },
    {
      title: "Validate Pan Card",
      charge: "Free",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      title: "Find Aadhaar by UDID",
      charge: "₹30",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "Vehicle PUC Apply",
      charge: "₹60-100",
      logo: "https://cdn-icons-png.flaticon.com/512/854/854894.png",
    },
    {
      title: "Check Vehicles Challan",
      charge: "₹2",
      logo: "https://cdn-icons-png.flaticon.com/512/595/595067.png",
    },
    {
      title: "DL Verification",
      charge: "Free",
      logo: "https://cdn-icons-png.flaticon.com/512/942/942799.png",
    },
    {
      title: "Find Ration By UID",
      charge: "₹10",
      logo: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    },
    {
      title: "Learning Licence",
      charge: "₹150",
      logo: "https://cdn-icons-png.flaticon.com/512/942/942799.png",
    },
    {
      title: "RC Owner Mobile Find",
      charge: "₹20",
      logo: "https://cdn-icons-png.flaticon.com/512/2554/2554936.png",
    },
    {
      title: "Aadhaar Advance",
      charge: "₹20/PDF",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
  ];

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
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 p-8 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.5)] border border-white/10 mb-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.4),_transparent_35%)]"></div>

          <div className="relative z-10 text-center">
            <div className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-slate-700 tracking-[4px] uppercase text-sm font-bold mb-6 shadow-lg">
              Digital Service Portal
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-900 to-cyan-700 drop-shadow-[0_0_25px_rgba(59,130,246,0.35)] leading-tight animate-pulse">
              JPG PAN SERVICE
            </h1>

            <p className="text-slate-700 text-lg md:text-2xl mt-5 font-medium tracking-wide">
              Fast • Secure • Premium Online Government Services
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm md:text-base font-semibold text-slate-800">
              <div className="bg-white/70 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-lg border border-white/60">
                📞 +91 8840201416
              </div>

              <div className="bg-white/70 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-lg border border-white/60">
                ✉️ jpgpanservice@gmail.com
              </div>

              <div className="bg-white/70 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-lg border border-white/60">
                📍 Uttar Pradesh, India
              </div>
            </div>

            <div className="flex justify-center gap-4 flex-wrap mt-8">
              <div className="bg-white/70 border border-white/60 backdrop-blur-2xl px-5 py-3 rounded-2xl text-slate-700 font-semibold shadow-xl">
                35+ Services
              </div>

              <div className="bg-white/10 border border-white/20 backdrop-blur-xl px-5 py-3 rounded-2xl text-slate-700 font-semibold shadow-xl">
                Instant PDF Download
              </div>

              <div className="bg-white/10 border border-white/20 backdrop-blur-xl px-5 py-3 rounded-2xl text-slate-700 font-semibold shadow-xl">
                24×7 WhatsApp Support
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search Services..."
            className="w-full md:w-[400px] px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-white placeholder:text-slate-600 outline-none shadow-xl"
          />

          <div className="flex gap-3 flex-wrap justify-center">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-5 py-3 rounded-2xl text-slate-700 font-semibold shadow-xl ${activeCategory === "All" ? "bg-gradient-to-r from-blue-600 to-cyan-500" : "bg-white/10 border border-white/10 backdrop-blur-xl"}`}
            >
              All Services
            </button>

            <button
              onClick={() => setActiveCategory("Aadhaar")}
              className={`px-5 py-3 rounded-2xl text-slate-700 font-semibold shadow-xl ${activeCategory === "Aadhaar" ? "bg-gradient-to-r from-blue-600 to-cyan-500" : "bg-white/10 border border-white/10 backdrop-blur-xl"}`}
            >
              Aadhaar
            </button>

            <button
              onClick={() => setActiveCategory("PAN Card")}
              className={`px-5 py-3 rounded-2xl text-slate-700 font-semibold shadow-xl ${activeCategory === "PAN Card" ? "bg-gradient-to-r from-blue-600 to-cyan-500" : "bg-white/10 border border-white/10 backdrop-blur-xl"}`}
            >
              PAN Card
            </button>

            <button
              onClick={() => setActiveCategory("RC & DL")}
              className={`px-5 py-3 rounded-2xl text-slate-700 font-semibold shadow-xl ${activeCategory === "RC & DL" ? "bg-gradient-to-r from-blue-600 to-cyan-500" : "bg-white/10 border border-white/10 backdrop-blur-xl"}`}
            >
              RC & DL
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[30px] bg-white/60 backdrop-blur-3xl border border-white/70 p-6 shadow-[0_20px_60px_rgba(59,130,246,0.25)] hover:scale-[1.05] hover:-translate-y-3 hover:rotate-1 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-purple-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl overflow-hidden bg-white p-3 shadow-[0_20px_80px_rgba(255,255,255,0.8)] mb-5 mx-auto border border-gray-200 group-hover:rotate-6 transition duration-500">
                  <img
                    src={
                      service.logo ||
                      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    }
                    alt="service"
                    className="w-full h-full object-contain"
                  />
                </div>

                <h2 className="text-slate-800 text-xl font-bold text-center leading-snug min-h-[60px]">
                  {service.title}
                </h2>

                <div className="mt-4 text-center">
                  <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold px-5 py-2 rounded-full shadow-lg text-sm">
                    {service.charge}
                  </span>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href="tel:+918840201416"
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-105 text-white py-3 rounded-2xl font-bold transition duration-300 text-center shadow-xl"
                  >
                    📞 Call
                  </a>

                  <a
                    href="https://wa.me/918840201416"
                    target="_blank"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 text-white py-3 rounded-2xl font-bold transition duration-300 text-center shadow-xl"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[30px] bg-white/60 backdrop-blur-3xl border border-white/70 p-8 shadow-[0_20px_80px_rgba(255,255,255,0.8)] text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Any Help?</h2>

          <p className="text-slate-600 text-lg mb-6">
            Contact JPG PAN SERVICE For Fast & Trusted Online Government
            Services
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="tel:+918840201416"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold shadow-xl"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/918840201416"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold shadow-xl"
            >
              💬 Chat On WhatsApp
            </a>
          </div>
        </div>

        <div className="text-center text-slate-500 mt-10 text-sm tracking-wide">
          © 2026 JPG PAN SERVICE • Premium Digital Online Portal
        </div>
      </div>
    </div>
  );
}
