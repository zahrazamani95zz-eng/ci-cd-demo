const build = document.querySelector('[data-build]');
if (build && window.__BUILD_TIME__) build.textContent = window.__BUILD_TIME__;
