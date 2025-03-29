import { ExperienceItem } from "./ui/ExperiencesItem"

export const Experiences = () => {
    return (
        <div className="w-full bg-graphite rounded-2xl py-7">
            <h1 className="pl-5 text-heather text-xl">Experiências</h1>
            <div className="pt-5">
                <ul className="flex flex-col gap-2 pl-10">
                    <li>
                        <ExperienceItem cargo="Desenvolvedor Front-end" empresa="IPM Sistemas" periodo="2025 - Atualmente"/>
                    </li>
                    <li>
                        <ExperienceItem cargo="Desenvolvedor Full-Stack" empresa="ADM Informatica" periodo="2024 - 2025"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}