import ProxyAuthentication from "./Repositories/proxies/ProxyAuthentication";

const repositories = {
  CrlmLimitReport: ProxyCrlmLimitReport,
  AAEximContractReport: ProxyAAEximContractReport,
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
  post: (name) => repositories[name],
  put: (name) => repositories[name],
  delete: (name) => repositories[name],
};
