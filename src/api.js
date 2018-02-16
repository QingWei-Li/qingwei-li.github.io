import fetch from 'unfetch';

export function api(uri, data = {}) {
  data.headers = {
    'X-Parse-Application-Id': 'j21GsrcwTj8NTuiQ4v4AAYGji86kfUEicWvDRMwQ',
    'X-Parse-REST-API-Key': '6MRjZRPkJvsmEUWY1q7eK8THmMSkhujEdxlvQAxw'
  };
  return fetch('https://parseapi.back4app.com/' + uri, data).then(r =>
    r.json()
  );
}
