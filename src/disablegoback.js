
function DisbaleGoback(cb) {
  window.addEventListener('popstate', function() {
    cb();
  });
  history.pushState(
    {},
    'test',
    window.location.href
  );
}
