module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['/jest.setup.js'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    },
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    }
  };