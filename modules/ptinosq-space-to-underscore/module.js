function run(clipboardContent) {
  if (!clipboardContent) {
    return "";
  }

  return clipboardContent.replaceAll(" ", "_");
}

module.exports = {
  run,
};
