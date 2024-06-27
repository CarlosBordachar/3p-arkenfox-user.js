/* 
 * My Personal Override 
 * User.js from Arkanfox  
 */

/* 0000: disable about:config warning ***/
user_pref("browser.aboutConfig.showWarning", true); // Set TRUE

/*** [SECTION 0100]: STARTUP ***/
/* 0102: set startup page [SETUP-CHROME] */
user_pref("browser.startup.page", 1); // 1=home
/* 0103: set HOME+NEWWINDOW page */
user_pref("browser.startup.homepage", "about:home"); // about:home
/* 0104: set NEWTAB page */
user_pref("browser.newtabpage.enabled", true); // Set TRUE

/*** [SECTION 0200]: GEOLOCATION / LANGUAGE / LOCALE ***/
/* 0210: set preferred language for displaying pages */
user_pref("intl.accept_languages", "es-AR, es"); // es-AR, es
/* 0211: use en-US locale regardless of the system or region locale */
user_pref("javascript.use_us_english_locale", false); // Set FALSE

/*** [SECTION 0300]: QUIETER FOX ***/

/*** [SECTION 0400]: SAFE BROWSING (SB) ***/
/* 0403: disable SB checks for downloads (remote) */
user_pref("browser.safebrowsing.downloads.remote.enabled", true); // Set TRUE

/*** [SECTION 0600]: BLOCK IMPLICIT OUTBOUND [not explicitly asked for - e.g. clicked on] ***/

/*** [SECTION 0700]: DNS / DoH / PROXY / SOCKS / IPv6 ***/

/*** [SECTION 0800]: LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS ***/
/* 0801: disable location bar using search */
user_pref("keyword.enabled", true); // Set TRUE
/* 0804: disable live search suggestions */
//user_pref("browser.search.suggest.enabled", true); // Set TRUE
//user_pref("browser.urlbar.suggest.searches", true); // Set TRUE
/* 0820: disable coloring of visited links */
user_pref("layout.css.visited_links_enabled", true); // Set TRUE

/*** [SECTION 0900]: PASSWORDS ***/

/*** [SECTION 1000]: DISK AVOIDANCE ***/
/* 1001: disable disk cache */
user_pref("browser.cache.disk.enable", true); // Set TRUE
/* 1006: disable favicons in shortcuts */
user_pref("browser.shell.shortcutFavicons", false); // NO override, pero por las dudas si quiero iconos (favicon) en accesos directos, en tal caso debe ser TRUE su valor.

/*** [SECTION 1200]: HTTPS (SSL/TLS / OCSP / CERTS / HPKP) ***/

/** OCSP (Online Certificate Status Protocol) ***/

/** CERTS / HPKP (HTTP Public Key Pinning) ***/
/* No se bien de que van, 1223 y 1224 */

/** MIXED CONTENT ***/

/** UI (User Interface) ***/

/*** [SECTION 1400]: FONTS ***/

/*** [SECTION 1600]: HEADERS / REFERERS ***/
/* 1601: control when to send a cross-origin referer */
user_pref("network.http.referer.XOriginPolicy", 1); // 1=only if base domains match

/*** [SECTION 1700]: CONTAINERS ***/
/* 1702: set behavior on "+ Tab" button to display container menu on left click [FF74+] */
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true); // Set TRUE

/*** [SECTION 2000]: PLUGINS / MEDIA / WEBRTC ***/
/* 2022: disable all DRM content (EME: Encryption Media Extension) */
user_pref("media.eme.enabled", true); // Set TRUE (para Prime Video)

/*** [SECTION 2400]: DOM (DOCUMENT OBJECT MODEL) ***/

/*** [SECTION 2600]: MISCELLANEOUS ***/

/** DOWNLOADS ***/
/* 2654: enable user interaction for security by always asking how to handle new mimetypes [FF101+] ***/
user_pref("browser.download.always_ask_before_handling_new_types", false); // Set FALSE

/** EXTENSIONS ***/

/*** [SECTION 2700]: ETP (ENHANCED TRACKING PROTECTION) ***/

