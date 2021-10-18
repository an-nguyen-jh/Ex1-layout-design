const regExpPrototype = {
  email: new RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    g
  ),
  //local-part
  //[a-z0-9!#$%&'*+/=?^_`{|}~-]: các ký tự được chấp nhận khi đặt tên email
  //(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*: các ký tự được chấp nhận khi đặt tên email bất đầu với dấu chấm
  // * : trùng 0 or nhiều đoạn mã reg trước đó
  // @: trùng ký tự @
  //\. : trùng với ký tự .
  //[a-z0-9-]: trùng với các ký tự từ a-z, 0-9 và ký tư "-"
  // ?: trùng với 0 or 1 đoạn mã reg trước đó
  password: new RegExp(/[0-9]+\W+[A-Z]+.{8,}/, "gm"),
  //[0-9]+; ít nhất 1 số
  // \W+: ít nhất 1 ký tự đặc biệt
  //[A-Z]+ Chứa ít nhất 1 ký tự in hoa
  //{8,}: chứa ít nhất 8 ký tự
};

function checkMatchedStringByRegExp(str, regExpType) {
  return str.match(regExpPrototype[regExpType]);
}
