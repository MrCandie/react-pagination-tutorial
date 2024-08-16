import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Pagination from "./component/Pagination";

function App() {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  let perPage = 10;

  const start = (perPage - 1) * currentPage;

  const end = start + perPage;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries/flag/images"
        );
        if (!response.ok) throw new Error("Something went wrong");

        const data = await response.json();
        setList(data?.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  console.log(list);

  return (
    <main className="home">
      {list?.slice(start, end).map((el, i) => (
        <Country src={el.flag} name={el.name} key={i} />
      ))}
      <Pagination
        length={list?.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        perPage={perPage}
      />
    </main>
  );
}

function Country({ src, name }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        borderBottom: "1px solid #ccc",
      }}>
      <div style={{ width: "50px" }}>
        <img
          style={{ width: "100%", objectFit: "contain", height: "50px" }}
          src={src}
          alt={name}
        />
      </div>
      <h2>{name}</h2>
    </div>
  );
}

export default App;
