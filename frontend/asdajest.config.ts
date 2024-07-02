import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  // Add JSX configuration
  transform: {
        '^.+\\.tsx?$': ['ts-jest', {//the content you'd placed at "global"
        tsconfig: '<rootDir>/tsconfig.json',
        "jsx": "react-jsx",
    }]
  },
  
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/Components/$1',
    '^@pages/(.*)$': '<rootDir>/src/Pages/$1',
    // Add other aliases as needed
  },
  // Other Jest configuration options
};

export default config;