/*** [SECTION 2800]: SHUTDOWN & SANITIZING ***/
/* 2810: enable Firefox to clear items on shutdown */
user_pref("privacy.sanitize.sanitizeOnShutdown", false); // Set FALSE (en false deja sin efecto 2811, 2815)

/** SANITIZE ON SHUTDOWN: IGNORES "ALLOW" SITE EXCEPTIONS ***/
// /* 2811: set/enforce what items to clear on shutdown (if 2810 is true) [SETUP-CHROME] */
// user_pref("privacy.clearOnShutdown.cache", false); // Set FALSE
// user_pref("privacy.clearOnShutdown.downloads", false); // Set FALSE
// user_pref("privacy.clearOnShutdown.formdata", true); // TRUE
// user_pref("privacy.clearOnShutdown.history", false); // Set FALSE
// user_pref("privacy.clearOnShutdown.sessions", false); // Set FALSE

/** SANITIZE ON SHUTDOWN: RESPECTS "ALLOW" SITE EXCEPTIONS FF103+ ***/
/* 2815: set "Cookies" and "Site Data" to clear on shutdown (if 2810 is true) [SETUP-CHROME] */
// user_pref("privacy.clearOnShutdown.cookies", false); // Set FALSE
// user_pref("privacy.clearOnShutdown.offlineApps", false); // Set FALSE

/** SANITIZE MANUAL: IGNORES "ALLOW" SITE EXCEPTIONS ***/
/* 2822: reset default "Time range to clear" for "Clear Recent History" (2820) */
user_pref("privacy.sanitize.timeSpan", 1); //1=last hour

/*** [SECTION 4500]: RFP (RESIST FINGERPRINTING)
/* 4501: enable privacy.resistFingerprinting */
 // user_pref("privacy.resistFingerprinting", false); // Set FALSE
 /* 4502: set new window size rounding max values */
user_pref("privacy.window.maxInnerWidth", 1200); // 1200
user_pref("privacy.window.maxInnerHeight", 800); // 800
 /* 4504: enable RFP letterboxing */
user_pref("privacy.resistFingerprinting.letterboxing", false); // Set FALSE
 /* 4520: disable WebGL (Web Graphics Library) */
user_pref("webgl.disabled", false); // Set FALSE

/*** [SECTION 5000]: OPTIONAL OPSEC ***/
/* 5003: disable saving passwords */
user_pref("signon.rememberSignons", false); // FALSE
/* 5006: disable favicons in history and bookmarks */
user_pref("browser.chrome.site_icons", true); // TRUE
/* 5013: disable browsing and download history */
user_pref("places.history.enabled", true); // TRUE
/* 5016: discourage downloading to desktop */
user_pref("browser.download.folderList", 1); // 1=downloads

/*** [SECTION 5500]: OPTIONAL HARDENING ***/

/*** [SECTION 6000]: DON'T TOUCH ***/

/*** [SECTION 7000]: DON'T BOTHER ***/
/* 7002: set default permissions */
 user_pref("permissions.default.geo", 2); // 2=block
 user_pref("permissions.default.desktop-notification", 2); // 2=block
/* 7005: disable SSL session IDs */
 user_pref("security.ssl.disable_session_identifiers", true); // TRUE
 /* 7007: referers */
 /* [WHY] Only cross-origin referers (1600s) need control */
 user_pref("network.http.sendRefererHeader", 2); // 2=send on all requests
 user_pref("network.http.referer.trimmingPolicy", 0); // 0=send the full URL
/* 7014: disable System Add-on updates */
 user_pref("extensions.systemAddon.update.enabled", false); // FALSE
 user_pref("extensions.systemAddon.update.url", ""); // empty
/* 7015: enable the DNT (Do Not Track) HTTP header */
user_pref("privacy.donottrackheader.enabled", true); // TRUE
/* 7018: disable Web Notifications */
user_pref("dom.webnotifications.enabled", false); // FALSE
user_pref("dom.webnotifications.serviceworker.enabled", false); // FALSE
/* 7019: disable Push Notifications */
user_pref("dom.push.enabled", false); // FALSE

