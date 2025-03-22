import { useEffect, useState } from "react"

interface GitHubUser {
    avatar_url: string,
    name: string
}

export const Profile = () => {
    const [user, setUser] = useState<GitHubUser | null>(null)
    const apiUrl = "https://api.github.com/users/richardbmezzomo"

    useEffect(() => {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => setUser(data))
    }, []) 

    return (
        <div className="bg-graphite flex flex-col items-center gap-7 py-6 rounded-3xl">
            <img src={user?.avatar_url} alt="Foto de perfil de Richard" className="h-32 w-32 rounded-full border-2 border-lime"/>
            <div className="flex flex-col gap-2.5 items-center">
                <h1 className="text-heather font-bold text-2xl">Richard B Mezzomo</h1>
                <span className="text-heather font-light text-sm">Full Stack Developer</span>
            </div>
        </div>
    )
}