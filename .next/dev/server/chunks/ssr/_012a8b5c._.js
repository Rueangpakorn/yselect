module.exports = [
"[project]/src/data/services/mutate-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mutateData",
    ()=>mutateData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$get$2d$token$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/get-token.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
async function mutateData(method, path, payload) {
    const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiURL"])();
    const authToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$get$2d$token$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthToken"])();
    const url = new URL(path, baseUrl);
    if (!authToken) throw new Error("No auth token found");
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`
            },
            body: JSON.stringify({
                ...payload
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("error", error);
        throw error;
    }
}
}),
"[project]/src/data/actions/summary-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"402d9773ebb4394ab5637a6450ad8f1635372a66bf":"createSummaryAction","603a3ed69533eac11589007059c0a4b8134b41262c":"deleteSummaryAction","60f3af5ff228ac95d35c37547f5d4268ab73c7c07d":"updateSummaryAction"},"",""] */ __turbopack_context__.s([
    "createSummaryAction",
    ()=>createSummaryAction,
    "deleteSummaryAction",
    ()=>deleteSummaryAction,
    "updateSummaryAction",
    ()=>updateSummaryAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$get$2d$token$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/get-token.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$mutate$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services/mutate-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function createSummaryAction(payload) {
    const authToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$get$2d$token$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthToken"])();
    if (!authToken) throw new Error("No auth token found");
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$mutate$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mutateData"])("POST", "/api/summaries", payload);
    const flattenedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flattenAttributes"])(data);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/dashboard/summaries/" + flattenedData.id);
}
async function updateSummaryAction(prevState, formData) {
    const rawFormData = Object.fromEntries(formData);
    const id = rawFormData.id;
    const payload = {
        data: {
            title: rawFormData.title,
            summary: rawFormData.summary
        }
    };
    const responseData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$mutate$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mutateData"])("PUT", `/api/summaries/${id}`, payload);
    if (!responseData) {
        return {
            ...prevState,
            strapiErrors: null,
            message: "Oops! Something went wrong. Please try again."
        };
    }
    if (responseData.error) {
        return {
            ...prevState,
            strapiErrors: responseData.error,
            message: "Failed to update summary."
        };
    }
    const flattenedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flattenAttributes"])(responseData);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard/summaries");
    return {
        ...prevState,
        message: "Summary updated successfully",
        data: flattenedData,
        strapiErrors: null
    };
}
async function deleteSummaryAction(id, prevState) {
    const responseData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2f$mutate$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mutateData"])("DELETE", `/api/summaries/${id}`);
    if (!responseData) {
        return {
            ...prevState,
            strapiErrors: null,
            message: "Oops! Something went wrong. Please try again."
        };
    }
    if (responseData.error) {
        return {
            ...prevState,
            strapiErrors: responseData.error,
            message: "Failed to delete summary."
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/dashboard/summaries");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createSummaryAction,
    updateSummaryAction,
    deleteSummaryAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createSummaryAction, "402d9773ebb4394ab5637a6450ad8f1635372a66bf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSummaryAction, "60f3af5ff228ac95d35c37547f5d4268ab73c7c07d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteSummaryAction, "603a3ed69533eac11589007059c0a4b8134b41262c", null);
}),
"[project]/.next-internal/server/app/_not-found/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/data/actions/auth-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/data/actions/summary-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$actions$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/actions/auth-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$actions$2f$summary$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/actions/summary-actions.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/.next-internal/server/app/_not-found/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/data/actions/auth-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/data/actions/summary-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0053b117c92d5e7b3588d9738720e4642538f4adb4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$actions$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logoutAction"],
    "402d9773ebb4394ab5637a6450ad8f1635372a66bf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$actions$2f$summary$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSummaryAction"],
    "607ecc12b1af188aa8a9f3a64cc46dd88f84511900",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$actions$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerUserAction"],
    "60dea9128c41bbefe1b2de96b04ea2f87edf5e5cbc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$actions$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loginUserAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$_not$2d$found$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$data$2f$actions$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$data$2f$actions$2f$summary$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/_not-found/page/actions.js { ACTIONS_MODULE0 => "[project]/src/data/actions/auth-actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/data/actions/summary-actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$actions$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/actions/auth-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$actions$2f$summary$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/actions/summary-actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_012a8b5c._.js.map