export function getErrorMsg(code: number) {
    return {
        401:    "Sorry, You don't have permission to access this page. Please re-login",
        403:    "Sorry, You don't have permission to access this page",
        503:    "Sorry, we're having trouble connecting to our servers. Try again later",
        
        450:    "Sorry, Unexpected error happend",

    }[code];
}