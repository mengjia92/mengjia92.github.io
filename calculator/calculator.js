let btns = document.getElementsByTagName("button");
const oprs = ["+", "-", "*", "/"];

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let btnVal = this.value,
            result = document.getElementById("result"),
            resultVal = result.innerHTML,
            lastChar = resultVal.slice(-1).toString();

        switch (btnVal) {
            case "pi":
                if (resultVal.match(/\.?\d+$|\.$/)) {
                    result.innerHTML = "3.1415926";
                } else {
                    result.innerHTML += "3.1415926";
                }
                break;
            case "root":
                let ans = Math.sqrt(Number(eval(resultVal)));
                result.innerHTML = ans.toString();
                break;
            case "del":
                result.innerHTML = resultVal.substr(0, resultVal.length - 1);
                if (resultVal.length === 1) {
                    result.innerHTML = "0";
                }
                break;
            case "clear":
                result.innerHTML = "0";
                break;
            case ".":
                if (resultVal.match(/\.\d*$/)) {
                    result.innerHTML = resultVal;
                } else {
                    result.innerHTML += btnVal;
                }
                break;
            case "=":
                result.innerHTML = eval(resultVal);
                break;
            default:
                if (resultVal === "0") {
                    if (oprs.includes(btnVal)) {
                        result.innerHTML = "0";
                    } else {
                        result.innerHTML = "";
                    }
                }

                // no consecutive operators
                if (oprs.includes(lastChar) && oprs.includes(btnVal)) {
                    result.innerHTML = resultVal.substr(0, resultVal.length - 1) + btnVal;
                } else if (resultVal.match(/\.$/) && oprs.includes(btnVal)) {
                    result.innerHTML = resultVal;
                } else {
                    result.innerHTML += btnVal;
                }
                break;
        }
    })
}





