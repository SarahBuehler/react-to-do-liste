import React from "react";

export default function Header() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-12 col-md-8 theshadow"></div>
        <h1 class="header">To-Do-Liste</h1>
        <input type="text" id="eingabeText" placeholder="Aufgabe ..." />
        <button
          onclick="newElement(document.getElementById('eingabeText').value)"
          class="addBtn"
        >
          Hinzufügen
        </button>
      </div>
    </div>
  );
}
