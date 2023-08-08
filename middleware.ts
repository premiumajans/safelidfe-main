import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['az', 'en','ru'],

    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale: 'az',
    localePrefix:'never'
});

export const config = {
    // Skip all paths that should not be internationalized. This example skips the
    // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
    matcher: ['/((?!api|_next|.*\\..*).*)']
};