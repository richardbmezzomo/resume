export const LoadingSkeleton = () => {
    return (
        <div className="bg-graphite p-8 rounded-2xl animate-pulse h-full">
            <header className="flex gap-4 items-center">
            <div className="w-5 h-5 bg-heather/30 rounded" />
            <div className="h-4 w-1/3 bg-heather/30 rounded" />
            </header>

            <div className="mt-5 space-y-2">
            <div className="h-4 bg-heather/20 rounded w-full" />
            </div>

            <footer className="flex items-center justify-between pt-16">
            <div className="flex gap-4">
                <div className="flex gap-2 items-center">
                <div className="w-4 h-4 bg-heather/20 rounded" />
                </div>
                <div className="flex gap-2 items-center">
                <div className="w-4 h-4 bg-heather/20 rounded" />
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-heather/40" />
                <div className="w-12 h-4 bg-heather/30 rounded" />
            </div>
            </footer>
        </div>
    )
}