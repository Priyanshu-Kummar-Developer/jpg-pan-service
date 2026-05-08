import { useState } from "react";
import emailjs from "emailjs-com";

interface Props {
  service: any;
  onClose: () => void;
}

export default function ApplyModal({
  service,
  onClose,
}: Props) {

  const [formData, setFormData] = useState<any>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    try {

      await emailjs.send(
        "service_ihp2arm",
        "template_qozg3o1",
        {
          to_email: formData.email,

          service_name: service.title,

          customer_name: formData.name,

          customer_mobile: formData.mobile,

          customer_details: JSON.stringify(formData, null, 2),
        },
        "e0x3oL7FJYj_huyya"
      );

      const message = `Hello JPG PAN SERVICE,

Maine "${service.title}" service apply ki hai.

Name: ${formData.name}
Mobile: ${formData.mobile}

Mera kaam kab tak ho jayega?`;

      window.open(
        `https://wa.me/918840201416?text=${encodeURIComponent(message)}`,
        "_blank"
      );

      alert("Application Submitted Successfully");

      onClose();

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    }

  };

  return (

    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">

      <div className="bg-white rounded-3xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">

        <h2 className="text-2xl font-bold mb-2">
          Apply For
        </h2>

        <p className="text-slate-500 mb-6">
          {service.title}
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          {service.fields.map((field: any, index: number) => (

            field.type === "textarea" ? (

              <textarea
                key={index}
                name={field.name}
                placeholder={field.label}
                required
                onChange={handleChange}
                className="w-full border p-3 rounded-xl h-28 outline-none"
              />

            ) : (

              <input
                key={index}
                type={field.type}
                name={field.name}
                placeholder={field.label}
                required
                onChange={handleChange}
                className="w-full border p-3 rounded-xl outline-none"
              />

            )

          ))}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-bold shadow-xl hover:scale-[1.02] transition"
          >
            Submit Application
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full bg-gray-200 py-3 rounded-xl font-semibold"
          >
            Cancel
          </button>

        </form>

      </div>

    </div>

  );

}