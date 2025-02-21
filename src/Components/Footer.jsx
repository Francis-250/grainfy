import { menu } from "../assets/Assets";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 p-6">
      {/* Top  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
        <div className="flex items-center gap-4 p-4 rounded-lg">
          <BsCart className="text-3xl text-gray-700" />
          <div>
            <p className="text-lg font-semibold text-gray-900">
              Fast & Secure Checkout
            </p>
            <p className="text-sm text-gray-600">
              Experience seamless and safe transactions.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-lg">
          <BsCart className="text-3xl text-gray-700" />
          <div>
            <p className="text-lg font-semibold text-gray-900">
              Easy Exchange & Returns
            </p>
            <p className="text-sm text-gray-600">
              Hassle-free product exchanges & returns.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-lg">
          <BsCart className="text-3xl text-gray-700" />
          <div>
            <p className="text-lg font-semibold text-gray-900">
              24/7 Customer Support
            </p>
            <p className="text-sm text-gray-600">
              We are always here to assist you.
            </p>
          </div>
        </div>
      </div>

      {/* Subscription */}
      <div className="flex flex-col items-center text-center gap-3">
        <p className="text-2xl font-bold text-gray-900">
          Subscribe & Get 20% Off
        </p>
        <p className="text-lg text-gray-600">
          Join our newsletter for exclusive deals & updates.
        </p>
        <div className="flex w-full gap-2 rounded-lg">
          <input
            className="px-2 py-3 w-[90%] border border-gray-300 text-sm outline-none"
            placeholder="Enter your email..."
          />
          <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
        {/* Left */}
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-bold uppercase text-gray-900">Grainfy</p>
          <p className="text-sm text-gray-600">
            Your one-stop shop for high-quality products at unbeatable prices.
            Shop with confidence!
          </p>
        </div>

        {/* Middle */}
        <div className="flex flex-col gap-3">
          <p className="text-xl font-bold uppercase text-gray-900">
            Quick Links
          </p>
          <div className="flex flex-col gap-2">
            {menu.map((menu, i) => (
              <Link
                key={i}
                to={menu.link}
                className="text-sm text-gray-600 hover:text-gray-900 transition"
              >
                {menu.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right  */}
        <div className="flex flex-col gap-3">
          <p className="text-xl font-bold uppercase text-gray-900">
            Get in Touch
          </p>
          <p className="text-sm text-gray-600">Phone: +220426519536</p>
          <p className="text-sm text-gray-600">Email: support@grainfy.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
