function read(pagename){
  fetch("https://note.ms/"+pagename, {
    "headers": {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\";Not A Brand\";v=\"99\", \"Chromium\";v=\"94\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://note.ms/"+pagename,
    "referrerPolicy": "no-referrer-when-downgrade",
    "mode": "cors",
    "credentials": "omit"
  }).then(res => res.text())
    .then(text => this.a = text);
    dom = document.createElement("html");
    dom.innerHTML = a;
  try{
    text = dom.getElementsByTagName("textarea")[0].value;
  }catch{
    return "error 403";
  }
    return text;
}
function set(pagename, content){
  content = content.replaceAll("%","%25").replaceAll("&","%26");
  fetch("https://note.ms/"+pagename, {
    "headers": {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\";Not A Brand\";v=\"99\", \"Chromium\";v=\"94\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://note.ms/"+pagename,
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": "&t="+content,
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  });
}
