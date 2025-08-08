let hats = document.getElementsByClassName("hoed");


let current_hat = undefined;
let start_cursor_x;
let start_cursor_y;
let start_hat_x_pos;
let start_hat_y_pos;


for (let i = 0; i < hats.length; i++) {

    let hat = hats[i];

    hat.onmousedown = function (e) {
        current_hat = hat;
        start_cursor_x = e.clientX;
        start_cursor_y = e.clientY;
        start_hat_x_pos = current_hat.offsetLeft;
        start_hat_y_pos = current_hat.offsetTop;
    }

}
document.onmouseup = function (e) {
    current_hat = undefined;
}

document.onmousemove = function (e) {

    if (current_hat != undefined) {
        let drag_x = e.clientX - start_cursor_x;
        let drag_y = e.clientY - start_cursor_y;
        current_hat.style.left = start_hat_x_pos + drag_x + "px";
        current_hat.style.top = start_hat_y_pos + drag_y + "px";
    }

}
