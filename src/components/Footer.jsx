import React from 'react'

const Footer = () => {
  return (
<footer class="bg-emerald-800 font-sans py-10 tracking-wide">
      <div class="py-14 px-6 sm:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          <div class="lg:col-span-2">
            <a href='javascript:void(0)'><img src="/Screenshot from 2024-11-22 17-35-34.png" alt="logo"
              class='w-20 rounded-full mb-8 ' /></a>
            <p class="text-white text-sm">Unlock the world of languages with FLUENTFUSION. Your personalized dashboard is designed to guide you through your learning experience, making it engaging and effective.</p>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-8 text-white">Navigation</h4>
            <ul class="space-y-4">
              <li><a href="/" class="text-white hover:text-white text-sm">Home</a></li>
              <li><a href="/About" class="text-white hover:text-white text-sm">About</a></li>
              <li><a href="/Resourses" class="text-white hover:text-white text-sm">Resourses</a></li>
              <li><a href="contact" class="text-white hover:text-white text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-8 text-white">Follow Us</h4>
            <ul className="flex gap-4">
              <li>
                <a href="https://www.facebook.com/niyongabo.jesseowen/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-300 inline hover:fill-white w-6 h-6" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ngabo-dev/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-300 inline hover:fill-white w-6 h-6" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.75h-2.79v-8.37h2.79v8.37z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://x.com/niyongaboJea/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-300 inline hover:fill-white w-6 h-6" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M21 6.8c-.8.4-1.6.6-2.5.7.9-.5 1.6-1.4 1.9-2.5-.8.5-1.7.8-2.6 1a4.3 4.3 0 0 0-7.3 3c0 .3 0 .5.1.8C7.7 11 4.1 9.2 1.6 6.5c-.3.5-.5 1.1-.5 1.7 0 1.1.6 2.1 1.6 2.6-.5 0-1-.2-1.5-.4 0 0 0 .1 0 .2 0 1.6 1.1 2.9 2.5 3.3-.3.1-.6.2-.9.2-.2 0-.5 0-.8-.1.5 1.5 2 2.6 3.8 2.6-1.4 1-3.1 1.5-4.9 1.5-.3 0-.6 0-.9-.1 1.6 1 3.6 1.5 5.6 1.5 6.7 0 10.4-5.6 10.4-10.4 0-.2 0-.4 0-.6.7-.5 1.2-1.1 1.6-1.8z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/j.e.e.a.n/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-300 inline hover:fill-white w-6 h-6" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2.2c3.1 0 3.5 0 4.8.1 1.2 0 2.1.2 2.6.4.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.2.5.4 1.4.4 2.6.1 1.2.1 1.6.1 4.7s0 3.5-.1 4.7c0 1.2-.2 2.1-.4 2.6-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.5.2-1.4.4-2.6.4-1.3 0-1.7 0-4.8-.1-3.1 0-3.5 0-4.8-.1-1.2 0-2.1-.2-2.6-.4-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.2-.5-.4-1.4-.4-2.6-.1-1.2-.1-1.6-.1-4.7s0-3.5.1-4.7c0-1.2.2-2.1.4-2.6.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .5-.2 1.4-.4 2.6-.4zm0-1.2c-3.2 0-3.6 0-4.9.1-1.3 0-2.4.2-3.2.5-1 .3-1.9.8-2.6 1.5-.7.7-1.2 1.6-1.5 2.6-.3 1.2-.5 2.4-.5 3.5 0 1.1 0 1.5.1 2.9 0 1.3.2 2.4.5 3.3.3 1.1.8 2 1.5 2.6.7.7 1.6 1.2 2.6 1.5.8.3 1.9.5 3.2.5 1.3 0 1.6 0 4.9-.1 3.2 0 3.6 0 4.9-.1 1.3 0 2.4-.2 3.2-.5 1-.3 1.9-.8 2.6-1.5.7-.7 1.2-1.6 1.5-2.6.3-1.2.5-2.4.5-3.5 0-1.1 0-1.5-.1-2.9 0-1.3-.2-2.4-.5-3.3-.3-1.1-.8-2-1.5-2.6-.7-.7-1.6-1.2-2.6-1.5-.8-.3-1.9-.5-3.2-.5-1.3 0-1.6 0-4.9-.1z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M12 5.4a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2zm0 11.1a4.5 4.5 0 1 1 0-9.1 4.5 4.5 0 0 1 0 9.1z" clipRule="evenodd" />
                    <circle cx="18.4" cy="5.6" r=".6" fill="currentColor" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-8 text-white">Contact Us</h4>
            <div class="space-y-4">
              <p class="text-white text-sm">Street: KK 400 st 19</p>
              <p class="text-white text-sm">fluentfusionhub@gmail.com </p>
              <p class="text-white text-sm">+250787007387 </p>
            </div>
          </div>

        </div>
      </div>

      <div class="text-center py-5 bg-emerald-800">
        <p class='text-white text-sm'>©FluentFusion. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer