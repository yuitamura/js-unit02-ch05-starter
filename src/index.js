import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot(); // ここではPolyglotを呼ぶ役割だけ
    this.currentLocale = localStorage.getItem('locale') || 'ja'; // スタート地点の指定、ユーザーの言語選択後にも使える変数
  }

  setup() { // スコープを意識
    if (this.currentLocale == "ja") {
      this.polyglot.extend({
        "helloJa": "こんにちは、世界"
      });
      return
    }
    if (this.currentLocale == "en") {
      this.polyglot.extend({
        "helloEn": "Hello, world"
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
    if (this.currentLocale == "ja") {
      mainEl.innerHTML = this.polyglot.t("helloJa");
      return
    }
    if (this.currentLocale == "en") {
      mainEl.innerHTML = this.polyglot.t("helloEn");
    }
    /*
      mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。 
    */
  }
}

{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", app.updateLocale);
  
  const button2 = document.getElementById('button2');
  button2.addEventListener("click", app.updateLocale);
}