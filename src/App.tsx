import { Sidebar } from "./components/Sidebar";

export const App = () => {
  return (
    <div className="bg-ink min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-[448px_1fr] min-h-screen">
        <aside className="border border-red-700">
          <Sidebar />
        </aside>
        <main className="border border-amber-200">MAIN</main>
      </div>
    </div>
  );
};
