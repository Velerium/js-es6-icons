const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

function filter() {

	let choice = document.querySelector(`#type-select`).value

	let filteredIcons = [];

	switch(choice) {
		case 'animal':
			filteredIcons = document.querySelectorAll(`.animal`);
			sort(filteredIcons);
			break;
		case 'vegetable':
			filteredIcons = document.querySelectorAll(`.vegetable`);
			sort(filteredIcons);
			break;
		case 'user':
			filteredIcons = document.querySelectorAll(`.user`);
			sort(filteredIcons);
			break;
		case 'all':
			filteredIcons = document.querySelectorAll(`.hide`);
			sort(filteredIcons);
			break;
		default:
			filteredIcons = document.querySelectorAll(`.hide`);
			sort(filteredIcons);
			break;
	}
}

function sort(filteredIcons) {

	document.querySelectorAll(`.hide`).forEach ((icon) => {
		icon.style.display = "none";
	})

	filteredIcons.forEach ((icon) => {
		icon.style.display = "block"; 
	});
}


let content = document.querySelector(`.content`)

icons.forEach((icon) => {

	let {name, prefix, type, family} = icon;

    content.innerHTML += `
		<div class="hide ${type}">
			<div class="flex">
				<div class="${family} ${prefix}${name}"></div>
				<div class="icon black"> ${name} </div>
			</div>
		</div>
        `
})

filter();
	
