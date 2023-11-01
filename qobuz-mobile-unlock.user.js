// ==UserScript==
// @name         Qobuz Mobile Unlock
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Unlocks the Qobuz Web Player on mobile devices.
// @author       DJDoubleD
// @namespace    https://github.com/DJDoubleD/Qobuz-Mobile-Unlock
// @homepageURL  https://github.com/DJDoubleD/Qobuz-Mobile-Unlock
// @match        https://play.qobuz.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Wait for window.onload event
    window.onload = function() {
        // Create a MutationObserver to watch for changes to the DOM tree
        const observer = new MutationObserver(function(mutationsList, observer) {
            // Check if mobileOverlay element exists
            const mobileOverlay = document.querySelector('.mobileOverlay');
            if (mobileOverlay) {
                // Remove mobileOverlay element from DOM tree
                mobileOverlay.remove();
                // Disconnect the observer once the element is removed
				// Comment this line out to restore some features that rely on the mobileOverlay element 
				// at the cost of doing some manual refreshes
                observer.disconnect();
            }
        });

        // Start observing changes to the DOM tree
        observer.observe(document.body, { childList: true, subtree: true });
    };
})();
