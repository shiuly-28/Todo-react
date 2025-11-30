import React from 'react'
import Header from "./Component/Header.jsx";
import HeroSection from "./Component/HeroSection.jsx";
import Footer from "./Component/Footer.jsx";
import TaskBoard from "./Component/TaskBoard.jsx";


export default function App() {
    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
            <Header />
            <div className="flex flex-col justify-center items-center px-4 py-8">
                <HeroSection />
               <TaskBoard/>
            </div>
            <Footer/>
        </div>
    )
}
