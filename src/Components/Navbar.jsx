import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const wishlistData = useSelector((store) => store.geeks.wishlistCourse);
  const cartData = useSelector((store) => store.geeks.cartCourses);
  const courses = useSelector((store) => store.geeks.courses);
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const filtered = query.trim()
    ? courses
        .filter(
          (c) =>
            c.title.toLowerCase().includes(query.toLowerCase()) ||
            c.category.toLowerCase().includes(query.toLowerCase()) ||
            c.instructor.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 5)
    : [];

  function handleSelect(id) {
    setQuery("");
    setShowResults(false);
    navigate(`/course/${id}`);
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-indigo-600 tracking-tighter hover:text-indigo-700 transition-colors">
            Course<span className="text-gray-900">Card</span>
              </span>
            </Link>
          </div>

          <div className="flex-1 max-w-xl relative hidden sm:block">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setShowResults(true); }}
                onFocus={() => setShowResults(true)}
                onBlur={() => setTimeout(() => setShowResults(false), 200)}
                placeholder="Search courses, categories, instructors..."
                className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <svg className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {showResults && filtered.length > 0 && (
              <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                {filtered.map((course) => (
                  <button key={course.id} onMouseDown={() => handleSelect(course.id)}
                    className="w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 transition-colors">
                    <img src={course.image} alt={course.title}
                      className="w-10 h-10 rounded object-cover flex-shrink-0"
                      onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=100&q=80"; }} />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{course.title}</p>
                      <p className="text-xs text-indigo-500">{course.category}</p>
                    </div>
                    <span className="ml-auto text-sm font-bold text-gray-700">${course.price}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link to="/wishlist" className="group flex items-center p-2 rounded-full hover:bg-gray-100 transition-colors relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="hidden sm:block ml-1 text-sm font-medium text-gray-700 group-hover:text-red-500">Wishlist</span>
              {wishlistData.length > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">{wishlistData.length}</span>
              )}
            </Link>
            <Link to="/Cart" className="group flex items-center p-2 rounded-full hover:bg-gray-100 transition-colors relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="hidden sm:block ml-1 text-sm font-medium text-gray-700 group-hover:text-indigo-600">Cart</span>
              {cartData.length > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full">{cartData.length}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
