export default {
    transform: {
      "^.+\\.(t|j)sx?$": "@swc/jest",
    },
    transformIgnorePatterns: [
      '/node_modules/'
    ],
    testEnvironment: "jsdom"
  }
  