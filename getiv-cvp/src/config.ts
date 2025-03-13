const environments = {
  local: "http://localhost:5027",
};

const currentEnvironment = "local";

export const API_BASE_URL = environments[currentEnvironment];
