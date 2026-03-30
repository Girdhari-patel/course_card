import React, { useState, useMemo } from "react";
import { useFetchCourseData } from "../hooks";
import CourseCard from "./CourseCard";

const CATEGORIES = ["All", "Web Development", "Data Science", "Mobile Development", "DevOps", "Design", "Artificial Intelligence", "Web Design"];

const CourseGrid = () => {
  const courseData = useFetchCourseData();
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filtered = useMemo(() => {
    let data = activeCategory === "All"
      ? courseData
      : courseData.filter((c) => c.category === activeCategory);

    if (sortBy === "price-asc") data = [...data].sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") data = [...data].sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") data = [...data].sort((a, b) => b.rating - a.rating);
    else if (sortBy === "students") data = [...data].sort((a, b) => b.studentsEnrolled - a.studentsEnrolled);

    return data;
  }, [courseData, activeCategory, sortBy]);

  if (!courseData || courseData.length === 0)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );

  // Get only categories that have courses
  const availableCategories = CATEGORIES.filter(
    (cat) => cat === "All" || courseData.some((c) => c.category === cat)
  );

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Courses</h2>
          <p className="mt-1 text-gray-500">
            {filtered.length} course{filtered.length !== 1 ? "s" : ""}{" "}
            {activeCategory !== "All" ? `in ${activeCategory}` : "available"}
          </p>
        </div>

        {/* Filters Row */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex-1 flex flex-wrap gap-2">
            {availableCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-gray-600 border-gray-300 hover:border-indigo-400 hover:text-indigo-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex-shrink-0">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            >
              <option value="default">Sort: Default</option>
              <option value="rating">Highest Rated</option>
              <option value="students">Most Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-xl font-medium">No courses found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((dataObj) => (
              <CourseCard key={dataObj.id} courseData={dataObj} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseGrid;
