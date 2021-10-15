const regExpPrototype = {
  email: new RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    g
  ),
  //local-part
  //[a-z0-9!#$%&'*+/=?^_`{|}~-]: các ký tự được chấp nhận khi đặt tên email
  //(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+):
  // * : trùng 0 or nhiều đoạn ký mã reg trước đó
  // @: trùng ký tự @
  //\. : trùng với ký tự .
  //[a-z0-9-]: trùng với các ký tự từ a-z, 0-9 và ký tư "-"
  // ?: trùng với 0 or 1 đoạn mã reg trước đó
  password: new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "gm"),
};

function checkMatchedStringByRegExp(str, regExpType) {
  return str.match(regExpPrototype[regExpType]);
}
