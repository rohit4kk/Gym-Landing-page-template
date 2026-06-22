(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/SmoothScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Register ScrollTrigger in a browser environment
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
function SmoothScroll({ children }) {
    _s();
    const [lenis, setLenis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScroll.useEffect": ()=>{
            if (!lenis) return;
            // Direct ScrollTrigger to recalculate metrics on smooth scroll events
            lenis.on("scroll", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
            // Feed Lenis frame-ticks into GSAP ticker so scroll and animation ticks sync
            const updateTicker = {
                "SmoothScroll.useEffect.updateTicker": (time)=>{
                    lenis.raf(time * 1000);
                }
            }["SmoothScroll.useEffect.updateTicker"];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.add(updateTicker);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.lagSmoothing(0);
            return ({
                "SmoothScroll.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.remove(updateTicker);
                    lenis.off("scroll", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
                }
            })["SmoothScroll.useEffect"];
        }
    }["SmoothScroll.useEffect"], [
        lenis
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactLenis"], {
        root: true,
        options: {
            autoRaf: false,
            lerp: 0.1,
            duration: 1.2
        },
        ref: (node)=>{
            if (node && node.lenis) {
                setLenis(node.lenis);
            }
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/SmoothScroll.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(SmoothScroll, "Cr13Dv9rMmehMW6qNzrIzPTpdvc=");
_c = SmoothScroll;
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DoodlePlayground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DoodlePlayground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const DOODLE_PATHS = [
    // Star
    "M 50 12 L 62 38 L 90 38 L 68 54 L 76 80 L 50 64 L 24 80 L 32 54 L 10 38 L 38 38 Z",
    // Lightning
    "M 45 10 L 20 55 L 48 55 L 30 90 L 80 40 L 52 40 Z",
    // Heart
    "M 50 82 Q 50 82 20 55 C 8 40 18 15 38 25 Q 50 32 62 25 C 82 15 92 40 80 55 Z",
    // Arrow
    "M 15 20 Q 55 10 80 50 M 80 50 L 65 42 M 80 50 L 72 65",
    // Cross / Plus
    "M 50 15 L 50 85 M 15 50 L 85 50",
    // Swirl Loop
    "M 20 70 Q 50 10 80 30 T 40 80 T 60 50"
];
function DoodlePlayground() {
    _s();
    const [doodles, setDoodles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DoodlePlayground.useEffect": ()=>{
            const handleGlobalClick = {
                "DoodlePlayground.useEffect.handleGlobalClick": (e)=>{
                    // Exclude interactive elements so clicks function normally
                    const target = e.target;
                    if (!target || target.tagName === "BUTTON" || target.tagName === "A" || target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.closest("button") || target.closest("a") || target.closest("input") || target.closest("textarea") || target.classList.contains("cursor-pointer") || target.closest(".cursor-pointer")) {
                        return;
                    }
                    const size = Math.random() * 30 + 35; // 35px to 65px
                    const index = Math.floor(Math.random() * DOODLE_PATHS.length);
                    const rotate = Math.random() * 60 - 30; // -30 to 30 deg
                    const colors = [
                        "#E51E2A",
                        "#FFFFFF",
                        "#3B82F6"
                    ];
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    const newDoodle = {
                        id: Date.now() + Math.random(),
                        x: e.clientX,
                        y: e.clientY,
                        path: DOODLE_PATHS[index],
                        color,
                        size,
                        rotate
                    };
                    setDoodles({
                        "DoodlePlayground.useEffect.handleGlobalClick": (prev)=>[
                                ...prev,
                                newDoodle
                            ]
                    }["DoodlePlayground.useEffect.handleGlobalClick"]);
                    // Remove after animation finishes
                    setTimeout({
                        "DoodlePlayground.useEffect.handleGlobalClick": ()=>{
                            setDoodles({
                                "DoodlePlayground.useEffect.handleGlobalClick": (prev)=>prev.filter({
                                        "DoodlePlayground.useEffect.handleGlobalClick": (d)=>d.id !== newDoodle.id
                                    }["DoodlePlayground.useEffect.handleGlobalClick"])
                            }["DoodlePlayground.useEffect.handleGlobalClick"]);
                        }
                    }["DoodlePlayground.useEffect.handleGlobalClick"], 1600);
                }
            }["DoodlePlayground.useEffect.handleGlobalClick"];
            window.addEventListener("mousedown", handleGlobalClick);
            return ({
                "DoodlePlayground.useEffect": ()=>window.removeEventListener("mousedown", handleGlobalClick)
            })["DoodlePlayground.useEffect"];
        }
    }["DoodlePlayground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 pointer-events-none z-[9990] overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: doodles.map((doodle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                    viewBox: "0 0 100 100",
                    className: "absolute fill-none select-none pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]",
                    style: {
                        x: doodle.x - doodle.size / 2,
                        y: doodle.y - doodle.size / 2,
                        width: doodle.size,
                        height: doodle.size
                    },
                    initial: {
                        scale: 0,
                        rotate: doodle.rotate - 15,
                        opacity: 1
                    },
                    animate: {
                        scale: [
                            0,
                            1.25,
                            1
                        ],
                        rotate: doodle.rotate + 10,
                        y: -70,
                        opacity: [
                            1,
                            1,
                            0
                        ]
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 1.4,
                        ease: "easeOut"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: doodle.path,
                        stroke: doodle.color,
                        strokeWidth: "5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        initial: {
                            pathLength: 0
                        },
                        animate: {
                            pathLength: 1
                        },
                        transition: {
                            duration: 0.5,
                            ease: "easeOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/DoodlePlayground.tsx",
                        lineNumber: 109,
                        columnNumber: 13
                    }, this)
                }, doodle.id, false, {
                    fileName: "[project]/src/components/DoodlePlayground.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/DoodlePlayground.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/DoodlePlayground.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(DoodlePlayground, "7rb1bcuAsIaTqRkPArGydeKwAcU=");
_c = DoodlePlayground;
var _c;
__turbopack_context__.k.register(_c, "DoodlePlayground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AmbientGlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AmbientGlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function AmbientGlow() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 pointer-events-none z-0 overflow-hidden select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    x: [
                        0,
                        80,
                        -40,
                        0
                    ],
                    y: [
                        0,
                        -100,
                        60,
                        0
                    ],
                    scale: [
                        1,
                        1.15,
                        0.9,
                        1
                    ]
                },
                transition: {
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                className: "absolute top-[10%] left-[5%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-brand-red/5 via-brand-red/[0.02] to-transparent filter blur-[100px]"
            }, void 0, false, {
                fileName: "[project]/src/components/AmbientGlow.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    x: [
                        0,
                        -90,
                        70,
                        0
                    ],
                    y: [
                        0,
                        80,
                        -90,
                        0
                    ],
                    scale: [
                        1,
                        0.9,
                        1.1,
                        1
                    ]
                },
                transition: {
                    duration: 32,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                className: "absolute top-[40%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/[0.03] via-blue-500/[0.01] to-transparent filter blur-[110px]"
            }, void 0, false, {
                fileName: "[project]/src/components/AmbientGlow.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    x: [
                        0,
                        60,
                        -50,
                        0
                    ],
                    y: [
                        0,
                        110,
                        -60,
                        0
                    ],
                    scale: [
                        1,
                        1.1,
                        0.95,
                        1
                    ]
                },
                transition: {
                    duration: 28,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                className: "absolute bottom-[15%] left-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-brand-red/4 via-brand-red/[0.01] to-transparent filter blur-[90px]"
            }, void 0, false, {
                fileName: "[project]/src/components/AmbientGlow.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AmbientGlow.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = AmbientGlow;
var _c;
__turbopack_context__.k.register(_c, "AmbientGlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_00ouck0._.js.map