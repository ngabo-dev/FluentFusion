// src/pages/Resources.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Resources = () => {
  return (
    <>
    <Navbar />
    <div className="bg-gray-50 min-h-screen pt-16">
      {/* Header Section */}
      <header className="bg-green-600 text-white py-10 text-center">
        <h1 className="text-5xl font-bold">Learning Resources</h1>
        <p className="mt-4 text-lg">
          Tools, tips, and inspiration to help you master languages.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section: Learning Materials */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Language Learning Guides</h2>
          <p className="text-lg text-gray-600 mb-4">
            Start your journey with these essential guides and tools:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-4">
            <li><a href="/grammar-guides" className="text-green-500 hover:underline">Grammar Essentials</a>: Simplified grammar lessons for all levels.</li>
            <li><a href="/vocabulary-lists" className="text-green-500 hover:underline">Thematic Vocabulary</a>: Word lists for everyday conversations and beyond.</li>
            <li><a href="/pronunciation-tips" className="text-green-500 hover:underline">Perfect Pronunciation</a>: Learn sounds with audio and native tips.</li>
          </ul>
        </section>

        {/* Section: Practice Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Interactive Practice Tools</h2>
          <p className="text-lg text-gray-600 mb-4">
            Engage actively with tools designed to sharpen your skills:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-4">
            <li><a href="/flashcards" className="text-green-500 hover:underline">Digital Flashcards</a>: Memorize vocabulary faster with spaced repetition.</li>
            <li><a href="/worksheets" className="text-green-500 hover:underline">Practice Sheets</a>: Printables for writing and comprehension exercises.</li>
            <li><a href="/listening-exercises" className="text-green-500 hover:underline">Listening Exercises</a>: Improve your ears for native conversations.</li>
          </ul>
        </section>

        {/* Section: Recommended Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Recommended Tools</h2>
          <p className="text-lg text-gray-600 mb-4">
            Explore these essential tools for immersive learning:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-4">
            <li><a href="https://www.linguee.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">Linguee</a>: Find contextual word meanings and examples.</li>
            <li><a href="https://www.tandem.net" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">Tandem</a>: Connect with native speakers to practice live conversations.</li>
            <li><a href="https://www.forvo.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">Forvo</a>: Hear authentic pronunciations from native speakers.</li>
          </ul>
        </section>

        {/* Section: Cultural Content */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Cultural Inspirations</h2>
          <p className="text-lg text-gray-600 mb-4">
            Understand the people and traditions behind the languages:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-4">
            <li><a href="/podcasts" className="text-green-500 hover:underline">Language Podcasts</a>: Enjoy inspiring stories while learning.</li>
            <li><a href="/movies" className="text-green-500 hover:underline">Movies & Shows</a>: Watch and learn through entertaining media.</li>
            <li><a href="/culture-tips" className="text-green-500 hover:underline">Cultural Tips</a>: Adapt to customs and traditions seamlessly.</li>
          </ul>
        </section>

        {/* Section: Study Plans */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Custom Study Plans</h2>
          <p className="text-lg text-gray-600 mb-4">
            Achieve fluency with a step-by-step approach designed for you:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-4">
            <li><a href="/beginner-plan" className="text-green-500 hover:underline">Beginner Plan</a>: Build your foundation in 30 days.</li>
            <li><a href="/intermediate-plan" className="text-green-500 hover:underline">Intermediate Plan</a>: Strengthen skills over 60 days.</li>
            <li><a href="/advanced-plan" className="text-green-500 hover:underline">Advanced Plan</a>: Master idioms and nuances with ease.</li>
          </ul>
        </section>

        {/* Section: Let's Talk */}
        <section className="bg-gray-100 py-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Let’s Talk</h2>
          <p className="text-lg text-gray-600 mb-6">
            Have a big idea or a brand to develop and need help? Reach out—we’d love to hear about it.
          </p>
          <a
            href="/contact"
            className="bg-green-600 text-white px-6 py-3 text-lg font-semibold rounded hover:bg-green-700 transition"
          >
            Contact Us
          </a>
        </section>
      </main>
    </div>
    <Footer />
    </>
  );
};

export default Resources;
