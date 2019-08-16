import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    this.lang = lang
    this.polyglot = new Polyglot({locale: "ja"});
    this.currentLocale = localStorage.getItem(ja.lang); // スタート地点の指定、ユーザーの言語選択後にも使える変数
  }

  setup() {
    if (this.currentLocale == "ja") {
      polyglot.extend({
        "hello": "こんにちは、世界"
      });
      return
    }
    if (this.currentLocale == "en") {
      polyglot.extend({
        "hello": "Hello, world"
      });
    }

    /* 
      現在のLocaleに合わせて、polyglotにメッセージをセットします。
      メッセージのセットにはpolyglot.extend()を利用します。
    */
  }

  updateLocale(e) {

    /*
      ボタンにセットされたdata-localeを元に現在のlocaleを変更します。
    */
  }

  showMessage() {
    const mainEl = document.getElementById('main');
    const setup = this.setup();
    mainEl.innerHTML = setup;
    /*
      mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。 
    */
  }
}

const ja = new TranslationApp({
  lang: "ja"
});

const en = new TranslationApp({
  lang: "en"
});

{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", app.updateLocale);
  
  const button2 = document.getElementById('button2');
  button2.addEventListener("click", app.updateLocale);
}