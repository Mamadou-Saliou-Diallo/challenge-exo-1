function checkType() {
    const input = document.getElementById("inputValue").value;
    const result = document.getElementById("result");
    const type = typeChecker(input);
    result.innerText = `Le type de la variable est : ${type}`;
}

function typeChecker(variable) {
    // Conversion de la saisie pour déterminer le type
    if (variable === "") return "undefined";
    else if (variable === "null") return "null";
    else if (!isNaN(Number(variable))) return "number";
    else if (variable === "true" || variable === "false") return "boolean";
    else if (variable.startsWith("[") && variable.endsWith("]")) return "array";
    else if (variable.startsWith("{") && variable.endsWith("}")) return "object";
    else return "string";
}