import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="py-12 md:py-48 px-4 md:px-8 flex flex-col md:flex-row justify-between items-start">
      {/* Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15949.878263588562!2d30.146559999999994!3d-1.9660799999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m1!3e6!5e0!3m2!1sen!2srw!4v1730277965048!5m2!1sen!2srw"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
      ></iframe>

      {/* Contact Information */}
      <div className="mt-6 md:mt-0 bg-white p-6 md:p-8 shadow-md rounded-lg border max-w-md mx-auto">
        <div className="grid gap-8">
          <div>
            <h1 className="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
            <p className="text-sm text-gray-500 mt-4">
            Need help with your language journey? Reach out—we're here to assist you.
            </p>
            
            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Email</h2>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="bg-pink-600 h-10 w-10 rounded-full flex items-center justify-center">
                    {/* Email Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 479.058 479.058" aria-label="Email Icon">
                      <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                    </svg>
                  </div>
                  <a href="mailto:fluentfusionhub@gmail.com" className="text-black text-sm ml-4">
                    <small className="block">Mail</small>
                    <strong>fluentfusionhub@gmail.com</strong>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Socials</h2>
              <ul className="flex mt-4 space-x-4">
                {/* Social Media Links */}
                <SocialLink href="https://www.facebook.com/niyongabo.jesseowen/" iconPath="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.789 4.658-4.789 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.762v2.308h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.595 1.325-1.325V1.325C24 .595 23.405 0 22.675 0z" />
                <SocialLink href="https://www.linkedin.com/in/ngabo-dev/" iconPath="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM7.5 19.25H4.25V10H7.5v9.25zM5.875 8.75C5.013 8.75 4.25 7.987 4.25 7.125 4.25 6.263 5.013 5.5 5.875 5.5 6.738 5.5 7.5 6.263 7.5 7.125 7.5 7.987 6.738 8.75 5.875 8.75zM19.25 19.25h-3.25v-4.5c0-1.191-.021-2.725-1.661-2.725-1.662 0-1.916 1.296-1.916 2.634v4.591h-3.25V10h3.125v1.256h.044c.434-.822 1.494-1.688 3.075-1.688 3.291 0 3.896 2.167 3.896 4.985v5.697z" />
                <SocialLink href="https://x.com/niyongaboJea/" iconPath="M24 4.557c-.885.392-1.83.654-2.825.775a4.932 4.932 0 002.163-2.724 9.865 9.865 0 01-3.13 1.197A4.92 4.92 0 0016.616 3c-2.735 0-4.95 2.215-4.95 4.95 0 .388.043.765.128 1.125C7.728 8.89 4.1 6.863 1.671 3.72a4.93 4.93 0 00-.668 2.486c0 1.715.874 3.23 2.202 4.118a4.904 4.904 0 01-2.24-.618v.06c0 2.396 1.704 4.392 3.966 4.842a4.928 4.928 0 01-2.232.085c.631 1.966 2.455 3.396 4.612 3.436a9.867 9.867 0 01-6.102 2.105c-.397 0-.788-.023-1.175-.068a13.9 13.9 0 007.548 2.213c9.056 0 14.004-7.507 14.004-14.004 0-.215-.005-.429-.015-.643A10.024 10.024 0 0024 4.557z" />
                <SocialLink href="https://www.instagram.com/j.e.e.a.n/" iconPath="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.063 2.633.328 3.608 1.302.976.976 1.241 2.243 1.302 3.608.059 1.265.071 1.645.071 4.849s-.012 3.584-.07 4.849c-.063 1.366-.328 2.633-1.302 3.608-.976.976-2.243 1.241-3.608 1.302-1.265.059-1.645.071-4.849.071s-3.584-.012-4.849-.07c-1.366-.063-2.633-.328-3.608-1.302-.976-.976-1.241-2.243-1.302-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.063-1.366.328-2.633 1.302-3.608.976-.976 2.243-1.241 3.608-1.302C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.332.014 7.053.072c-1.289.06-2.523.33-3.685 1.492C2.207 3.725 1.937 4.959 1.877 6.248.839 7.526.824 7.936.824 12c0 4.064.015 4.475.073 5.753.06 1.289.33 2.523 1.492 3.685C4.725 22.793 5.959 23.063 7.248 23.123 8.526 24.161 8.936 24.176 12 24.176s3.474-.015 4.752-.073c1.289-.06 2.523-.33 3.685-1.492 1.163-1.162 1.433-2.396 1.493-3.685.058-1.278.073-1.688.073-5.752 0-4.064-.015-4.475-.073-5.753-.06-1.289-.33-2.523-1.492-3.685-1.162-1.162-2.396-1.433-3.685-1.492C15.475 2.014 15.064 2 12 2z" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

const SocialLink = ({ href, iconPath }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <div className="bg-pink-600 h-10 w-10 rounded-full flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 24 24" aria-label="Social Icon">
        <path d={iconPath} />
      </svg>
    </div>
  </a>
);

export default Contact;
