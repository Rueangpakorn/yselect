module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/ui/sonner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const Toaster = ({ ...props })=>{
    const { theme = "system" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sonner.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
;
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
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
"[project]/src/data/services/summary-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateSummaryService",
    ()=>generateSummaryService
]);
async function generateSummaryService(videoId) {
    const url = "/api/summarize";
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                videoId: videoId
            })
        });
        return await response.json();
    } catch (error) {
        console.error("Failed to generate summary:", error);
        if (error instanceof Error) return {
            error: {
                message: error.message
            }
        };
        return {
            data: null,
            error: {
                message: "Unknown error"
            }
        };
    }
}
}),
"[project]/src/data/actions/data:2da76d [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSummaryAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"402d9773ebb4394ab5637a6450ad8f1635372a66bf":"createSummaryAction"},"src/data/actions/summary-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("402d9773ebb4394ab5637a6450ad8f1635372a66bf", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createSummaryAction");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3VtbWFyeS1hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBnZXRBdXRoVG9rZW4gfSBmcm9tIFwiQC9kYXRhL3NlcnZpY2VzL2dldC10b2tlblwiO1xuaW1wb3J0IHsgbXV0YXRlRGF0YSB9IGZyb20gXCJAL2RhdGEvc2VydmljZXMvbXV0YXRlLWRhdGFcIjtcbmltcG9ydCB7IGZsYXR0ZW5BdHRyaWJ1dGVzIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcblxuaW50ZXJmYWNlIFBheWxvYWQge1xuICBkYXRhOiB7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgdmlkZW9JZDogc3RyaW5nO1xuICAgIHN1bW1hcnk6IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVN1bW1hcnlBY3Rpb24ocGF5bG9hZDogUGF5bG9hZCkge1xuICBjb25zdCBhdXRoVG9rZW4gPSBhd2FpdCBnZXRBdXRoVG9rZW4oKTtcbiAgaWYgKCFhdXRoVG9rZW4pIHRocm93IG5ldyBFcnJvcihcIk5vIGF1dGggdG9rZW4gZm91bmRcIik7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IG11dGF0ZURhdGEoXCJQT1NUXCIsIFwiL2FwaS9zdW1tYXJpZXNcIiwgcGF5bG9hZCk7XG4gIGNvbnN0IGZsYXR0ZW5lZERhdGEgPSBmbGF0dGVuQXR0cmlidXRlcyhkYXRhKTtcbiAgcmVkaXJlY3QoXCIvZGFzaGJvYXJkL3N1bW1hcmllcy9cIiArIGZsYXR0ZW5lZERhdGEuaWQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU3VtbWFyeUFjdGlvbihwcmV2U3RhdGU6IGFueSwgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIGNvbnN0IHJhd0Zvcm1EYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKTtcbiAgY29uc3QgaWQgPSByYXdGb3JtRGF0YS5pZCBhcyBzdHJpbmc7XG5cbiAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICBkYXRhOiB7XG4gICAgICB0aXRsZTogcmF3Rm9ybURhdGEudGl0bGUsXG4gICAgICBzdW1tYXJ5OiByYXdGb3JtRGF0YS5zdW1tYXJ5LFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgbXV0YXRlRGF0YShcIlBVVFwiLCBgL2FwaS9zdW1tYXJpZXMvJHtpZH1gLCBwYXlsb2FkKTtcblxuICBpZiAoIXJlc3BvbnNlRGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICBzdHJhcGlFcnJvcnM6IG51bGwsXG4gICAgICBtZXNzYWdlOiBcIk9vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLlwiLFxuICAgIH07XG4gIH1cblxuICBpZiAocmVzcG9uc2VEYXRhLmVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgIHN0cmFwaUVycm9yczogcmVzcG9uc2VEYXRhLmVycm9yLFxuICAgICAgbWVzc2FnZTogXCJGYWlsZWQgdG8gdXBkYXRlIHN1bW1hcnkuXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGZsYXR0ZW5lZERhdGEgPSBmbGF0dGVuQXR0cmlidXRlcyhyZXNwb25zZURhdGEpO1xuICByZXZhbGlkYXRlUGF0aChcIi9kYXNoYm9hcmQvc3VtbWFyaWVzXCIpO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucHJldlN0YXRlLFxuICAgIG1lc3NhZ2U6IFwiU3VtbWFyeSB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgIGRhdGE6IGZsYXR0ZW5lZERhdGEsXG4gICAgc3RyYXBpRXJyb3JzOiBudWxsLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlU3VtbWFyeUFjdGlvbihpZDogc3RyaW5nLCBwcmV2U3RhdGU6IGFueSkge1xuICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCBtdXRhdGVEYXRhKFwiREVMRVRFXCIsIGAvYXBpL3N1bW1hcmllcy8ke2lkfWApO1xuXG4gIGlmICghcmVzcG9uc2VEYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgIHN0cmFwaUVycm9yczogbnVsbCxcbiAgICAgIG1lc3NhZ2U6IFwiT29wcyEgU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChyZXNwb25zZURhdGEuZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgc3RyYXBpRXJyb3JzOiByZXNwb25zZURhdGEuZXJyb3IsXG4gICAgICBtZXNzYWdlOiBcIkZhaWxlZCB0byBkZWxldGUgc3VtbWFyeS5cIixcbiAgICB9O1xuICB9XG5cbiAgcmVkaXJlY3QoXCIvZGFzaGJvYXJkL3N1bW1hcmllc1wiKTtcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjJTQWdCc0IsZ01BQUEifQ==
}),
"[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 11,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/src/components/custom/SubmitButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubmitButton",
    ()=>SubmitButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-2.js [app-ssr] (ecmascript) <export default as Loader2>");
