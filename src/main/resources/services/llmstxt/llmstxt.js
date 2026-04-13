const portalLib = require('/lib/xp/portal');

function handleGet() {
    const siteConfig = portalLib.getSiteConfig() || {};

    return {
        contentType: 'text/plain',
        body: siteConfig.llmsText || ''
    };
}

exports.get = handleGet;