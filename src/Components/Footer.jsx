import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-4 gap-10 mb-10">
          
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white">
              Course<span className="text-indigo-400">Cart</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Learn without limits. Top-rated courses from expert instructors — build skills that matter.
            </p>
            <div className="flex gap-3 mt-5">
              {/* Twitter */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-indigo-600 flex items-center justify-center transition-colors">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-indigo-600 flex items-center justify-center transition-colors">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center transition-colors">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Courses</h4>
            <ul className="space-y-2 text-sm">
              {["Web Development", "Data Science", "Mobile Development", "DevOps", "UI/UX Design", "Artificial Intelligence"].map((item) => (
                <li key={item}>
                  <Link to="/" className="hover:text-indigo-400 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "Careers", "Blog", "Press", "Affiliate Program", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-indigo-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 text-sm">
              {["Help Center", "Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-indigo-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <p className="text-xs mb-2">Subscribe to newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="bg-white/10 text-white text-xs px-3 py-2 rounded-l-lg outline-none flex-1 placeholder-gray-500 border border-white/10 focus:border-indigo-500"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-2 rounded-r-lg transition-colors">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex items-center justify-between text-xs">
          <p>© 2025 CourseCard. All rights reserved.</p>
          <p className="text-gray-500">
            Made with <span className="text-red-500">❤️</span> by{" "}
            <span className="text-indigo-400 font-semibold">Girdhari Patel</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;