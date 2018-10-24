import fetch from 'unfetch';

export function api(uri, data = {}) {
  return fetch('https://like.cinwell.com' + uri, data).then(r =>
    r.text()
  );
}
