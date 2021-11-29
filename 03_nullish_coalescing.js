console.log(false ?? 'some truthy value'); // false

console.log(undefined ?? 'some truthy value'); // some truthy value

console.log(null ?? 'some truthy value'); // some truthy value

console.log(NaN ?? 'some truthy value'); // NaN

// ----------------------------------------------------------------

console.log(false || 'some truthy value'); // some truthy value

console.log(undefined || 'some truthy value'); // some truthy value

console.log(null || 'some truthy value'); // some truthy value

console.log(NaN || 'some truthy value'); // some truthy value
