import { EducationItem } from "./ui/EducationItem"

export const Education = () => {
    return (
        <div className="w-full bg-graphite rounded-2xl py-7">
            <h1 className="text-heather text-xl pl-5">Educação</h1>
            <ul className="flex flex-col gap-2 pl-10">
                <li>
                    <EducationItem 
                        curso="Análise e Desenvolvimento de Sistemas" 
                        faculdade="UNINTER" 
                        periodo="2023 - 2025" 
                    />
                </li>
            </ul>
        </div>
    )
}