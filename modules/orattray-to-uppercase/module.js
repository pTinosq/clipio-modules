function run(clipboardContent) {
  if (!clipboardContent) {
    return "";
  }
  // Converts comma separated text to Python / JavaScript list.
  let splitContent = clipboardContent.split(",");
  let joinedContent = '["' + splitContent.join('", "') + '"]';
  return joinedContent;
}

module.exports = {
  run,
};
