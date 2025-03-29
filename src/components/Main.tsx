import { CardTitle } from "./CardTitle"
import { PinnedRepos } from "./PinnedRepos"
import { PostInfo } from "./PostInfo"

export const Main = () => {
    return (
        <div className="m-10 flex flex-col items-center gap-7">
            <CardTitle 
                hasMany={true}
                title="Meus Projetos"
                url="https://github.com/richardbmezzomo?tab=repositories"
            />
            <PinnedRepos />
            <CardTitle 
                hasMany={false}
                title="BRAG Documents"
                url=""
            />
            <PostInfo />
        </div>
    )
}