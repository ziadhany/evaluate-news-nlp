function checkURL(inputText) {
    var REGEX_EXP =
    /(https?:\/\/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9])(:?\d*)\/?([a-z_\/0-9\-#.]*)\??([a-z_\/0-9\-#=&]*)/g;
  var regexp = new RegExp(REGEX_EXP);
  return regexp.test(inputText);
}

export { checkURL }