/*** [SECTION 8000]: DON'T BOTHER: FINGERPRINTING ***/
/* 8001: prefsCleaner: reset items useless for anti-fingerprinting */
user_pref("device.sensors.enabled", false); // Set FALSE
user_pref("media.navigator.enabled", false); // Set FALSE
user_pref("media.video_stats.enabled", false); // Set FALSE

/*** [SECTION 9000]: NON-PROJECT RELATED ***/

/*** [SECTION 10000]: PERSONAL ***/
/* disable auto update. Don't show reminder popup for new version with policy "ManualAppUpdateOnly": true */
user_pref("app.update.auto", false);
/* disable beacon. The Beacon feature allows websites to send tracking data after you left the website */
user_pref("beacon.enabled", false);
/* don't add default bookmark */
user_pref("browser.bookmarks.restore_default_bookmarks", false);
/* disable reset prompt after a while unused */
user_pref("browser.disableResetPrompt", true);
/* disable preload newtab content */
user_pref("browser.newtab.preload", false);
/* rows of shortcuts in newtabpage */
user_pref("browser.newtabpage.activity-stream.topSitesRows", 3);
/* Disable Heartbeat */
user_pref("browser.selfsupport.url", "");
/* disable check Firefox default browser */
user_pref("browser.shell.checkDefaultBrowser", false);
/* set dark theme for content and toolbar */
// user_pref("browser.theme.content-theme", 0);
// user_pref("browser.theme.toolbar-theme", 0);
// user_pref("extensions.activeThemeID", "firefox-compact-dark@mozilla.org");
/* hide Firefox View button on top-left corner */
user_pref("browser.tabs.firefox-view", false);
/* hide group title in urlbar like "Firefox Suggest" */
user_pref("browser.urlbar.groupLabels.enabled", false);
/* show http:// from urlbar */
user_pref("browser.urlbar.trimURLs", false);
/* disable Health Reports (complement 0331) */
user_pref("datareporting.healthreport.service.enabled", false);
/* Remove web content access to Battery API */
user_pref("dom.battery.enabled", false);
/* allow open new windows */
user_pref("dom.disable_open_during_load", false);
/* don't autofill forms. Work with (5017) and extensions.formautofill.available */
user_pref("dom.forms.autocomplete.formautofill", false);
/* don't participate in experiments */
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
/* disable autoupdate for extensions */
user_pref("extensions.update.autoUpdateDefault", false);
/* disable Firefox Accounts */
user_pref("identity.fxaccounts.enabled", false);
/* set trackingprotection if (2701) is custom. Not strict like now (see 7016) */
user_pref("privacy.trackingprotection.emailtracking.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
/* services will not sync with account */
user_pref("services.sync.declinedEngines", "passwords,tabs,forms,history");
/* disable Firefox Relay, alias email */
user_pref("signon.firefoxRelay.feature", "disabled");
/* disable password generation */
user_pref("signon.generation.enabled", false);
/* disable password breach alerts */
user_pref("signon.management.page.breach-alerts.enabled", false);
/* enable groups by profile in taskbar */
user_pref("taskbar.grouping.useprofile", true);
/* enable custom css profiles */
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
/* enable compact mode option in the customize UI density picker */
user_pref("browser.compactmode.show", true);

/*** [SECTION 11000]: WEBSITE BREAKAGE FIX 
   Uncomment desired fix
***/
/* website: comafi.com.ar 
 * business: bank
 * breakage: error SSL_ERROR_UNSAFE_NEGOTIATION 
 * pref involved: security.ssl.require_safe_negotiation
 * old value: true 
 * new value: false */
user_pref("security.ssl.require_safe_negotiation", false);
/* website: swissmedical.com.ar 
 * business: health
 * breakage: login doesn't work 
 * pref involved: privacy.resistFingerprinting
 * old value: true 
 * new value: false */
user_pref("privacy.resistFingerprinting", false); 
