import type { NextConfig } from "next";

const compiler = process.env.NODE_ENV === "production" ? { removeConsole: { exclude: ["error"] } } : undefined;

const nextConfig: NextConfig = {
    cacheComponents: true,
    partialPrefetching: true,
    reactCompiler: true,
    reactStrictMode: true,
    typedRoutes: true,
    devIndicators: false,
    compiler,

    env: { BUILD_TIMESTAMPS: Date.now().toString() },
    turbopack: { rules: { "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" } } }
};

export default nextConfig;
