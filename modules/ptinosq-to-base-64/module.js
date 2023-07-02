function run(clipboardContent) {
  if (!clipboardContent) {
    return "";
  }

  return Buffer.from(clipboardContent, "base64").toString("utf8");
}

module.exports = {
  run,
};
