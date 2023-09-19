import { NextResponse } from "next/server";

export async function GET() {

    const getLanguageStats = async (owner: String, repo: String) => {
        try {
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`);
            const data = await response.json();
            return data;

        } catch (error: any) {
            console.error(`Error fetching language stats for ${owner}/${repo}:`, error);
            return {};
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
            for (const language in repoLanguageStats) {
                if (languageStats[language]) {
                    languageStats[language] += repoLanguageStats[language]
                } else {
                    languageStats[language] = repoLanguageStats[language]
                }
            }

        }

        const response = NextResponse.json({
            success: true,
            languageStats: languageStats
        })

        return response

    } catch (error: any) {
        console.log("Error getting language stats")
    }
}