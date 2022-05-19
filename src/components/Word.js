import { useState } from "react";

export default function Word({ word }) {
  const [wordId, setWordId] = useState(word.id);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleIsDone() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function deleteWord() {
    if (!window.confirm(`${word.eng}(${word.kor})단어를 삭제하시겠습니까?`)) return;

    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        setWordId(0);
      }
    });
  }

  if (wordId === 0) {
    return null;
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleIsDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={() => setIsShow(!isShow)}>뜻 {isShow ? "숨기기" : "보기"}</button>
      </td>
      <td>
        <button className="btn_del" onClick={deleteWord}>
          삭제
        </button>
      </td>
    </tr>
  );
}
