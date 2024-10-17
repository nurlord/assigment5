"use strict";
const updateDateTime = () => {
  const now = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  const formattedDateTime = now.toLocaleString("en-US", options);
  document.querySelector("#dateTime").textContent = formattedDateTime;
};

updateDateTime();

setInterval(updateDateTime, 60000);
