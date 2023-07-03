function run(clipboardContent) {
  if (!clipboardContent) {
    return "";
  }

  return clipboardContent.trim();
}

module.exports = {
  run,
};
