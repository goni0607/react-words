import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";

export default function Day() {
  const { day } = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  if (words.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <h2>Day {day}</h2>
      <table>
        <caption>영단어 리스트</caption>
        <thead>
          <tr>
            <th scope="col">선택</th>
            <th scope="col">영어</th>
            <th scope="col">한국어</th>
            <th scope="col">뜻보기</th>
            <th scope="col">삭제</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
