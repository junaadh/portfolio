'use client';
import { useEffect } from "react";

export default function Deco() {

    const username = "junaadh";

    interface LanguageStats {
        [language: string]: number;
    }

    async function getAllRepos() {
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            const repo = await response.json();
            return repo;

        } catch (error: any) {
            console.error('Error fetching repositories:', error);
            return [];
        }
    }

    async function getLanguageStats(owner: String, repo: String) {
        try {
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`);
            const data = await response.json();
            return data;

        } catch (error: any) {
            console.error(`Error fetching language stats for ${owner}/${repo}:`, error);
            return {};
        }
    }

    async function fetchAllLanguages() {
        const repos = await getAllRepos();
        const languageStats: LanguageStats = {};
    
        for (const repo of repos) {
            if (repo.name.toLowerCase() === ".config") {
                continue;
            }
        
            const repoLanguages = await getLanguageStats(username, repo.name);
        
            for (const language in repoLanguages) {
                if (languageStats[language]) {
                    languageStats[language] += repoLanguages[language];
                } else {
                    languageStats[language] = repoLanguages[language];
                }
            }
        }
    
        return languageStats;
    }
  

    useEffect(() => {
        fetchAllLanguages().then((languageStats) => {
            console.log('Overall Language Usage:', languageStats);

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
        });
    }, []);

    return (
        <>
            <h2 className="sm:pt-[40px] p-5 font-bold text-2xl text-orange-600/60 shadow-xl" >GitHub Language Stats</h2>
            <div id="deco" className='flex flex-col py-2 mb-5 w-[80%] sm:w-[600px] md:w-[780px] h-[30%] sm:h-[500px] bg-gradient-to-br from-black/60 via-slate-900 to bg-gray-800 rounded-2xl shadow-2xl items-center justify-evenly'>
                    {/* Language stats will be added here */}
            </div>
        </>
    )
}
