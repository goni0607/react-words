import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();
  const [isLoadding, setIsLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    if (!isLoadding) {
      setIsLoading(true);
      fetch(`http://localhost:3001/words/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("단어 생성이 완료되었습니다.");
          navigate(`/day/${dayRef.current.value}`);
          setIsLoading(true);
        }
      });
    }
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label htmlFor="eng">Eng</label>
        <input type="text" placeholder="computer" id="eng" name="eng" ref={engRef} />
      </div>
      <div className="input_area">
        <label htmlFor="kor">Kor</label>
        <input type="text" placeholder="컴퓨터" id="kor" name="kor" ref={korRef} />
      </div>
      <div className="input_area">
        <label htmlFor="day">Day</label>
        <select id="day" name="day" ref={dayRef}>
          {days.map((day) => (
            <option value={day.day} key={day.id}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button className={isLoadding ? "disabled" : ""}>{isLoadding ? "저장중..." : "저장"}</button>
    </form>
  );
}
