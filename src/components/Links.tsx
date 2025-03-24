import { useGitHub } from "@/hooks/useGitHub"
import { Briefcase, Github, Globe, Linkedin, Mail, MapPin } from "lucide-react"

export const Links = () => {
    const user = useGitHub()
    return (
        <div className=" bg-graphite rounded-3xl w-full p-6 text-heather">
            <ul className="text-[12px]">
                <li className="flex flex-col items-left gap-5">
                    <div className="flex items-center gap-2">
                        <MapPin />
                        <a href="">{user?.location}</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Briefcase />
                        <a href="">{user?.company}</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Github />
                        <a href={user?.html_url} target="_blank">{user?.login}</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Linkedin />
                        <a href="https://www.linkedin.com/in/richardbmezzomo/" target="_blank">richardbmezzomo</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Globe />
                        <a href={user?.blog} target="_blank">richardbmezzomo.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail />
                        <a href="mailto:contato@richardmbmezzomo.com">contato@richardbmezzomo.com</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}