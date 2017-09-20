window.addEventListener("load", function() {
    const arrOfStr = [
        "1. Option shift down/up-arrow to copy a line",
        "2. Option left/right-arrow key to move one word or character block at a time",
        "3. Option up/down arrows to move entire line up or down",
        "4. Command any-arrow move all the way to beginning/end of line or document",
        "5. Command ?/ comments out a line; command [ indents line left; command ] indents a line right "
    ];

    function dynamicallyBuildDiv() {
        for (let i = 0; i <= arrOfStr.length - 1; i++) {
            let newDiv = document.createElement("div");
            newDiv.id = i;
            newDiv.className = "dynamically_built_div";
            newDiv.innerText = arrOfStr[i];
            document.getElementById("dyna_div_wrapper").appendChild(newDiv);
        }
    }
    dynamicallyBuildDiv();
});