function myFunction(event) {
  var formData = event.values;

  var bgemail = formData[1];
  var bgcodeA = formData[2];
  var bgcodeB = formData[3];
  var bgcodeC = formData[4];
  var bgcodeD = formData[5];
  var bgname = formData[6];
  var bghundts = formData[7];
  var bgtents = formData[8];
  var bgts = formData[9];
  var bghund = formData[10];
  var bgten = formData[11];
  var bgone = formData[12];
  var bguse = formData[14];
  var bgdate = formData[15];
  var name = formData[16];

  // 打開模板檔案
  var file = DriveApp.getFileById("13DJhMHsG_ClSayWbl0Ionw_8NsMQK04Nrz0HPgRLRVk");
  // 打開輸出資料夾
  var folder = DriveApp.getFolderById("1ekN9b-LADrsVCCOvU_EQLFUdPEPWuxhS");

  // 複製一份模板進去輸出資料夾
  var copy = file.makeCopy( bgdate +"｜"+ bgcodeA + -bgcodeB + -bgcodeC + -bgcodeD +"｜"+ bgname +"｜"+ bguse, folder);

  // 打開剛剛複製出來的新檔案
  var doc = DocumentApp.openById(copy.getId());
  var body = doc.getBody();  // 取得新文件的內容。也可以透過它直接更改他的內容

  // 將資料塞到對應內容上面
  body.replaceText("A", bgcodeA);
  body.replaceText("B", bgcodeB);
  body.replaceText("C", bgcodeC);
  body.replaceText("D", bgcodeD);
  body.replaceText("E", bgname);
  body.replaceText("F", bghundts);
  body.replaceText("G", bgtents);
  body.replaceText("H", bgts);
  body.replaceText("I", bghund);
  body.replaceText("J", bgten);
  body.replaceText("K", bgone);
  body.replaceText("L", bguse);
  body.replaceText("M", bgdate);
  body.replaceText("N", name);

  // Send out the link to open the document.
  MailApp.sendEmail(bgemail,doc.getName() + "｜" + "黏貼憑證","請列印後依規定完成黏貼，並繳交給財務部承辦人。\n臺科大學生會財務部　敬啟\n"+doc.getUrl());

  doc.saveAndClose();

}
