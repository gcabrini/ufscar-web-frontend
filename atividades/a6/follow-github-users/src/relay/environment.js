import { Environment, RecordSource, Store } from "relay-runtime";
import {
  RelayNetworkLayer,
  urlMiddleware,
  loggerMiddleware,
  errorMiddleware,
  perfMiddleware,
  retryMiddleware,
  authMiddleware,
  cacheMiddleware,
  progressMiddleware,
} from "react-relay-network-modern/lib";

import config from "./config";

const __DEV__ = process.env.NODE_ENV === "development";

const network = new RelayNetworkLayer([
  cacheMiddleware({
    size: 100, // max 100 requests
    ttl: 900000, // 15 minutes
  }),
  urlMiddleware({
    url: (req) => config.graphql,
  }),
  __DEV__ ? loggerMiddleware() : null,
  __DEV__ ? errorMiddleware() : null,
  __DEV__ ? perfMiddleware() : null,
  retryMiddleware({
    allowMutations: false,
    allowFormData: true,
    fetchTimeout: 5 * 1000, // default is 15 * 1000
    retryDelays: (attempt) => Math.pow(2, attempt + 4) * 100, // or simple array
    statusCodes: (statusCode, req, res) =>
      statusCode < 200 || statusCode === 408,
  }),
  authMiddleware({
    token: () => config.token,
  }),
  progressMiddleware({
    onProgress: (current, total) => {
      console.log("Downloaded: " + current + " B, total: " + total + " B");
    },
  }),
]);

const source = new RecordSource();
const store = new Store(source);
export default new Environment({ network, store });
