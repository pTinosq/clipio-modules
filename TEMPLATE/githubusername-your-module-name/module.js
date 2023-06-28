// The `run` function is the entry point for your module's functionality.
// It takes the current clipboard content as an input and returns the modified clipboard content.
function run(clipboardContent) {
  // If the clipboard is empty or undefined, return an empty string.
  if (!clipboardContent) return "";

  // Add your custom code here to modify the clipboard content.
  // You can perform any operations or transformations you need.

  // Example: To convert the clipboard content to uppercase, you can use the `toUpperCase` method.
  let newClipboardContent = clipboardContent.toUpperCase();

  // Return the modified clipboard content.
  return newClipboardContent;
}

// Do not modify the code below this comment.
// Export the `run` function so that it can be invoked when the module is used.
module.exports = {
  run,
};
