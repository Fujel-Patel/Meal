import React from "react";
function Shimmer() {
    return (
        <div className="min-h-[calc(100vh-160px)] p-8">
            <div className="w-full md:w-2/3 mx-auto h-16 mb-8 bg-gradient-to-r from-black/40 to-yellow-500/10 rounded-2xl animate-pulse"></div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
                {[1, 2, 3, 4, 5, 6, 8].map((item) => (
                    <div key={item} className="relative overflow-hidden rounded-2xl bg-black/40 shadow-lg">
                        <div className="h-48 bg-gradient-to-r from-black/40 to-yellow-500/10 animate-pulse"></div>
                        <div className="p-4 space-y-4">
                            <div className="h-6 w-2/3 bg-gradient-to-r from-black/40 to-yellow-500/10 rounded-full animate-pulse"></div>
                            <div className="h-4 w-1/2 bg-gradient-to-r from-black/40 to-yellow-500/10 rounded-full animate-pulse"></div>
                            <div className="h-10 w-full bg-gradient-to-r from-black/40 to-yellow-500/10 rounded-lg animate-pulse"></div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent animate-[shine_1.5s_ease_infinite] -translate-x-full"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shimmer;