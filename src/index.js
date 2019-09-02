import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot(); // ここではPolyglotを呼ぶ役割だけ
    this.currentLocale = localStorage.getItem('locale') || 'ja'; // スタート地点の指定、ユーザーの言語選択後にも使える変数
    this.updateLocale = this.updateLocale.bind(this); // 右側：下の関数を呼び出している
  }

  setup() { // スコープを意識
    const currentLocale = this.currentLocale;
    if (currentLocale === 'ja') {
      this.polyglot.extend({
        "hello": "こんにちは、世界"
      });
    } else {
      this.polyglot.extend({
        "hello": "Hello, world"
      });
    }
    /* 
      現在のLocaleに合わせて、polyglotにメッセージをセットします。
      メッセージのセットにはpolyglot.extend()を利用します。
    */
  }

  updateLocale(e) {
    e.preventDefault(); //　メソッド。順番どおりに進むようにするため
    const newLocale = e.target.dataset.locale;
    console.log(newLocale);

    localStorage.setItem('locale', newLocale); // keyとvalueどちらも同じでOK？data-localeは使わない？
    this.currentLocale = newLocale;
    this.setup();
    this.showMessage();
    /*
      ボタンにセットされたdata-localeを元に現在のlocaleを変更します。
    */
  }

  showMessage() {
    const mainEl = document.getElementById('main');
    mainEl.innerHTML = `
      <h1>${this.polyglot.t("hello")}</h1>
    `
    /*
      mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。 
    */
  }
}

{
  const app = new TranslationApp();

  const button1 = document.getElementById('button1');
  button1.addEventListener("click", app.updateLocale);
  
  const button2 = document.getElementById('button2');
  button2.addEventListener("click", app.updateLocale);

  app.setup();
  app.showMessage();
}