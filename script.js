// consts for list and length of addEventListener

const input = document.getElementsByTagName("input");
const length = input.length;

const deleteButton = document.querySelector(".delete");
const refreshButton = document.querySelector(".refresh");

//dummy values to track when shift & ctrl keys are pressed
let pressed = false;
let ctrl = false;

// function checks for the first item checked - takes list of items & length of list
firstChecked = (list, n) => {
	for (i = 0; i < n; i++)
	{
		if (list[i].checked == true) {
			// console.log(`First item checked: Index is ${i}`);
			return i; //stop loop & return index #
		}
	}
}

//function checks for the last checked item (same as firstChecked, but reverses direction)
lastChecked = (list, n) => {
	for (i = n - 1; i >= 0; i--)  //minus one because array starts at 0
	{
		if (list[i].checked == true) {
			// console.log(`Last item checked: Index is ${i}`);
			return i; //stop loop & return index #
		}
	}
}

// function to set check boxes - takes the whole list of items & first and last checked index values
setChecked = (list, first, last) =>
{
	for (i = first; i <= last; i++)
	{
		list[i].checked = true;
	}
}

//function to clear check boxes
clearChecked = list =>
{
	for (i = 0; i < list.length; i++)
	{
		list[i].checked = false;
	}
}

//event listener for shift keys & magic
document.addEventListener("keydown", e => {
	if (e.code === "ShiftRight" || e.code === "ShiftLeft")  //used .code vs .key because a different language keyboard layout might affect .key value
	{
		pressed = true;
		console.log(`Shift is being pressed = ${pressed}`);
		setChecked(input, firstChecked(input, length), lastChecked(input, length)); //set the checkboxes!
	}
});

document.addEventListener("keyup", e => {
	if (e.code === "ShiftRight" || e.code === "ShiftLeft")  //used .code vs .key because a different language keyboard layout might affect .key value
	{
		pressed = false;
		console.log(`Shift is being pressed = ${pressed}`);
	}
});

//event listener & function to keep someone from adding to list while pressed == false
document.addEventListener('click', e => {
	// console.log(e.target.checked);
	if(e.target.value == "on" && pressed == false)
	{
		clearChecked(input);
	}
	e.target.checked = true;
});

//extra event listeners/functions for clearing checked boxes & selecting while holding control key

refreshButton.addEventListener('click', e => {
	clearChecked(input);
});

document.addEventListener('keydown', e => {
	if (e.code === "ControlLeft" || e.code === "ControlRight") {
		ctrl = true;
	}
});

document.addEventListener('keyup', e => {
	if (e.code === "ControlLeft" || e.code === "ControlRight") {
		ctrl = false;
	}
});

document.addEventListener('keydown', e => {
	if (e.code === "KeyL" && ctrl == true) {
		clearChecked(input);
	}
});
