function save() {
    const new_data1 = document.getElementById("input1").value.trim();
    const new_data2 = document.getElementById("input2").value.trim();
    const new_data3 = document.getElementById("input3").value.trim();
    const new_data4 = document.getElementById("input4").value.trim();
    if (localStorage.getItem("data") == null) {
        localStorage.setItem("data", "[]");
    }
    const out_data = JSON.parse(localStorage.getItem("data"))
    out_data.push(new_data1)
    out_data.push(new_data2)
    out_data.push(new_data3)
    out_data.push(new_data4);
    localStorage.setItem("data", JSON.stringify(out_data));



}