import { CardTitle } from "../components/CardTitle"
import { PinnedRepos } from "../components/PinnedRepos"
import { PostInfo } from "../components/PostInfo"

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