"use client";
;
;
;
;
;
function Loader({ text }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "mr-2 h-4 w-4 animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/custom/SubmitButton.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/custom/SubmitButton.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/SubmitButton.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function SubmitButton({ text, loadingText, loading, className }) {
    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormStatus"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        type: "submit",
        "aria-disabled": status.pending || loading,
        disabled: status.pending || loading,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(className),
        children: status.pending || loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Loader, {
            text: loadingText
        }, void 0, false, {
            fileName: "[project]/src/components/custom/SubmitButton.tsx",
            lineNumber: 37,
            columnNumber: 36
        }, this) : text
    }, void 0, false, {
        fileName: "[project]/src/components/custom/SubmitButton.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/forms/SummaryForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SummaryForm",
    ()=>SummaryForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$summary$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/summary-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$actions$2f$data$3a$2da76d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/data/actions/data:2da76d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$SubmitButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/custom/SubmitButton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const INITIAL_STATE = {
    message: null,
    name: ""
};
function SummaryForm() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_STATE);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    async function handleFormSubmit(event) {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.currentTarget);
        const videoId = formData.get("videoId");
        const processedVideoId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractYouTubeID"])(videoId);
        if (!processedVideoId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Invalid Youtube Video ID");
            setLoading(false);
            setValue("");
            setError({
                ...INITIAL_STATE,
                message: "Invalid Youtube Video ID",
                name: "Invalid Id"
            });
            return;
        }
        const summaryResponseData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$summary$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateSummaryService"])(videoId);
        console.log(summaryResponseData, "Response from route handler");
        if (summaryResponseData.error) {
            setValue("");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(summaryResponseData.error);
            setError({
                ...INITIAL_STATE,
                message: summaryResponseData.error,
                name: "Summary Error"
            });
            setLoading(false);
            return;
        }
        const payload = {
            data: {
                title: `Summary for video: ${processedVideoId}`,
                videoId: processedVideoId,
                summary: summaryResponseData.data
            }
        };
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$actions$2f$data$3a$2da76d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createSummaryAction"])(payload);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to create summary");
            setError({
                ...INITIAL_STATE,
                message: "Failed to create summary",
                name: "Summary Error"
            });
            setLoading(false);
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Summary Created");
        setLoading(false);
    }
    function clearError() {
        setError(INITIAL_STATE);
        if (error.message) setValue("");
    }
    const errorStyles = error.message ? "outline-1 outline outline-red-500 placeholder:text-red-700" : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-[960px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleFormSubmit,
            className: "flex gap-2 items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                    name: "videoId",
                    placeholder: error.message ? error.message : "Youtube Video ID or URL",
                    value: value,
                    onChange: (e)=>setValue(e.target.value),
                    onMouseDown: clearError,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full focus:text-black focus-visible:ring-pink-500", errorStyles),
                    required: true
                }, void 0, false, {
                    fileName: "[project]/src/components/forms/SummaryForm.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$SubmitButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubmitButton"], {
                    text: "Create Summary",
                    loadingText: "Creating Summary",
                    loading: loading
                }, void 0, false, {
                    fileName: "[project]/src/components/forms/SummaryForm.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/forms/SummaryForm.tsx",
            lineNumber: 101,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/forms/SummaryForm.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7c9a545f._.js.map