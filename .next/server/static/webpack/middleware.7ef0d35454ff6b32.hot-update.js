"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./auth.config.ts":
/*!************************!*\
  !*** ./auth.config.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authConfig: () => (/* binding */ authConfig)\n/* harmony export */ });\nconst authConfig = {\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        authorized ({ auth, request: { nextUrl } }) {\n            const isLoggedIn = !!auth?.user;\n            const isOnDashboard = nextUrl.pathname.startsWith(\"/dashboard\");\n            if (isOnDashboard) {\n                if (isLoggedIn) return true;\n                return false; // Redirect unauthenticated users to login page\n            } else if (isLoggedIn) {\n                return Response.redirect(new URL(\"/dashboard\", nextUrl));\n            }\n            return true;\n        }\n    },\n    providers: []\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vYXV0aC5jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLE1BQU1BLGFBQWE7SUFDeEJDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0lBQ0FDLFdBQVc7UUFDVEMsWUFBVyxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsT0FBTyxFQUFFLEVBQUU7WUFDdkMsTUFBTUMsYUFBYSxDQUFDLENBQUNILE1BQU1JO1lBQzNCLE1BQU1DLGdCQUFnQkgsUUFBUUksUUFBUSxDQUFDQyxVQUFVLENBQUM7WUFDbEQsSUFBSUYsZUFBZTtnQkFDakIsSUFBSUYsWUFBWSxPQUFPO2dCQUN2QixPQUFPLE9BQU8sK0NBQStDO1lBQy9ELE9BQU8sSUFBSUEsWUFBWTtnQkFDckIsT0FBT0ssU0FBU0MsUUFBUSxDQUFDLElBQUlDLElBQUksY0FBY1I7WUFDakQ7WUFDQSxPQUFPO1FBQ1Q7SUFDRjtJQUNBUyxXQUFXLEVBQUU7QUFDZixFQUEyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hdXRoLmNvbmZpZy50cz80MzA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEF1dGhDb25maWcgfSBmcm9tICduZXh0LWF1dGgnO1xuIFxuZXhwb3J0IGNvbnN0IGF1dGhDb25maWcgPSB7XG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2xvZ2luJyxcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXV0aG9yaXplZCh7IGF1dGgsIHJlcXVlc3Q6IHsgbmV4dFVybCB9IH0pIHtcbiAgICAgIGNvbnN0IGlzTG9nZ2VkSW4gPSAhIWF1dGg/LnVzZXI7XG4gICAgICBjb25zdCBpc09uRGFzaGJvYXJkID0gbmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKCcvZGFzaGJvYXJkJyk7XG4gICAgICBpZiAoaXNPbkRhc2hib2FyZCkge1xuICAgICAgICBpZiAoaXNMb2dnZWRJbikgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gUmVkaXJlY3QgdW5hdXRoZW50aWNhdGVkIHVzZXJzIHRvIGxvZ2luIHBhZ2VcbiAgICAgIH0gZWxzZSBpZiAoaXNMb2dnZWRJbikge1xuICAgICAgICByZXR1cm4gUmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL2Rhc2hib2FyZCcsIG5leHRVcmwpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gIH0sXG4gIHByb3ZpZGVyczogW10sIC8vIEFkZCBwcm92aWRlcnMgd2l0aCBhbiBlbXB0eSBhcnJheSBmb3Igbm93XG59IHNhdGlzZmllcyBOZXh0QXV0aENvbmZpZzsiXSwibmFtZXMiOlsiYXV0aENvbmZpZyIsInBhZ2VzIiwic2lnbkluIiwiY2FsbGJhY2tzIiwiYXV0aG9yaXplZCIsImF1dGgiLCJyZXF1ZXN0IiwibmV4dFVybCIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwiaXNPbkRhc2hib2FyZCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsIlJlc3BvbnNlIiwicmVkaXJlY3QiLCJVUkwiLCJwcm92aWRlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./auth.config.ts\n");

/***/ })

});