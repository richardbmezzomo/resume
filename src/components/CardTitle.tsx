import { cardTitle } from "@/types/cardTitle"


export const CardTitle = ({title, hasMany, url}: cardTitle) => {
    return (
        <div className="bg-graphite text-heather flex justify-between p-7 items-center w-full rounded-3xl">
            <h1 className="font-bold text-xl">{title}</h1>
            {hasMany && url && (
                <a href={url} target="_blank" 
                rel="noopener noreferrer" className="font-light text-sm">Ver mais</a>
            )}
        </div>
    )
}