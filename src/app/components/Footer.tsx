export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-bold text-lg mb-3">Tryst Global</h3>
          <p>The Apparel Solution Provider</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#sourcing">Global Sourcing</a>
            </li>
            <li>
              <a href="#development">Development Center</a>
            </li>
            <li>
              <a href="#training">Training Center</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">About</h4>
          <ul className="space-y-1">
            <li>
              <a href="#vision">Vision</a>
            </li>
            <li>
              <a href="#mission">Mission</a>
            </li>
            <li>
              <a href="#manufacturing">Manufacturing</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>(02) 456-7890</p>
          <p>info@trystglobal.com</p>
          <p>No 121 St.Joseph’s Road Kanuwana, Jaela</p>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-white/20 pt-4">
        <p>
          &copy; {new Date().getFullYear()} Tryst Global. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
