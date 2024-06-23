/**
 * Sorts a HTML table
 *
 * @param {HTMLTableElement} table
 * @param {number} column
 * @param {boolean} asc
 */

function sortTableByColumn(table, column = 1, asc = false) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  //Sort each row
  if (column < 1) {
    sortedRows = rows.sort((a, b) => {
      const aColText = a
        .querySelector(`td:nth-child(${column + 1})`)
        .textContent.trim();
      const bColText = b
        .querySelector(`td:nth-child(${column + 1})`)
        .textContent.trim();

      return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
    });
  } else {
    sortedRows = rows.sort((a, b) => {
      // const aColPrice = parseFloat(
      //   a
      //     .querySelector(`td:nth-child(${column + 1})`)
      //     .textContent.trim()
      //     .replace("$", "")
      // );
      // const bColPrice = parseFloat(
      //   b
      //     .querySelector(`td:nth-child(${column + 1})`)
      //     .textContent.trim()
      //     .replace("$", "")
      // );
      const aColPrice = parseFloat(
        a
          .querySelector(`td:nth-child(${2})`)
          .textContent.trim()
          .replace("$", "")
      );
      const bColPrice = parseFloat(
        b
          .querySelector(`td:nth-child(${2})`)
          .textContent.trim()
          .replace("$", "")
      );

      return aColPrice > bColPrice ? 1 * dirModifier : -1 * dirModifier;
    });
  }
  if (column < 1) {
    sortedRows = rows.sort((a, b) => {
      const aColText = a
        .querySelector(`td:nth-child(${column + 1})`)
        .textContent.trim();
      const bColText = b
        .querySelector(`td:nth-child(${column + 1})`)
        .textContent.trim();

      return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
    });
  } else {
    sortedRows = rows.sort((a, b) => {
      // const aColPrice = parseFloat(
      //   a
      //     .querySelector(`td:nth-child(${column + 1})`)
      //     .textContent.trim()
      //     .replace("$", "")
      // );
      // const bColPrice = parseFloat(
      //   b
      //     .querySelector(`td:nth-child(${column + 1})`)
      //     .textContent.trim()
      //     .replace("$", "")
      // );
      const aColPrice = parseFloat(
        a
          .querySelector(`td:nth-child(${2})`)
          .textContent.trim()
          .replace("$", "")
      );
      const bColPrice = parseFloat(
        b
          .querySelector(`td:nth-child(${2})`)
          .textContent.trim()
          .replace("$", "")
      );

      return aColPrice > bColPrice ? 1 * dirModifier : -1 * dirModifier;
    });
  }

  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }
  tBody.append(...sortedRows);
  //Remember how the column was sorted
  table
    .querySelectorAll("th")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-asc", asc);
  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-desc", !asc);
}
document.querySelectorAll(".table-sortable th").forEach((headerCell) => {
  headerCell.addEventListener("click", () => {
    const tableElement = headerCell.parentElement.parentElement.parentElement;
    const headerIndex = Array.prototype.indexOf.call(
      headerCell.parentElement.children,
      headerCell
    );
    const currentIsAscending = headerCell.classList.contains("th-sort-asc");

    sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
  });
});
const Tab = document.querySelector(".table-sortable");
sortTableByColumn(Tab);
