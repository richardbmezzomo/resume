import { Sidebar } from "./components/Sidebar";

export const App = () => {
  return (
    <div className="bg-ink min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-[448px_1fr] min-h-screen">
        <aside className="">
          <Sidebar />
        </aside>
        <main className="">MAIN</main>
      </div>
    </div>
  );
};
