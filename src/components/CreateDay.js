import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function addDay() {
    if (!window.confirm("Day를 추가하시겠습니까?")) {
      return;
    }

    if (!isLoading) {
      setIsLoading(true);
      fetch(`http://localhost:3001/days/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: days.length + 1,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("Day가 추가되었습니다.");
          navigate("/");
          setIsLoading(false);
        }
      });
    }
  }

  return (
    <>
      <h3>현재 일 수 : {days.length}일</h3>
      <button onClick={addDay} className={isLoading ? "disabled" : ""}>
        {isLoading ? "Day 추가중..." : "Day 추가"}
      </button>
    </>
  );
}
