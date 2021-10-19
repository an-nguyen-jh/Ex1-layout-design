const regExpPrototype = {
  email: new RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]+/,
    "g"
  ),
  //local-part@domain-name.subdomain-name. (RFC2822)
  // (?:...) non-capturering group: xác định các nhóm mã regex nhưng không hiển thị trong kết quả! trả vế 1 kết quả mong muốn duy nhất.
  //
  //[a-z0-9!#$%&'*+/=?^_`{|}~-]: các ký tự được chấp nhận khi đặt tên email
  //(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*: các ký tự được chấp nhận khi đặt tên email bất đầu với dấu chấm
  // * : trùng 0 or nhiều đoạn mã reg trước đó
  // @: trùng ký tự @
  //\. : trùng với ký tự .
  //[a-z0-9-]: trùng với các ký tự từ a-z, 0-9 và ký tư "-"
  //(?:[a-z0-9-]*[a-z0-9])?: optional: theo sau
  //*: trùng với ít nhất 0 đoạn mã trước đó
  // ?: trùng với 0 or 1 đoạn mã reg trước đó
  // +: trùng với ít nhất 1 đoạn mã
  password: new RegExp(/^(?=.*[A-Z])(?=.*\d)(?=.*\W)\S{8,}$/, "g"),
  // (?=...) positive lookahead: trùng khớp vs 1 string nếu đoạn mã này theo sau bởi 1 đoạn mả chính xác trong positive lookahead
  //Ex: (?=.*[A-Z]): chọn trùng với tất cả string chứa 1 chữ in hoa
  //[0-9] | \d: trùng với tất cả ký tự số 1 số
  // \W+: ít nhất 1 ký tự đặc biệt
  //[A-Z]+ Chứa ít nhất 1 ký tự in hoa
  //{8,}: chứa ít nhất 8 ký tự
  // \S: không chứa khoảng trắng
  //kết hợp tất cả các group positive lookahead ta tạo ra được: trùng với chuỗi sao cho có có ít nhất 1 ... mà vị trí ko quan trọng
};

function checkMatchedStringByRegExp(str, regExpType) {
  return str.match(regExpPrototype[regExpType]);
}

console.log(checkMatchedStringByRegExp("asssAaaaa1ssss!", "password"));
console.log(
  checkMatchedStringByRegExp(
    "1712268@student.hcmus.edu.vn tes21t.server-name.test@gm33ail-na1me.com",
    "email"
  )
);
