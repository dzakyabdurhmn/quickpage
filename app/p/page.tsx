"use client";
import { useState } from "react";

const MyFormComponent = () => {
  const [nama, setNama] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nama }), // Mengirim data dalam format JSON
      });

      if (response.ok) {
        console.log("Data berhasil dikirim ke file info.json");
      } else {
        console.log("Terjadi kesalahan saat mengirim data");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nama:
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyFormComponent;

// import React, { useState, useEffect } from "react";

// async function fetchData() {
//   try {
//     const response = await fetch("https://scraper-api.smartproxy.com/v2/scrape", {
//       method: "POST",
//       body: JSON.stringify({
//         target: "tiktok_profile",
//         url: "https://www.tiktok.com/@nba",
//         locale: "en-us",
//         geo: "United States",
//       }),
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Basic UzAwMDAxMzk4MzQ6UFcxZDM5M2EzMDFlN2I5ZmU0YTcwMmYwZDZjYzMzYzlmMDk=",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return null;
//   }
// }

// function Page() {
//   const [apiData, setApiData] = useState(null);

//   useEffect(() => {
//     fetchData().then((data) => setApiData(data));
//   }, []);

//   return <div>{apiData ? JSON.stringify(apiData) : "Loading..."}</div>;
// }

// export default Page;
