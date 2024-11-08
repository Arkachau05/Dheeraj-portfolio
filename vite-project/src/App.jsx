import React from 'react';
import img1 from "../src/assets/codechef.jpg";
import img2 from "../src/assets/elabdheeraj.jpg";
import img3 from "../src/assets/hakerrank.jpg";
import Skillset from './Skillset';
import Skillset2 from './Skillset2';

const App = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-center p-8">
        <div>
          <h1 className="text-6xl font-bold mb-4 text-white">Hi, I'm Dheeraj Chandra</h1>
          <p className="text-xl mb-8 text-white">A passionate Web Developer and Programmer</p>
          <a href="#certificates" className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-6 rounded-lg text-xl font-semibold transition duration-300">See My Certificates</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 bg-black text-white relative overflow-hidden flex justify-center items-center">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-black z-0"></div>

  {/* Content Container */}
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center relative z-10 px-4">
    {/* Left Side Text Content */}
    <div className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0">
      <h2 className="text-6xl font-extrabold text-yellow-500 mb-6 leading-tight">
        About Me
      </h2>
      
      {/* About Me Text */}
      <p className="text-xl mb-6 max-w-3xl mx-auto lg:mx-0 leading-relaxed text-white opacity-90">
        Hello! I’m a <span className="text-blue-500 font-semibold">Computer Science and Engineering student</span> with a passion for exploring the endless possibilities of <span className="text-green-500 font-semibold">technology</span>. My interests span from <span className="text-yellow-500 font-semibold">software development</span> and <span className="text-yellow-300">algorithms</span> to emerging fields like <span className="text-purple-500 font-semibold">artificial intelligence</span> and <span className="text-green-400 font-semibold">cybersecurity</span>.
      </p>

      <p className="text-xl mb-6 max-w-3xl mx-auto lg:mx-0 leading-relaxed text-white opacity-90">
        I enjoy <span className="italic text-cyan-400">coding</span> and <span className="italic text-pink-400">problem-solving</span>, and I’m always looking to sharpen my skills through hands-on projects and team collaborations.
      </p>

      <p className="text-xl mb-6 max-w-3xl mx-auto lg:mx-0 leading-relaxed text-white opacity-90">
        I’m also actively involved in <span className="text-orange-400">various tech-related clubs</span>, hackathons, and volunteer activities, where I get to apply my knowledge, work with like-minded individuals, and learn from others. Outside of my academic life, I enjoy <span className="italic text-pink-300">gaming, reading about tech trends, and playing sports</span>, which help me stay balanced and inspired.
      </p>

      <p className="text-xl mb-6 max-w-3xl mx-auto lg:mx-0 leading-relaxed text-white opacity-90">
        I’m excited to continue learning, growing, and making a positive impact through <span className="text-green-500 font-semibold">technology</span>, and I look forward to contributing to innovative solutions that make a difference!
      </p>
      
      {/* Call to Action */}
      <div className="mt-8">
        <a href="#contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-8 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
          Get in Touch
        </a>
      </div>
    </div>

    
  </div>
</section>

<Skillset/>
<Skillset2/>
      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-8 bg-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-500 mb-8">My Certificates</h2>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Certificate 1 */}
            <a href={img1} target="_blank" rel="noopener noreferrer" className="relative rounded-lg overflow-hidden shadow-xl hover:scale-105 transform transition duration-300">
              <img src={img1} alt="Codechef Certificate" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                Codechef Certificate
              </div>
            </a>
            {/* Certificate 2 */}
            <a href={img2} target="_blank" rel="noopener noreferrer" className="relative rounded-lg overflow-hidden shadow-xl hover:scale-105 transform transition duration-300">
              <img src={img2} alt="Elabdheeraj Certificate" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                Elab Certificate
              </div>
            </a>
            {/* Certificate 3 */}
            <a href={img3} target="_blank" rel="noopener noreferrer" className="relative rounded-lg overflow-hidden shadow-xl hover:scale-105 transform transition duration-300">
              <img src={img3} alt="HackerRank Certificate" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                HackerRank Certificate
              </div>
            </a>
          </section>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-black text-center">
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold text-yellow-500 mb-8">Contact Me</h2>
    <p className="text-lg mb-6 text-white">Feel free to reach out for any opportunities, questions, or collaborations!</p>

    {/* Contact Information */}
    <div className="text-white mb-6">
      <p className="text-lg">
        <span className="font-semibold">Email:</span> <a href="mailto:dheerajchndra@gmail.com" className="text-yellow-500 hover:text-yellow-400">dheerajchndra@gmail.com</a>
      </p>
      <p className="text-lg">
        <span className="font-semibold">Phone:</span> <a href="tel:+919291303035" className="text-yellow-500 hover:text-yellow-400">+91 92913 03035</a>
      </p>
    </div>

    {/* Contact Details Design */}
    <div className="flex justify-center items-center gap-12">
      {/* Email Icon */}
      <div className="flex flex-col items-center">
        <a href="mailto:dheerajchndra@gmail.com" className="text-yellow-500 text-4xl hover:text-yellow-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.586 7.586a2 2 0 002.828 0L21 8M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
          </svg>
        </a>
        <p className="mt-2 text-white">Email</p>
      </div>

      {/* Phone Icon */}
      <div className="flex flex-col items-center">
        <a href="tel:+919291303035" className="text-yellow-500 text-4xl hover:text-yellow-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
          </svg>
        </a>
        <p className="mt-2 text-white">Phone</p>
      </div>
    </div>
  </div>
</section>
<footer className="bg-black text-white py-4">
      <div className="text-center">
        <p>&copy; 2024 Dheeraj Chandra</p>
      </div>
    </footer>
    </div>
  );
}

export default App;
