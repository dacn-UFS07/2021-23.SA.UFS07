import "../css/index.css"
import "../img/sun.png"
import "../CHANGELOG.MD"

function onClickAlert() {
    alert(`${new Date()}`);
}

window.onClickAlert = onClickAlert;
