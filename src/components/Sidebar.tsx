import { Links } from "./Links"
import { Profile } from "./Profile"
import { Tecnologies } from "./Tecnologies"

export const Sidebar = () => {
    return (
        <div className="m-10 flex flex-col items-center gap-7">
            <Profile/>
            <Links />
            <Tecnologies />
        </div>
    )
}