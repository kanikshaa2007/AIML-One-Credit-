# Portfolio Test Suite

This directory contains comprehensive test cases for the React portfolio application.

## Test Structure

### Test Files
- `App.test.tsx` - Main test suite covering all portfolio functionality

### Test Categories

#### 1. Basic Rendering Tests
- ✅ Application renders without crashing
- ✅ Main heading displays correctly
- ✅ Profession title is shown
- ✅ All main sections are present (About, Skills, Projects, Contact)

#### 2. Hero Section Tests
- ✅ Call-to-action buttons are displayed
- ✅ Animated avatar with "KR" initials renders

#### 3. About Section Tests
- ✅ Personal description is displayed
- ✅ Statistics cards show correct values (8 Projects, 8.47 CGPA, 5+ Certifications, 15+ Skills)
- ✅ Education information is present

#### 4. Skills Section Tests
- ✅ All skill categories render (Programming, ML/AI, Tools & Cloud)
- ✅ Skill proficiency levels display correctly
- ✅ Certification cards are shown with proper icons

#### 5. Projects Section Tests
- ✅ All featured projects are displayed
- ✅ Project technologies and descriptions are shown
- ✅ Project cards have proper styling and icons

#### 6. Contact Section Tests
- ✅ Contact information displays correctly
- ✅ Social media icons are present
- ✅ Contact form submit button exists

#### 7. Navigation Tests
- ✅ Navigation menu renders
- ✅ Section links are present and functional
- ✅ Smooth scrolling between sections works

#### 8. Footer Tests
- ✅ Footer content displays properly
- ✅ Copyright and attribution text is correct

#### 9. User Interaction Tests
- ✅ Navigation between sections works
- ✅ Buttons are enabled and clickable
- ✅ Form inputs accept user input

#### 10. Accessibility Tests
- ✅ Proper heading hierarchy (H1, H2, H3 tags)
- ✅ Buttons have descriptive text
- ✅ Form labels are properly associated

#### 11. Visual Elements Tests
- ✅ Gradient backgrounds are applied
- ✅ Animation classes are present
- ✅ Dark theme styling is used consistently

## Running Tests

### Prerequisites
Make sure all dependencies are installed:
```bash
npm install
```

### Run All Tests
```bash
npm run test:run
```

### Run Tests in Watch Mode
```bash
npm test
```

### Run Tests with UI
```bash
npm run test:ui
```

### Run Tests with Coverage
```bash
npm run test:coverage
```

## Test Configuration

### Vitest Configuration (`vitest.config.ts`)
- Uses jsdom environment for DOM simulation
- Includes test setup file for jest-dom matchers
- Configured for React component testing

### Test Setup (`src/test/setup.ts`)
- Imports jest-dom for additional matchers
- Mocks react-icons to avoid import issues

## Mocking Strategy

### React Icons Mocking
Since react-icons can cause issues in test environments, all icons are mocked with simple div elements containing test IDs:

```javascript
vi.mock('react-icons/fa', () => ({
  FaGithub: () => <div data-testid="github-icon">GitHub</div>,
  // ... other icons
}))
```

## Test Best Practices Implemented

1. **Descriptive Test Names**: Each test clearly describes what it's testing
2. **Arrange-Act-Assert Pattern**: Tests follow clear structure
3. **Mocking External Dependencies**: Icons and external libraries are properly mocked
4. **Accessibility Testing**: Tests include accessibility checks
5. **User Interaction Testing**: Form inputs and button clicks are tested
6. **Visual Regression Prevention**: CSS classes and styling are verified

## Continuous Integration

These tests can be integrated into CI/CD pipelines to ensure:
- No regressions in functionality
- Consistent rendering across environments
- Accessibility standards are maintained
- User interactions work as expected

## Test Maintenance

When adding new features to the portfolio:
1. Add corresponding test cases
2. Update existing tests if functionality changes
3. Ensure all tests pass before deployment
4. Review test coverage regularly

## Troubleshooting

### Common Issues
1. **Icon Import Errors**: Make sure react-icons are properly mocked
2. **DOM Element Not Found**: Check that elements are rendered before testing
3. **Async Operations**: Use `waitFor` for asynchronous operations

### Debug Tips
- Use `screen.debug()` to see the current DOM state
- Check test setup and mocking
- Verify component props and state

## Performance Testing

The test suite includes basic performance checks:
- Component renders without performance warnings
- Re-rendering efficiency is maintained
- Memory leaks are prevented through proper cleanup

## Future Enhancements

Potential test improvements:
- Visual regression testing with tools like Chromatic
- End-to-end testing with Playwright or Cypress
- Performance benchmarking
- Accessibility auditing with axe-core
- Cross-browser compatibility testing