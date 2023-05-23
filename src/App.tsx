import { useState } from "react";
import { MathComponent } from "mathjax-react";
function App() {
  // 10進表示の数字を用意
  const min = 1;
  const max = 10000;
  const [number, setNumber] = useState(
    Math.floor(Math.random() * (max + 1 - min)) + min
  );
  // n進変換を行う
  const nmin = 2;
  const nmax = 16;
  let a = Math.floor(Math.random() * (nmax + 1 - nmin)) + nmin;
  let b = Math.floor(Math.random() * (nmax + 1 - nmin)) + nmin;
  while (a === b) {
    a = Math.floor(Math.random() * (nmax + 1 - nmin)) + nmin;
    b = Math.floor(Math.random() * (nmax + 1 - nmin)) + nmin;
  }
  const [before, setBefore] = useState(a);
  const [after, setAfter] = useState(b);
  // 見えるか見えないか
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  //公式の作成（前半）
  const numberArrayPrimer = [...number.toString(before)];
  const numberArray = numberArrayPrimer.map((value) => ( //16進数表記を10進数表記に訂正
    parseInt(value, 16)
  ));
  const popedNumber = numberArray.pop();
  const formula = numberArray.map((value, i) => (
    <MathComponent
          display={false}
          tex={String.raw` ${value} \times ${before}^{${numberArray.length - (i)}} +\,`}
        ></MathComponent>
  ));
  //公式の作成（後半）
  const numberArrayPrimer2 = [...number.toString(after)];
  const numberArray2 = numberArrayPrimer2.map((value) => ( //16進数表記を10進数表記に訂正
    parseInt(value, 16)
  ));
  const popedNumber2 = numberArray2.pop();
  const formula2 = numberArray2.map((value, i) => (
    <MathComponent
          display={false}
          tex={String.raw` ${value} \times ${after}^{${numberArray2.length - (i)}} +\,`}
        ></MathComponent>
  ));
  return (
    <>
      <h2>フラッシュn進法ニキ</h2>
      <p>
        <MathComponent
          display={false}
          tex={String.raw`${number.toString(before)}_{(${before})}`}
        ></MathComponent>{" "}
        を、{after}進表示しましょう。
      </p>
      {visible === false && (
        <button
          type="button"
          key={"answer"}
          onClick={() => {
            setVisible(true);
          }}
        >
          答え合わせ
        </button>
      )}
      {visible === true && (
        <button
          type="button"
          key={"answer"}
          onClick={() => {
            setVisible(false);
          }}
        >
          答え合わせ
        </button>
      )}
      <p style={{ visibility: visible ? "visible" : "hidden" }}>
        <MathComponent
          display={false}
          tex={String.raw`${number.toString(after)}_{(${after})}`}
        ></MathComponent>
      </p>
      <p>
      {hidden === false && (
        <button
          type="button"
          key={"answer2"}
          onClick={() => {
            setHidden(true);
          }}
        >
          解説を表示
        </button>
      )}
      {hidden === true && (
        <button
          type="button"
          key={"answer2"}
          onClick={() => {
            setHidden(false);
          }}
        >
          解説を非表示
        </button>
      )}
      </p>
      <p style={{ display: hidden ? "block" : "none" }}>
      <div className={"kaisetsu"}>
        <p>
        与えられた数を10進法で表すと、
        </p>
      <MathComponent
          display={false}
          tex={String.raw`${number.toString(before)}_{(${before})} =\,`}
        ></MathComponent>
        {formula}
        <MathComponent
          display={false}
          tex={String.raw`${popedNumber} \times ${before}^${0} =${number}`}
        ></MathComponent>
        <p>
          と計算できる。
        </p>
        <p>
        また、<MathComponent
          display={false}
          tex={String.raw`${after}^{${numberArray2.length}}<${number}<${after}^{${numberArray2.length + 1}} \:`}
        ></MathComponent>であるから、ここから{after}進法に直すと、
        </p>
      <MathComponent
          display={false}
          tex={String.raw`${number}=\,`}
        ></MathComponent>
        {formula2}
      <MathComponent
          display={false}
          tex={String.raw`${popedNumber2} \times ${after}^${0} =\,`}
        ></MathComponent>
        <MathComponent
          display={false}
          tex={String.raw`\, ${number.toString(after)}_{(${after})}`}
        ></MathComponent>
        <p>
          と求まり、答えを得る。
        </p>
      </div>
      </p>
      <button
        type="button"
        key={"button"}
        className={"kirikae"}
        onClick={() => {
          let a = Math.floor(Math.random() * (nmax + 1 - nmin)) + nmin;
          let b = Math.floor(Math.random() * (nmax + 1 - nmin)) + nmin;
          while (a === b) {
            a = Math.floor(Math.random() * (nmax + 1 - nmin)) + nmin;
            b = Math.floor(Math.random() * (nmax + 1 - nmin)) + nmin;
          }
          setAfter(a);
          setBefore(b);
          setNumber(Math.floor(Math.random() * (max + 1 - min)) + min);
          setVisible(false);
          setHidden(false);
          console.log(formula);
        }}
      >
        整数を切り替える
      </button>
      <p style={{ margin: 10 }}>
        {" "}
        ＊ このサイトの制作者「かっちゃん」へのお問い合わせは
        <a
          href="https://random776.github.io/kacchan-uts2-22/contact.html"
          className="btn4"
        >
          こちら
        </a>
        から。
      </p>
      <p style={{ margin: 10 }}>
        {" "}
        ＊ 2〜16進表示の中で、ランダムに問題が作成されます。
      </p>
    </>
  );
}

export default App;
