const filter_work = document.querySelector(".works");
const buildNum = document.querySelector(".buildNum");
const writeNum = document.querySelector(".writeNum");
const allNum = document.querySelector(".allNum");
const projectsBtn = document.querySelector(".btn_building");
const articlesBtn = document.querySelector(".btn_writing");
const allBtn = document.querySelector(".btn_all");
let build_data, build_response, write_data, write_response, allResponse;

async function getData() {
	build_data = await fetch("./js/building.json");
	build_response = await build_data.json();
	write_data = await fetch("./js/writing.json");
	write_response = await write_data.json();
	return {
		buildNum: build_response.length,
		writeNum: write_response.length,
		allNum: write_response.length + build_response.length,
		allResponse: [...build_response, ...write_response]
	};
}

async function generateCard(response) {
	//create cards out of the result
	filter_work.innerHTML = response
		.map(result => {
			return `
    <a href="${result.link}" class="div_build col-sm-12 col-lg-3 col-xl-2">
    <img src=${result.img} alt=${result.alt} />
    <div class="div_info">
      <p class="p_name">${result.name}</p>
      <p class="p_description">${result.description}</p>
    </div>
    </a>
  `;
		})
		.join("");
}

//display all by default
getData()
	.then(result => {
		buildNum.textContent = result.buildNum;
		writeNum.textContent = result.writeNum;
		allNum.textContent = result.allNum;
		allResponse = result.allResponse;
		generateCard(allResponse);
	})
	.catch(err => alert("Error: " + err + ". Opps, something went wrong, please contact Ming."));

//filter if buttons are clicked
projectsBtn.addEventListener("click", () => {
	generateCard(build_response);
});

articlesBtn.addEventListener("click", () => {
	generateCard(write_response);
});

allBtn.addEventListener("click", () => {
	generateCard(allResponse);
});
