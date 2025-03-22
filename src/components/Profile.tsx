import { useGitHub } from "@/hooks/useGitHub"


export const Profile = () => {
   const user = useGitHub() 

    return (
        <div className="bg-graphite text-heather flex flex-col items-center w-full gap-7 p-6 rounded-3xl">
            <img src={user?.avatar_url} alt="Foto de perfil de Richard" className="h-32 w-32 rounded-full border-2 border-lime"/>
            <div className="flex flex-col gap-2.5 items-center">
                <h1 className="font-bold text-2xl">Richard B Mezzomo</h1>
                <span className="font-light text-sm">Full Stack Developer</span>
            </div>
        </div>
    )
}