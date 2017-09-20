window.addEventListener("load", function() {
    function dynamicallyBuildDiv() {
        const arrOfStr = [
            "Option shift down/up-arrow to copy a line",
            "Option left/right-arrow key to move one word or character block at a time",
            "Option up/down arrows to move entire line up or down",
            "Command any-arrow move all the way to beginning/end of line or document",
            "Command ?/ comments out a line; command [ indents line left; command ] indents a line right "
        ];

        for (let i = 0; i >= arrOfStr.length; i++) {
            let newDiv = document.createElement("div");
            newDiv.id = i;
            newDiv.className = "dynamically_built_div";
            newDiv.innerText = arrOfStr[i];
            document.getElementById("dynamically_built_defs").appendChild(newDiv);
        }
    }
    dynamicallyBuildDiv();
});