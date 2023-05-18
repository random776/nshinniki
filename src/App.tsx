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
  const [before, setBefore] = useState(
    Math.floor(Math.random() * (nmax + 1 - nmin)) + nmin
  );
  const [after, setAfter] = useState(
    Math.floor(Math.random() * (nmax + 1 - nmin)) + nmin
  );
  // 見えるか見えないか
  const [visible, setVisible] = useState(false);
  return (
    <>
    <h2>フラッシュn進法ニキ</h2>
      <p>
      <MathComponent
          display={false}
          tex={String.raw`${number.toString(before)}_{(${before})}`}
        ></MathComponent> を、{after}進表示しましょう。
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
      <button
        type="button"
        key={"button"}
        onClick={() => {
          setNumber(Math.floor(Math.random() * (max + 1 - min)) + min);
          setAfter(Math.floor(Math.random() * (nmax + 1 - nmin)) + nmin);
          setBefore(Math.floor(Math.random() * (nmax + 1 - nmin)) + nmin);
          setVisible(false);
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
      <p style={{ margin: 10 }}>
        {" "}
        ＊ 時々、「n進からn進に直しましょう」というしょーもない問題が出てきますが悪しからず。
      </p>
    </>
  );
}

export default App;
