interface Props {
  service: any;
  onApply: () => void;
}

export default function ServiceCard({
  service,
  onApply,
}: Props) {

  return (

    <div className="group relative overflow-hidden rounded-[30px] bg-white/70 backdrop-blur-3xl border border-white/60 p-6 shadow-[0_20px_60px_rgba(59,130,246,0.20)] hover:scale-[1.04] hover:-translate-y-2 transition-all duration-500">

      {/* Blur Effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">

        {/* Logo */}
        <div className="w-20 h-20 rounded-3xl overflow-hidden bg-white p-3 shadow-xl mb-5 mx-auto border border-gray-200 group-hover:rotate-6 transition duration-500">

          <img
            src={service.logo}
            alt={service.title}
            className="w-full h-full object-contain"
          />

        </div>

        {/* Title */}
        <h2 className="text-slate-800 text-xl font-bold text-center leading-snug min-h-[60px]">

          {service.title}

        </h2>

        {/* Price */}
        <div className="mt-4 text-center">

          <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold px-5 py-2 rounded-full shadow-lg text-sm">

            {service.charge}

          </span>

        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">

          <button
            onClick={onApply}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-105 text-white py-3 rounded-2xl font-bold transition duration-300 text-center shadow-xl"
          >
            🚀 Apply
          </button>

          <a
            href={`https://wa.me/918840201416?text=${encodeURIComponent(
              `Hello JPG PAN SERVICE,\n\nMujhe "${service.title}" service ke bare me jankari chahiye.`
            )}`}
            target="_blank"
            className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 text-white py-3 rounded-2xl font-bold transition duration-300 text-center shadow-xl"
          >
            💬 WhatsApp
          </a>

        </div>

      </div>

    </div>

  );

}