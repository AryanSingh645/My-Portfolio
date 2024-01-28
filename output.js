// const style_name = sessionStorage.getItem("name");

// document.getElementById("style_name").textContent = style_name;

function receiveMessage(event){
    let arr = event.data.split(" ");
    const style_name = document.getElementById("style_name");
    style_name.textContent = arr[0];
    console.log(arr[0]);
}
window.addEventListener("message", receiveMessage, false);