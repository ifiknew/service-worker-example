import WorkboxNamespace from "workbox-sw";

const wbDir = '/workbox-v4.3.1';

importScripts(wbDir + '/workbox-sw.js');

const wb: typeof WorkboxNamespace = (this as any).workbox;

wb.setConfig({
  modulePathPrefix: wbDir + '/'
})

wb.routing.registerRoute(
  /\.jpeg/,
  wb.strategies.cacheFirst()
)

wb.routing.registerRoute(
  /.*/,
  new wb.strategies.NetworkFirst({
    networkTimeoutSeconds: 1
  })
)