const list1Input = document.getElementById("list1Input");
const list2Input = document.getElementById("list2Input");
const compareButton = document.getElementById("compareButton");
const uniqueList1Output = document.getElementById("uniqueList1Output");
const uniqueList2Output = document.getElementById("uniqueList2Output");

compareButton.addEventListener("click", () => {
  const text1 = list1Input.value;
  const text2 = list2Input.value;

  // Split, trim, remove whitespace and empty
  const lines1 = text1
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
  const lines2 = text2
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const set1 = new Set(lines1);
  const set2 = new Set(lines2);

  const uniqueTo1 = lines1.filter((line) => !set2.has(line));
  const uniqueTo2 = lines2.filter((line) => !set1.has(line));

  uniqueList1Output.value = uniqueTo1.join("\n");
  uniqueList2Output.value = uniqueTo2.join("\n");
});

// Theme stuff
const themeToggleButton = document.getElementById("themeToggle");
const bodyElement = document.body;

function applyTheme(theme) {
  if (theme === "dark") {
    bodyElement.classList.add("dark-theme");
  } else {
    bodyElement.classList.remove("dark-theme");
  }
}

function toggleTheme() {
  bodyElement.classList.toggle("dark-theme");

  if (bodyElement.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

themeToggleButton.addEventListener("click", toggleTheme);

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme("light");
}
