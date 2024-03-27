// ==UserScript==
// @name         Qobuz Mobile Unlock
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Unlocks the Qobuz Web Player on mobile devices.
// @author       DJDoubleD
// @icon         https://www.google.com/s2/favicons?sz=64&domain=qobuz.com
// @namespace    https://github.com/DJDoubleD/Qobuz-Mobile-Unlock
// @homepageURL  https://github.com/DJDoubleD/Qobuz-Mobile-Unlock
// @match        https://play.qobuz.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function removeMobileOverlay() {
        const mobileOverlay = document.querySelector('.mobileOverlay');
        if (mobileOverlay) {
            mobileOverlay.remove();
        }
    }

    // Create a MutationObserver to watch for changes to the DOM tree
    const observer = new MutationObserver(function (mutationsList, observer) {
        removeMobileOverlay();
    });

    // Start observing changes to the DOM tree
    observer.observe(document.body, { childList: true, subtree: true });

    // For good measure, also try to remove the overlay when the script first runs
    removeMobileOverlay();
})();