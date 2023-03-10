import '@testing-library/jest-dom'

import { server } from './mocks/server/server.js'
// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that may be added during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())