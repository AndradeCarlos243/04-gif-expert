module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transform: {
        '^.+\\.svg$': './svgTransform.cjs',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
}