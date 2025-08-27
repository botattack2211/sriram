function goToSearch() {
  document.getElementById("startPage").style.display = "none";
  document.getElementById("searchPage").style.display = "block";
}

function searchPhoto() {
  const code = document.getElementById("searchBox").value.toLowerCase();
  const result = document.getElementById("result");

  result.innerHTML = "";

  if (code === "old") {
    const img = document.createElement("img");
    img.src = "dadaji.jpg"; // yahan tumhari photo ka naam
    img.alt = "Old Photo";
    result.appendChild(img);
  } else {
    result.innerHTML = "<p>No photo found!</p>";
  }
}