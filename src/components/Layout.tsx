import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"

export const Layout = () => {
  return (
    <div className="bg-ink min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-[448px_1fr] min-h-screen">
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
