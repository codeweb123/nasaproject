const button = document.getElementById("button");
const audioElement = document.getElementById("audio");
const myForm = document.getElementById("myForm");

const VoiceRSS = {
  speech(e) {
    this._validate(e), this._request(e);
  },
  _validate(e) {
    if (!e) throw "The settings are undefined";
    if (!e.key) throw "The API key is undefined";
    if (!e.src) throw "The text is undefined";
    if (!e.hl) throw "The language is undefined";
    if (e.c && "auto" != e.c.toLowerCase()) {
      let a = !1;
      switch (e.c.toLowerCase()) {
        case "mp3":
          a = new Audio().canPlayType("audio/mpeg").replace("no", "");
          break;
        case "wav":
          a = new Audio().canPlayType("audio/wav").replace("no", "");
          break;
        case "aac":
          a = new Audio().canPlayType("audio/aac").replace("no", "");
          break;
        case "ogg":
          a = new Audio().canPlayType("audio/ogg").replace("no", "");
          break;
        case "caf":
          a = new Audio().canPlayType("audio/x-caf").replace("no", "");
      }
      if (!a) throw `The browser does not support the audio codec ${e.c}`;
    }
  },
  _request(e) {
    const a = this._buildRequest(e),
      t = this._getXHR();
    (t.onreadystatechange = function () {
      if (4 == t.readyState && 200 == t.status) {
        if (0 == t.responseText.indexOf("ERROR")) throw t.responseText;
        let e = t.responseText;
        (audioElement.src = e),
          (audioElement.onloadedmetadata = () => {
            audioElement.play();
          });
      }
    }),
      t.open("POST", "https://api.voicerss.org/", !0),
      t.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded; charset=UTF-8"
      ),
      t.send(a);
  },
  _buildRequest(e) {
    const a = e.c && "auto" != e.c.toLowerCase() ? e.c : this._detectCodec();
    return `key=${e.key || ""}&src=${e.src || ""}&hl=${e.hl || ""}&r=${
      e.r || ""
    }&c=${a || ""}&f=${e.f || ""}&ssml=${e.ssml || ""}&b64=true`;
  },
  _detectCodec() {
    const e = new Audio();
    return e.canPlayType("audio/mpeg").replace("no", "")
      ? "mp3"
      : e.canPlayType("audio/wav").replace("no", "")
      ? "wav"
      : e.canPlayType("audio/aac").replace("no", "")
      ? "aac"
      : e.canPlayType("audio/ogg").replace("no", "")
      ? "ogg"
      : e.canPlayType("audio/x-caf").replace("no", "")
      ? "caf"
      : "";
  },
  _getXHR() {
    try {
      return new XMLHttpRequest();
    } catch (e) {}
    try {
      return new ActiveXObject("Msxml3.XMLHTTP");
    } catch (e) {}
    try {
      return new ActiveXObject("Msxml2.XMLHTTP.6.0");
    } catch (e) {}
    try {
      return new ActiveXObject("Msxml2.XMLHTTP.3.0");
    } catch (e) {}
    try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {}
    try {
      return new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
    throw "The browser does not support HTTP request";
  },
};

function toggleButton() {
  button.disabled = !button.disabled;
}

function tellMe(dog) {
  console.log(dog.name);
  VoiceRSS.speech({
    key: "b1e0fb006377467dbf2a49d8a4640c5e",
    src: dog.name,
    hl: "en-us",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

async function postFormDataAsJson({ url, formData }) {
  const plainFormData = Object.fromEntries(formData.entries());
  const formDataJsonString = JSON.stringify(plainFormData);
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: formDataJsonString,
  };

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.json();
}

async function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const url = form.action;

  try {
    const formData = new FormData(form);
    const responseData = await postFormDataAsJson({ url, formData });
    console.log({ responseData });
  } catch (error) {
    console.error(error);
  }
}

async function getDogs() {
  const apiUrl = "https://api.api-ninjas.com/v1/dogs?name=" + dog;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: { "X-Api-Key": "jtAMozoRx5WmLJl07wRKQQ==6F1Dpvw4uHeeIAvl" },
    });
    const data = await response.json();
    console.log(data);
    if (data.name) {
      dog = String(`${data.name}`);
    } else {
      dog = data;
    }
    //Passing  to VoiceRSS API
    tellMe(dog);
    // // Disable Button
    toggleButton();
  } catch (error) {
    console.log("whoops", error);
    // Catch Error Here
  }
}

myForm.addEventListener("submit", handleFormSubmit);
button.addEventListener("click", getDogs);
audioElement.addEventListener("ended", toggleButton);
