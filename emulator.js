function padWithZeros(howMany, value)
{
	var result = [];
	for (var i = 0; i < howMany; i++) {
		if (howMany - i > value.length) {
			result.push("0");
		} else {
			return result.join("") + value;
		}
	}

	throw result.join("");
}

function parseInstruction()
{
	var instructionString = document.getElementById("instruction").value;
	var instructionParts = instructionString.split(" ");
	if (instructionParts[0] !== "add") {
		alert("Currently, only the add instruction is supported");
		return;
	}

	var dest = instructionParts[1];
	var source = instructionParts[2];
	var target = instructionParts[3];

	var encoded = "000000";
	encoded += " " + padWithZeros(5, parseInt(source.slice(1)).toString(2));
	encoded += " " + padWithZeros(5, parseInt(target.slice(1)).toString(2));
	encoded += " " + padWithZeros(5, parseInt(dest.slice(1)).toString(2));
	encoded += " 00000";
	encoded += " 100000";
	document.getElementById("output").innerHTML = encoded;
}
