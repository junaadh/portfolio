import { error } from "console";
import { NextResponse } from "next/server";

export async function GET() {

    const getLanguageStats = async (owner: String, repo: String) => {
        try {
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`);
            const data = await response.json();
            return data;

        } catch (error: any) {
            console.error(`Error fetching language stats for ${owner}/${repo}:`, error);
            return {error};
        }
    }

    interface LanguageStats {
        [language: string]: number;
    }

    try {
        const username = "junaadh"

        const repos = await fetch(`https://api.github.com/users/${username}/repos`)
        const repoResponse = await repos.json()

        const languageStats: LanguageStats = {}

        for (const repo of repoResponse) {
            if (repo.name.toLowerCase() === ".config") {
                continue
            }

            const repoLanguageStats = await getLanguageStats(username, repo.name)
            if (repoLanguageStats) {
                for (const language in repoLanguageStats) {
                    if (languageStats[language]) {
                        languageStats[language] += repoLanguageStats[language]
                    } else {
                        languageStats[language] = repoLanguageStats[language]
                    }
                }
            }
        }

        const languageArray = Object.entries(languageStats)
        languageArray.sort((a, b) => b[1] - a[1])

        const sortedLanguageStats: LanguageStats = {}
        for (const [language, count] of languageArray) {
            sortedLanguageStats[language] = count
        }

        const response = NextResponse.json({
            success: true,
            languageStats: sortedLanguageStats
        })

        return response

    } catch (error: any) {
        console.log("Error getting language stats")
        return NextResponse.json({
            success: false,
            error: error
        }, {status: 404})
    }
}