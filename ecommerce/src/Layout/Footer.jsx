import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#4a1f0f] text-[#e7d6c9] px-10 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Logo + Description */}
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-[#d4a373] text-black w-8 h-8 flex items-center justify-center rounded-full">
              C
            </span>
            Clothing.
          </h1>

          <p className="text-sm mt-4 text-[#c9b3a6] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Contact Icons */}
          <div className="flex gap-4 mt-5">

            <div className="flex items-center gap-2 text-sm">
              <Phone size={16} />
              <span>+0123-456-789</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Mail size={16} />
              <span>example@gmail.com</span>
            </div>

          </div>
        </div>

        {/* Company */}
        <div>
          <h2 className="font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm text-[#c9b3a6]">
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Customer Services */}
        <div>
          <h2 className="font-semibold mb-4">Customer Services</h2>
          <ul className="space-y-2 text-sm text-[#c9b3a6]">
            <li>My Account</li>
            <li>Track Your Order</li>
            <li>Return</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Info + Address */}
        <div>
          <h2 className="font-semibold mb-4">Our Information</h2>
          <ul className="space-y-2 text-sm text-[#c9b3a6]">
            <li>Privacy</li>
            <li>User Terms & Condition</li>
            <li>Return Policy</li>
          </ul>

          <div className="mt-5 flex items-start gap-2 text-sm text-[#c9b3a6]">
            <MapPin size={16} className="mt-1" />
            <p>
              8502 Preston Rd. <br />
              Inglewood, Maine 98380
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#7a3a1d] mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-sm text-[#c9b3a6]">
        <p>Copyright © 2024 Clothing Website Design. All Rights Reserved.</p>

        <div className="flex gap-4 mt-3 md:mt-0">
          <span>English</span>
          <span>|</span>
          <span>USD</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;