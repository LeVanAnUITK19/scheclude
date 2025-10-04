const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");
const dangNhapInput = document.getElementById("dangNhap");
const containerDiv = document.getElementsByClassName("container");
const schecluleDiv = document.getElementsByClassName("scheclule");
const form_addDiv= document.getElementsByClassName("form-add");
const themButton = document.getElementById("them");
const main_containerDiv= document.getElementsByClassName("main-container");

// Đăng nhập
dangNhapInput.addEventListener("click", ()=>{
    if(nameInput.value == "123" && passwordInput.value == "123"){
        containerDiv[0].style.display = "none";
        main_containerDiv[0].style.display = "block";
    } else {
        nameInput.value = "";
        passwordInput.value = "";
    }
});

// Chuyển sang form thêm
themButton.addEventListener("click", ()=>{
    schecluleDiv[0].style.display ="none";
    form_addDiv[0].style.display ="block";
});

// Thêm môn học
document.getElementById("btnThem").addEventListener("click", function () {
    let mon = document.getElementById("monHoc").value.trim();
    let thu = parseInt(document.getElementById("thu").value);
    let start = parseInt(document.getElementById("tietStart").value);
    let end = parseInt(document.getElementById("tietEnd").value);
    let mau = document.getElementById("mau").value;

    if (mon === "") {
        alert("Vui lòng nhập tên môn học!");
        return;
    }
    if (end < start) {
        alert("Tiết kết thúc phải >= tiết bắt đầu!");
        return;
    }

    let table = document.querySelector("table");

    // duyệt từ tiết start -> end
    for (let t = start; t <= end; t++) {
        let row = table.rows[t];     // hàng (row[1] = Tiết 1)
        let cell = row.cells[thu];   // cột (cột 1 = Thứ 2)
        cell.innerText = mon;
        cell.style.backgroundColor = mau;
    }

    // quay lại xem lịch
    main_containerDiv[0].style.display ="block";
    form_addDiv[0].style.display ="none";
});

// Sinh lịch tháng
    function generateCalendar(month, year) {
      let firstDay = new Date(year, month).getDay();
      let daysInMonth = 32 - new Date(year, month, 32).getDate();
      let calendarBody = document.getElementById("calendar-body");
      calendarBody.innerHTML = "";

      let date = 1;
      for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < firstDay) {
            let cell = document.createElement("td");
            cell.innerHTML = "";
            row.appendChild(cell);
          } else if (date > daysInMonth) {
            break;
          } else {
            let cell = document.createElement("td");
            cell.innerHTML = date;

            let today = new Date();
            if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
              cell.classList.add("today");
            }

            row.appendChild(cell);
            date++;
          }
        }
        calendarBody.appendChild(row);
      }
    }

    let today = new Date();
    generateCalendar(today.getMonth(), today.getFullYear());