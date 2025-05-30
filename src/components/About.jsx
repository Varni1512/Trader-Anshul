import React from 'react';
import aboutImage from '../assets/about.jpg';

function About() {
  return (
    <section className="bg-white py-16 px-4 md:px-20 text-black">
      <div
        className="max-w-7xl w-full mx-auto p-8 md:p-10 border rounded-lg border-gray-400/50 shadow-lg relative overflow-hidden"
        style={{
          fontFamily: "'Inria Sans', sans-serif",
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >

        {/* Main content */}
        <div className="relative z-10">
          <h2
            className="text-black mb-8 border-b-2 border-[#2C5530] inline-block"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '100%',
            }}
          >
            About Me
          </h2>
          

          <ul
            className="space-y-6 text-base  list-none"
            style={{
              fontFamily: '"Times New Roman", serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '150%',
            }}
          >
            <li>
              • I’m a stock market trader who comes from an engineering background. Like most beginners, I went through the usual path — mentors, trading books, weekend courses. But after all that, one truth stood out:
            </li>
            <li>
              • Trading can’t be taught. It’s a skill that takes time, experience, and self-awareness to develop.
            </li>
            <li>
              • I’m also a huge cricket fan. And every time legends like SACHIN TENDULKAR, RAHUL DRAVID AND VIRAT KOHLI talk about game awareness, they echo something simple: Keep it simple. Enjoy the game.
            </li>
            <li>
              • That, to me, is the core of trading. You don’t need complicated setups or secret indicators. You need clarity, discipline, and the ability to stay grounded.
            </li>
            <li>
              • I still remember my first trade—hands trembling as I hit ‘buy’, heart racing as I watched the P&L tick up and down. Everyone goes through that stage...
            </li>
            <li>
              • This website is my space. To document my trades, share what I’ve learned, and hopefully help traders who are tired of the noise, the hype, and the “get-rich” nonsense.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
