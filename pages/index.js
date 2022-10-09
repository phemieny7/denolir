import Navbar from "./components/navbar"
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import CountUp from 'react-countup';

import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);



  return (
    <div>
      <Navbar />
      <section className="pt-12 z-10">
        {/* Video */}
        <video id="background-video" autoPlay loop muted>
          <source src="/solvideo.mp4" type="video/mp4" />
        </video>
        {/* <div className="shadow"></div> */}
        


        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 sm:pt-40 lg:py-20 lg:pb-4 lg:pl-20 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm md:max-w-xl lg:text-left">
            <h1 className="leading-none dark:text-slate-100 text-zinc-900 text-6xl hero-text">Powerful for Developers. <br />
            Fast for Everyone.
            </h1>
            <div className="inline-block md:flex flex-col mt-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a href="#" className="px-8 py-3 my-1 text-xs md:text-md rounded-full bg-green-400 hover:bg-slate-50 text-zinc-900 flex items-center justify-center">
                <span className="inline-block uppercase"> start building</span></a>
              <a href="#" className="px-8 py-3 my-1 text-xs md:text-md uppercase rounded-full border border-slate-50 text-slate-50 hover:text-zinc-900 hover:bg-slate-50 flex items-center justify-center">
                 read documentation</a>
            </div>
          </div>


        </div>

        <div className="bg-black flex flex-col justify-center p-2 md:p-6 pb-12">
          <p className="text-white text-xl font-semibold pl-1 md:pl-28 text-center md:text-left md:max-w-2xl">Solana is a decentralized blockchain built to enable scalable, user-friendly apps for the world.</p>
        </div>
      </section>

      {/* <section className="p-2 py-5 bg-green-400">
        <div className="flex flex-wrap justify-between">
          <div className="flex text-black justify-between p-2 block-text block-line">
            <div className="short-text">
              <p>Transactions per second</p>
            </div>

            <div><h1 className="text-5xl font-semibold">1,864</h1></div>
          </div>

          <div className="flex text-black justify-between p-2 block-text block-line">
            <div className="short-text">
              <p>Avg. cost per transaction</p>
            </div>

            <div><h1 className="text-5xl font-semibold">$0.00025</h1></div>
          </div>

          <div className="flex text-black justify-between p-2 block-text">
            <div className="short-text">
              <p>Total Transaction</p>
            </div>

            <div><h1 className="text-5xl font-semibold">76,889,896,654</h1></div>
          </div>

          <div className="flex text-black justify-between p-2 block-text">
            <div className="short-text">
              <p>Validator Nodes</p>
            </div>

            <div><h1 className="text-5xl font-semibold">1,654</h1></div>
          </div>
        </div>
      </section> */}

      <section className="p-2 py-5 bg-green-400">
        <div className="flex flex-wrap">
          <div className="flex-col md:flex text-black justify-between p-2 w-full border-b border-r-0 md:border-r border-slate-900 py-4 md:w-1/2 lg:w-1/4 md:border-b-0">
            <div className="short-text">
              <p>Transactions per second</p>
            </div>

            <div><h1 className="text-5xl font-semibold">7000</h1></div>
          </div>

          <div className="flex-col md:flex text-black justify-between p-2 w-full border-b lg:border-r border-slate-900 py-4 md:w-1/2 lg:w-1/4 md:border-b-0 ">
            <div className="short-text">
              <p>Avg. cost per transaction</p>
            </div>

            <div><h1 className="text-4xl font-semibold">$0.00025</h1></div>
          </div>

          <div className="flex-col md:flex text-black justify-between p-2 w-full border-b lg:border-r  border-slate-900 py-4 md:w-1/2 lg:w-1/4 md:border-b-0">
            <div className="short-text">
              <p>Total Transaction</p>
            </div>

            <div><h1 className="text-4xl font-semibold"> 79, 676, 778, 609 </h1></div>
          </div>

          <div className="flex-col md:flex text-black justify-between p-2 w-full  border-slate-900 py-4 md:w-1/2 lg:w-1/4 ">
            <div className="short-text">
              <p>Validator Nodes</p>
            </div>

            <div><h1 className="text-5xl font-semibold">1,654</h1></div>
          </div>

        </div>
        
      </section>

      <section className="bg-black">
        <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 sm:pt-24 md:py-24 lg:pl-12 lg:flex-row">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm md:max-w-xl lg:text-left">
            <h1 className="text-white join-text">Join the fastest growing ecosystem</h1>
          </div>

          <div className="flex flex-col justify-center text-center rounded-sm md:max-w-lg lg:text-left w-1\2">
            <p className="text-white text-lg">
              Solana is the fastest blockchain in the world and the fastest growing ecosystem in crypto,
              with thousands of projects spanning DeFi, NFTs, Web3 and more.
            </p>
            <div className="flex flex-col mt-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a href="#" className="px-8 py-3 text-sm rounded-full bg-purple-500 hover:bg-slate-50 text-white hover:text-black flex items-center justify-center">
                <span className="inline-block uppercase"> explore the ecosystem</span></a>
            </div>
          </div>
        </div>

      </section>

      <section className="bg-black">
        <div className="w-full md:w-3/5 text-white md:mx-auto p-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-1">Scale</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">for global adoption</h2>
          <p className="text-lg">
            Integrate once and never worry about scaling again. Solana ensures composability between ecosystem
            projects by maintaining a single global state as the network scales. Never deal with fragmented
            Layer 2 systems or sharded chains.
          </p>
        </div>

        <img src="/scalebg.webp" />
      </section>

      <section className="bg-black p-3 md:p-10 md:px-24 pt-36">
        <div className="flex flex-wrap justify-between">
          <div className="card rounded-3xl bg-zinc-800 overflow-hidden my-2 flex flex-col justify-between">
            <div>
              <h1 className="mt-8 pl-4 text-white text-4xl md:text-7xl font-semibold md:max-w-md">Low cost, forever</h1>
              <p className="text-xl text-white px-4 mt-2 mb-4">Solana &apos; s scalability ensures transactions remain less than $0.01 for both developers and users.</p>
            </div>
            <img src="/card-1.webp" className="w-full" />
          </div>

          <div className="card rounded-3xl bg-zinc-800 overflow-hidden my-2 flex flex-col justify-between">
            <div>
              <h1 className="mt-8 pl-4 text-white text-4xl md:text-7xl font-semibold">Fast, forever</h1>
              <p className="text-xl text-white px-4 mt-2 mb-4">Solana is all about speed, with 400 millisecond block times. And as hardware gets faster, so does the network.</p>
            </div>
            <img src="/card-2.webp" className="w-full" />
          </div>
        </div>

      </section>

      <section className="bg-black">
        <img src="/index_decentralized.webp" />

        <div className="w-full md:w-3/5 text-white md:mx-auto float p-2">
          <h1 className="text-3xl md:text-6xl font-bold mb-1">Decentralized</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">and secure</h2>
          <p className="text-lg">Not only is Solana ultra-fast and low cost, it is censorship resistant. The Solana Network
          is spread over thousands of independent nodes - which means that your transactions are always safe.
          </p>
        </div>
      </section>

      <section className="bg-black p-6 md:px-24 pt-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="colorcard col-span-2 md:col-span-1 bg-pink-500 py-6 px-8 rounded-3xl flex flex-col justify-between h-96 min-h-full">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold md:max-w-md">Solana Community</h1>
              <p className="text-md md:text-lg mt-3">There &apos; s something for everybody. Follow along, chat on Discord, or read up on wha we &apos; re doing.</p>
            </div>            

            <div className="flex flex-col mt-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a href="#" className="px-8 py-3 text-sm rounded-full bg-black hover:bg-slate-50 text-white hover:text-black flex items-center justify-center">
                <span className="inline-block uppercase"> learn more</span></a>
            </div>
          </div>

          <div className="colorcard col-span-2 md:col-span-1 bg-green-400 py-6 px-8 rounded-3xl flex flex-col justify-between h-96 min-h-full">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold md:max-w-md">Become a Validator</h1>
              <p className="text-md md:text-lg mt-3">Help secure the network by running decentralized infrastructure. Learn about operating a validator node.</p>
            </div>

            <div className="flex flex-col mt-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a href="#" className="px-8 py-3 text-sm rounded-full bg-black hover:bg-slate-50 text-white hover:text-black flex items-center justify-center">
                <span className="inline-block uppercase">get started</span></a>
            </div>
          </div>

          
        </div>

        <div className="bg-cyan-300 p-8 rounded-3xl flex flex-wrap justify-between mt-5 relative">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold md:max-w-md">Developer Resources</h1>
          </div>
          <div className="md:max-w-xl">
            <p className="text-lg md:text-md mt-3">Help secure the network by running decentralized infrastructure. Learn about operating a validator node.</p>
            <div className="flex flex-col mt-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a href="#" className="px-8 py-3 text-sm rounded-full bg-black hover:bg-slate-50 text-white hover:text-black flex items-center justify-center">
                <span className="inline-block uppercase">start building</span></a>
            </div>
          </div>
          <div className="sc-149597fa-0 cRUoBs"></div>
        </div>
        
      </section>

      <footer className="py-20 px-10 md:px-24 bg-black">
        <hr className="border-zinc-700" />
        <h1 className="text-center text-white text-2xl py-12 font-semibold">Get more out of Solana</h1>


        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">

          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <h2 className="text-slate-300 uppercase mb-2 text-lg">build</h2>
              <a href="#" className="text-md text-white py-1">Docs</a>
              <a href="#" className="text-md text-white py-1 flex items-center">Github &nbsp; <BsArrowDownRight /> </a>
              <a href="#" className="text-md text-white py-1 flex items-center">Chat on Discord &nbsp; <BsArrowDownRight /></a>
              <a href="#" className="text-md text-white py-1 flex items-center">Status &nbsp; <BsArrowDownRight /></a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-slate-300 uppercase mb-2 text-lg">apply</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <a href="#" className="text-md text-white py-1 flex items-center">Grants</a>
              <a href="#" className="text-md text-white py-1 flex items-center">Collective &nbsp; <BsArrowDownRight /> </a>
              <a href="#" className="text-md text-white py-1 flex items-center">Careers &nbsp; <BsArrowDownRight /> </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-slate-300 uppercase mb-2 text-lg">learn</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <a href="#" className="text-md text-white py-1 flex items-center">Blog</a>
              <a href="#" className="text-md text-white py-1 flex items-center">Podcasts</a>
              <a href="#" className="text-md text-white py-1 flex items-center">Videos &nbsp; <BsArrowDownRight /> </a>
              <a href="#" className="text-md text-white py-1 flex items-center">Network Stats &nbsp; <BsArrowDownRight /> </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-slate-300 uppercase mb-2 text-lg">other</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <a href="#" className="text-md text-white py-1 flex items-center">Break Solana</a>
              <a href="#" className="text-md text-white py-1 flex items-center">Disclaimer</a>
              <a href="#" className="text-md text-white py-1 flex items-center">Press & Brand</a>
            </div>
          </div>
        </div>

        <div className="flex justify-between bg-white rounded-3xl py-8 px-10">
          <div>
            <svg width="27" height="23" viewBox="0 0 48 43" fill="none">
              <path d="M47.7527 33.9024L39.829 42.4144C39.6567 42.5993 39.4483 42.7467 39.2167 42.8475C38.9851 42.9482 38.7353 43.0001 38.4828 43H0.919902C0.74067 43 0.565342 42.9475 0.415462 42.8491C0.265582 42.7506 0.147678 42.6105 0.0762374 42.4458C0.00479633 42.2812 -0.01707 42.0992 0.0133251 41.9223C0.0437201 41.7454 0.125053 41.5812 0.247329 41.45L8.17715 32.938C8.34894 32.7536 8.55669 32.6065 8.78754 32.5057C9.01839 32.405 9.26743 32.3528 9.51923 32.3524H47.0801C47.2593 32.3524 47.4347 32.4048 47.5845 32.5033C47.7344 32.6017 47.8523 32.7419 47.9238 32.9065C47.9952 33.0712 48.0171 33.2531 47.9867 33.4301C47.9563 33.607 47.8749 33.7712 47.7527 33.9024ZM39.829 16.7618C39.6567 16.5769 39.4483 16.4295 39.2167 16.3287C38.9851 16.228 38.7353 16.1761 38.4828 16.1762H0.919902C0.74067 16.1762 0.565342 16.2286 0.415462 16.3271C0.265582 16.4255 0.147678 16.5657 0.0762374 16.7303C0.00479633 16.895 -0.01707 17.077 0.0133251 17.2539C0.0437201 17.4308 0.125053 17.595 0.247329 17.7262L8.17715 26.2382C8.34894 26.4226 8.55669 26.5697 8.78754 26.6705C9.01839 26.7712 9.26743 26.8234 9.51923 26.8238H47.0801C47.2593 26.8238 47.4347 26.7714 47.5845 26.6729C47.7344 26.5745 47.8523 26.4343 47.9238 26.2697C47.9952 26.105 48.0171 25.923 47.9867 25.7461C47.9563 25.5692 47.8749 25.405 47.7527 25.2738L39.829 16.7618ZM0.919902 10.6476H38.4828C38.7353 10.6478 38.9851 10.5958 39.2167 10.4951C39.4483 10.3943 39.6567 10.2469 39.829 10.062L47.7527 1.55005C47.8749 1.41879 47.9563 1.25461 47.9867 1.07769C48.0171 0.900764 47.9952 0.7188 47.9238 0.554153C47.8523 0.389507 47.7344 0.249349 47.5845 0.150902C47.4347 0.0524548 47.2593 6.06273e-06 47.0801 0L9.51923 0C9.26743 0.000429217 9.01839 0.0526256 8.78754 0.153358C8.55669 0.25409 8.34894 0.401213 8.17715 0.585619L0.249374 9.09757C0.127215 9.2287 0.0459183 9.39269 0.0154543 9.56943C-0.0150097 9.74616 0.00668312 9.92796 0.0778724 10.0925C0.149062 10.2571 0.266652 10.3973 0.416224 10.4959C0.565795 10.5945 0.740844 10.6472 0.919902 10.6476Z" fill="black">
              </path></svg>
          </div>

          <div className="flex">
            <p>SOLANA.ACTIVATE</p>
            <div className="relative">
              <input type="checkbox" id="sortbox" className="hidden absolute" />
                <label htmlFor="sortbox" className="flex items-center space-x-1 cursor-pointer">
                <span className="text-lg"> <TbWorld /> </span>
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </label>

                <div id="sortboxmenu" className="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-300 border border-gray-400 transition delay-75 ease-in-out z-10">
                  <ul className="block text-right text-gray-900">
                    <li><a href="#" className="block px-3 py-2 hover:bg-gray-200">Featured</a></li>
                    <li><a href="#" className="block px-3 py-2 hover:bg-gray-200">Newest</a></li>
                    <li><a href="#" className="block px-3 py-2 hover:bg-gray-200">Price: Low to High</a></li>
                    <li><a href="#" className="block px-3 py-2 hover:bg-gray-200">Price: High to Low</a></li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  )
}
