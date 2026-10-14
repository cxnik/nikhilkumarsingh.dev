import { AUTHOR } from "./author";

const SOURCE_CODE_GITHUB_REPOSITORY = "cxnik/nikhilkumarsingh.dev";
const SOURCE_CODE_GITHUB_REPOSITORY_URL = "https://github.com/cxnik/nikhilkumarsingh.dev";

const SITE = {
    title: AUTHOR.displayName,
    description: AUTHOR.bio,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://nikhilkumarsingh.dev",
    keywords: [
        "nikhilkumarsingh",
        "cxnik",
        "cxcodes",
        "nikhil kumar singh",
        "full stack mern developer",
        "react developer",
        "next.js developer",
        "ui/ux designer",
        "javascript developer"
    ]
};

export { SOURCE_CODE_GITHUB_REPOSITORY, SOURCE_CODE_GITHUB_REPOSITORY_URL, SITE };
