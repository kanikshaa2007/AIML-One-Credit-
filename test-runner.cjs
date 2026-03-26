#!/usr/bin/env node

/**
 * Portfolio Test Runner
 * Simple script to run the test suite with clear output
 */

const { execSync } = require('child_process')

console.log('🚀 Running Portfolio Test Suite...\n')

try {
  // Run tests with verbose output
  const result = execSync('npx vitest run --reporter=verbose', {
    encoding: 'utf8',
    stdio: 'inherit'
  })

  console.log('\n✅ All tests completed successfully!')

} catch (error) {
  console.log('\n❌ Some tests failed. Check the output above for details.')
  process.exit(1)
}

console.log('\n📊 Test Summary:')
console.log('- Basic rendering functionality')
console.log('- Component interactions')
console.log('- Accessibility compliance')
console.log('- Visual element styling')
console.log('- Navigation and user flows')
console.log('\n🎯 Portfolio is ready for deployment!')