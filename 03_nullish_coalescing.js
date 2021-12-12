console.log('Result', false ?? 'some truthy value'); // false

console.log('Result', undefined ?? 'some truthy value'); // some truthy value

console.log('Result', null ?? 'some truthy value'); // some truthy value

console.log('Result', NaN ?? 'some truthy value'); // NaN

console.log('Result', [] ?? 'some truthy value'); // []

console.log('Result', {} ?? 'some truthy value'); // {}

// ----------------------------------------------------------------

console.log(false || 'some truthy value'); // some truthy value

console.log(undefined || 'some truthy value'); // some truthy value

console.log(null || 'some truthy value'); // some truthy value

console.log(NaN || 'some truthy value'); // some truthy value
