import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-16 max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Connect with Us!</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center">
          <FiPhone className="text-2xl mb-2 text-blue-700" />
          <p>(02) 456-7890</p>
        </div>
        <div className="flex flex-col items-center">
          <FiMail className="text-2xl mb-2 text-blue-700" />
          <p>info@trystglobal.com</p>
        </div>
        <div className="flex flex-col items-center">
          <FiMapPin className="text-2xl mb-2 text-blue-700" />
          <p>No 121 St.Joseph’s Road Kanuwana, Jaela</p>
          <p>Sri Lanka • Vietnam</p>
        </div>
      </div>
    </section>
  );
}
