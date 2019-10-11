const filter_work = document.querySelector(".works");
const buildNum = document.querySelector(".buildNum");
const writeNum = document.querySelector(".writeNum");
const practiceNum = document.querySelector(".practiceNum");
const projectsBtn = document.querySelector(".btn_building");
const articlesBtn = document.querySelector(".btn_writing");
const practiceBtn = document.querySelector(".btn_practice");
let build_data, build_response, write_data, write_response, practice_response, practice_data;

async function getData() {
	build_data = await fetch("./js/building.json");
	build_response = await build_data.json();
	write_data = await fetch("./js/writing.json");
	write_response = await write_data.json();
	practice_data = await fetch("./js/practice.json");
	practice_response = await practice_data.json();
	return {
		buildNum: build_response.length,
		writeNum: write_response.length,
		practiceNum: practice_response.length,
		response: [...write_response, ...build_response, ...practice_response]
	};
}

async function generateCard(response) {
	//create cards out of the result
	filter_work.innerHTML = response
		.map(result => {
			return `
		<div class="div_builds col-sm-12 col-lg-3 col-xl-2 my-3">
			<a href="${result.link}" class="div_build">
			<img src=${result.img} alt=${result.alt}/>
			<div class="div_info">
				<p class="p_name">${result.name}</p>
				<p class="p_description">${result.description}</p>
			</div>
			</a>
		</div>
  `;
		})
		.join("");
}

//display all by default
getData()
	.then(result => {
		buildNum.textContent = result.buildNum;
		writeNum.textContent = result.writeNum;
		practiceNum.textContent = result.practiceNum;
		allResponse = result.response;
		generateCard(allResponse);
	})
	.catch(err => {
		console.error(err);
		alert("Error: " + err + ". Opps, something went wrong, please contact Ming.");
	});

//filter if buttons are clicked
projectsBtn.addEventListener("click", () => {
	generateCard(build_response);
});

articlesBtn.addEventListener("click", () => {
	generateCard(write_response);
});

practiceBtn.addEventListener("click", () => {
	generateCard(practice_response);
});
