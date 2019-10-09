const sw: ServiceWorkerGlobalScope = this as any;

const getSWCache = caches.open('sw');

sw.oninstall = e => {
  console.log('oninstall');
  sw.skipWaiting();
}

sw.onactivate = e => {
  console.log('onactivate');
}

sw.onfetch = async e => {
  console.log('on fetch');
  console.log(e.request.url);
  async function getRes () {
    const cache = await getSWCache;

    let res = await cache.match(e.request);
    console.log(res ? 'cache found' : 'no cache found')
    if (!res) {
      const originRes = await fetch(e.request);
      res = originRes.clone();
      cache.put(e.request, res);
    }
    return res;
  }
  e.respondWith(getRes());
}