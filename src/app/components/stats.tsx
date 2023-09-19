'use client';
import { useEffect } from "react";
import Progress from "./progress";
import { createRoot } from "react-dom/client";

export default function Stats() {
    // type ColorMap = {
    //     [language: string]: string;
    // };
    
    // function getColorForLanguage(language: string): string {
    //     const colorMap: ColorMap = {
    //         JavaScript: 'bg-yellow-500',
    //         TypeScript: 'bg-blue-500',
    //         Python: 'bg-green-500',
    //         Rust: 'bg-slate-500',
    //         CSS: 'bg-orange-500',
    //         HTML: 'bg-red-500',
    //         Java: 'bg-purple-500',
    //         C: 'bg-indigo-500',
    //         Cpp: 'bg-pink-500',
    //         Ruby: 'bg-teal-500',
    //         Swift: 'bg-cyan-500',
    //         Go: 'bg-blue-800',
    //         Kotlin: 'bg-indigo-800',
    //         PHP: 'bg-purple-800',
    //         Shell: 'bg-green-800',
    //         // Add more languages and colors here
    //     };
    
    //     return colorMap[language] || 'bg-white'; // Default color for unknown languages
    // }
    
    useEffect(() => {
        async function getStats() {
            try {
                const response = await fetch("api/github/statistics", {method: 'GET'})
                response.json()
                    .then((response) => {
                        console.log(response.success)
                        return response.languageStats
                    })
                    .then((languageStats: Record<string, number>) => {
            
                    const totalLanguageScore = Object.values(languageStats).reduce((total, score) => total + score, 0);
                    const decoContainer = document.getElementById('deco');

                    if (decoContainer) {
                        createRoot(decoContainer).render(
                            <>
                                {Object.keys(languageStats).map((language) => (
                                    <Progress key={language} language={language} percentage={(languageStats[language] / totalLanguageScore) * 100} />
                                ))}
                            </>
                        )
                    }
                })
            } catch (error: any) {
                console.log(error)
            }
        }
        getStats()
    }, []);

    return (
        <>
            <h2 className="sm:pt-[40px] p-5 font-bold text-2xl text-orange-600/60" >GitHub Language Stats</h2>
            <div id="deco" className='flex flex-col py-2 mb-5 w-[80%] sm:w-[600px] md:w-[780px] h-auto bg-gradient-to-br from-gray-800 via-slate-700 to-gray-700 dark:from-black dark:via-slate-800 dark:to-bg-gray-800 rounded-2xl shadow-2xl items-center justify-evenly'>
                {/* Progress Bars gonna dynamically be added */}
            </div>
        </>
    )
}
