(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__481f351a._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/data/services/get-token.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAuthToken",
    ()=>getAuthToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/headers.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/cookies.js [middleware-edge] (ecmascript)");
;
async function getAuthToken() {
    const authToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])().get("jwt")?.value;
    return authToken;
}
}),
"[project]/src/lib/utils.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "extractYouTubeID",
    ()=>extractYouTubeID,
    "flattenAttributes",
    ()=>flattenAttributes,
    "getStrapiMedia",
    ()=>getStrapiMedia,
    "getStrapiURL",
    ()=>getStrapiURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [middleware-edge] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function flattenAttributes(data) {
    // Check if data is a plain object; return as is if not
    if (typeof data !== "object" || data === null || data instanceof Date || typeof data === "function") {
        return data;
    }
    // If data is an array, apply flattenAttributes to each element and return as array
    if (Array.isArray(data)) {
        return data.map((item)=>flattenAttributes(item));
    }
    // Initialize an object with an index signature for the flattened structure
    let flattened = {};
    // Iterate over each key in the object
    for(let key in data){
        // Skip inherited properties from the prototype chain
        if (!data.hasOwnProperty(key)) continue;
        // If the key is 'attributes' or 'data', and its value is an object, merge their contents
        if ((key === "attributes" || key === "data") && typeof data[key] === "object" && !Array.isArray(data[key])) {
            Object.assign(flattened, flattenAttributes(data[key]));
        } else {
            // For other keys, copy the value, applying flattenAttributes if it's an object
            flattened[key] = flattenAttributes(data[key]);
        }
    }
    return flattened;
}
function getStrapiURL() {
    return process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";
}
function getStrapiMedia(url) {
    if (url == null) return null;
    if (url.startsWith("data:")) return url;
    if (url.startsWith("http") || url.startsWith("//")) return url;
    return `${getStrapiURL()}${url}`;
}
function extractYouTubeID(urlOrID) {
    // Regular expression for YouTube ID format
    const regExpID = /^[a-zA-Z0-9_-]{11}$/;
    // Check if the input is a YouTube ID
    if (regExpID.test(urlOrID)) {
        return urlOrID;
    }
    // Regular expression for standard YouTube links
    const regExpStandard = /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;
    // Regular expression for YouTube Shorts links
    const regExpShorts = /youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/;
    // Check for standard YouTube link
    const matchStandard = urlOrID.match(regExpStandard);
    if (matchStandard) {
        return matchStandard[1];
    }
    // Check for YouTube Shorts link
    const matchShorts = urlOrID.match(regExpShorts);
    if (matchShorts) {
        return matchShorts[1];
    }
    // Return null if no match is found
    return null;
}
}),
"[project]/src/data/services/get-user-me-loader.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserMeLoader",
    ()=>getUserMeLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$get$2d$token$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/get-token.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/qs/lib/index.js [middleware-edge] (ecmascript)");
;
;
;
const query = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].stringify({
    populate: {
        image: {
            fields: [
                "url",
                "alternativeText"
            ]
        }
    }
});
async function getUserMeLoader() {
    const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getStrapiURL"])();
    const url = new URL("/api/users/me", baseUrl);
    url.search = query;
    const authToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$get$2d$token$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getAuthToken"])();
    if (!authToken) return {
        ok: false,
        data: null,
        error: null
    };
    try {
        const response = await fetch(url.href, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`
            },
            cache: "no-cache"
        });
        const data = await response.json();
        if (data.error) return {
            ok: false,
            data: null,
            error: data.error
        };
        return {
            ok: true,
            data: data,
            error: null
        };
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            data: null,
            error: error
        };
    }
}
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$get$2d$user$2d$me$2d$loader$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/get-user-me-loader.ts [middleware-edge] (ecmascript)");
;
;
async function middleware(request) {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$get$2d$user$2d$me$2d$loader$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getUserMeLoader"])();
    const currentPath = request.nextUrl.pathname;
    if (currentPath.startsWith("/dashboard") && user.ok === false) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/signin", request.url));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__481f351a._.js.map