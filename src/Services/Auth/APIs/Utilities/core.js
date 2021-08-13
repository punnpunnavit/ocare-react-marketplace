// Defines the reusable class that makes use of our provider.js with options we can define per api endpoint collection. As a result of being a constructor function, we can extend it's functionality on individual API collections as needed while still keeping a consistent base for the majority of our code.
// In this constructor class, we can define which base API resources will be consumed. We can also extend the class in each API utility to include custom endpoints unique to the API table(s) without created accidental one-off solutions littered in our code base away from this file.
// core.js

import apiProvider from "./provider";

export class ApiCore {
  constructor(options) {
    if (options.getAll) {
      this.getAll = () => {
        return apiProvider.getAll(options.url);
      };
    }

    if (options.getSingle) {
      this.getSingle = (id) => {
        return apiProvider.getSingle(options.url, id);
      };
    }

    if (options.post) {
      this.post = (model) => {
        return apiProvider.post(options.url, model);
      };
    }

    if (options.put) {
      this.put = (model) => {
        return apiProvider.put(options.url, model);
      };
    }

    if (options.patch) {
      this.patch = (model) => {
        return apiProvider.patch(options.url, model);
      };
    }

    if (options.remove) {
      this.remove = (id) => {
        return apiProvider.remove(options.url, id);
      };
    }
  }
}
