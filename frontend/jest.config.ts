import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  // Add JSX configuration
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/Components/$1',
    '^@pages/(.*)$': '<rootDir>/src/Pages/$1',
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
    // Add other aliases as needed
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      // required due to custom location of tsconfig.json configuration file
      // https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig
      {
        tsconfig: './tsconfig.app.json',
        jsx: 'react-jsx'
      },
    ],
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  
  setupFilesAfterEnv: [
    "@testing-library/jest-dom"
 ],

  // Other Jest configuration options
};

export default config;
