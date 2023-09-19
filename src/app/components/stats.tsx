'use client';
import { useEffect } from "react";

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
            
                    const decoContainer = document.getElementById('deco');

                    if (decoContainer) {
                        const totalLanguageScore = Object.values(languageStats).reduce((total, score) => total + score, 0);

                        Object.keys(languageStats).forEach((language) => {
                            const progressBar = document.createElement('div');
                            progressBar.className = 'bg-blue-500 h-3 border border-blue-600 mt-2';

                            const progressWidth = (languageStats[language] / totalLanguageScore) * 100;
                            progressBar.style.width = `${progressWidth}%`;

                            const languageElement = document.createElement('div');
                            languageElement.className = 'text-orange-600/60 text-bold text-lg';
                            languageElement.textContent = `${language} (${Math.floor(progressWidth)}%)`;

                            const nameBox = document.createElement('div');
                            nameBox.className = 'flex h-full w-full';
                            nameBox.appendChild(languageElement);

                            const progressBox = document.createElement('div');
                            progressBox.className = 'flex h-full w-full';
                            progressBox.appendChild(progressBar);
                            
                            const secondaryBox = document.createElement('div');
                            secondaryBox.className = 'flex w-full h-full sm:px-10 sm:pr-4 mt-2 px-3 sm:pl-[30px] sm:pr-[70px]';
                            secondaryBox.appendChild(nameBox);
                            secondaryBox.appendChild(progressBox);

                            const mainBox = document.createElement('div');
                            mainBox.className = 'flex flex-col items-center justify-center w-full h-full';
                            mainBox.appendChild(secondaryBox);
                            decoContainer.appendChild(mainBox);
                        });
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
            <h2 className="sm:pt-[40px] p-5 font-bold text-2xl text-orange-600/60 shadow-xl" >GitHub Language Stats</h2>
            <div id="deco" className='flex flex-col py-2 mb-5 w-[80%] sm:w-[600px] md:w-[780px] h-auto bg-gradient-to-br from-black/60 via-slate-900 to bg-gray-800 rounded-2xl shadow-2xl items-center justify-evenly'>
                    {/* Language stats will be added here */}
            </div>
        </>
    )
}
