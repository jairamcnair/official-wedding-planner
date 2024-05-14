const guestlistForm = document.querySelector(".guestlist-form");
const guestlistRows = document.querySelectorAll(".guestlist-row");

function updateStorage(){
	localStorage.setItem("guestlistRows", guestlistForm.innerHTML);
}


const checkboxArray = [];
const removeArray = [];

function calculateSum(){
	let kingsSum = 0;
	let queensSum = 0;
	let guestCount = 0;
	let finalGuestCount = 0;
	
	const kingsInput = document.querySelectorAll(".kings-input");
	const queensInput = document.querySelectorAll(".queens-input");
	const guestCountInput = document.querySelectorAll(".estppl-input");
	const finalGuestCountInput = document.querySelectorAll(".finalppl-input");
	
	for(i = 0;i < kingsInput.length; i++){
		//console.log(kingsInput[i].innerHTML);
		kingsSum += Number(kingsInput[i].innerHTML);
		//console.log(feSum);
	}
	
	for(i = 0;i < queensInput.length; i++){
		//console.log(queensInput[i].innerHTML);
		queensSum += Number(queensInput[i].innerHTML);
		//console.log(feSum);
	}
	
	for(i = 0;i < guestCountInput.length; i++){
		//console.log(guestCountInput[i].innerHTML);
		guestCount += Number(guestCountInput[i].innerHTML);
		//console.log(feSum);
	}
	
	for(i = 0;i < finalGuestCountInput.length; i++){
		//console.log(finalGuestCountInput[i].innerHTML);
		finalGuestCount += Number(finalGuestCountInput[i].innerHTML);
		//console.log(feSum);
	}
	
	
	const kingsSumDiv = document.querySelector(".kings-sum-div");
	kingsSumDiv.innerHTML = kingsSum;
	
	const queensSumDiv = document.querySelector(".queens-sum-div");
	queensSumDiv.innerHTML = queensSum;
	
	const guestCountDiv = document.querySelector(".guest-count");
	guestCountDiv.innerHTML = guestCount;
	
	const finalGuestCountDiv = document.querySelector(".final-guest-count");
	finalGuestCountDiv.innerHTML = finalGuestCount;
}


guestlistForm.addEventListener("click", function(e){
	console.log("yoyo")
	if(e.target.tagName === "P"){
		//console.log("paragraph")
		names = document.querySelectorAll(".name-input");
        names.forEach(n => {
            n.onkeyup = function(){ // each time a key is pressed, the storage is updated
                updateStorage();
                calculateSum();
            }
        })
        emails = document.querySelectorAll(".email-input");
        emails.forEach(em => {
			em.onkeyup = function() {
				updateStorage();
				calculateSum();
			}
		})
		addresses = document.querySelectorAll(".address-input");
        addresses.forEach(ad => {
			ad.onkeyup = function() {
				updateStorage();
				calculateSum();
			}
		})
		estpeople = document.querySelectorAll(".estppl-input");
        estpeople.forEach(ep => {
			ep.onkeyup = function() {
				updateStorage();
				calculateSum();
			}
		})
		finalpeople = document.querySelectorAll(".finalppl-input");
        finalpeople.forEach(fp => {
			fp.onkeyup = function() {
				updateStorage();
				calculateSum();
			}
		})
		kings = document.querySelectorAll(".kings-input");
        kings.forEach(ki => {
			ki.onkeyup = function() {
				updateStorage();
				calculateSum();
			}
		})
		queens = document.querySelectorAll(".queens-input");
        queens.forEach(qu => {
			qu.onkeyup = function() {
				updateStorage();
				calculateSum();
			}
		})
	}
	else if(e.target.tagName === "INPUT"){ // not working
	
		if(e.target.type === "checkbox"){
			
			const checkbox = document.getElementById(e.target.id);
			let checkedState = checkbox.checked; // if checked, returns true
			localStorage.setItem(e.target.id, checkedState);
			if(checkedState === "true"){
				localStorage.setItem(e.target.id, "false");
				checkbox.checked = false;
			}
			if(checkedState === "false"){
				localStorage.setItem(e.target.id, "true");
				checkbox.checked = true;
			}
		}
	}
	else if(e.target.tagName === "INPUT"){ // not working
		alert("hey");
	}
	else if(e.target.tagName === "DIV" && e.target.className === "row-inner3"){
		
		e.target.parentElement.remove();
		
		//find last character of target id
		let lastCharRemove = e.target.id.slice(-1);
		//console.log(lastCharRemove);
		updateStorage();
		calculateSum();
	}
})








function getData(){
	//calculateSum()
	guestlistForm.innerHTML = localStorage.getItem("guestlistRows");
	//fixedForm.innerHTML = localStorage.getItem("fixedRows");
	// make count local storage not reset on page reload
	
	checkboxes = document.querySelectorAll(".checkbox");
	for(i = 0; i < checkboxes.length; i++){
		const id = checkboxes[i].id;
		//console.log(id);
		let checkboxChecked = localStorage.getItem(id);
		if(checkboxChecked === "true"){
			checkboxes[i].checked = true;
			//console.log("true");
		}
		if(checkboxChecked === "false"){
			checkboxes[i].checked = false;
			//console.log("false");
		}
	} 
	
}

const addGuestBtn = document.querySelector(".add-guest-btn");
addGuestBtn.addEventListener("click", function(){
	
	//console.log("clicked");
	
	let count = localStorage.getItem("count");
	let countNumber = Number(count);
	localStorage.setItem("count", countNumber+1);
	//console.log(count);
	
	const form = document.querySelector(".guestlist-form");
	const row = document.createElement("div");
	row.className = "guestlist-row";
	
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.className = "checkbox";
	checkbox.id = "checkbox"+count;
	//console.log(checkbox.id);
	//checkboxArray.push(checkbox);
	//localStorage.setItem("checkbox"+checkboxArray.indexOf(checkbox), "null");
	localStorage.setItem(checkbox.id, "false");
	
	const rowInner = document.createElement("div");
	rowInner.className = "row-inner";
	const rowInner2 = document.createElement("div");
	rowInner2.className = "row-inner2";
	const rowInner3 = document.createElement("div");
	rowInner3.className = "row-inner3"
	rowInner3.innerHTML = "X";
	
	
	const upperRow = document.createElement("div");
	upperRow.className = "upper-row";
	
	const nameDiv = document.createElement("div");
	nameDiv.className = "name-div";
	const nameLabel = document.createElement("p");
	nameLabel.className = "label";
	nameLabel.innerHTML = "Name/Household";
	const nameInput = document.createElement("p");
	nameInput.className = "name-input input";
	nameInput.contentEditable = "true";
	
	const emailDiv = document.createElement("div");
	emailDiv.className = "email-div";
	const emailLabel = document.createElement("p");
	emailLabel.className = "email-label";
	emailLabel.innerHTML = "Email";
	const emailInput = document.createElement("p");
	emailInput.className = "email-input input";
	emailInput.contentEditable = "true";
	
	
	
	const lowerRow = document.createElement("div");
	lowerRow.className = "lower-row";
	
	const addressDiv = document.createElement("div");
	addressDiv.className = "address-div";
	const addressLabel = document.createElement("p");
	addressLabel.className = "label";
	addressLabel.innerHTML = "Address";
	const addressInput = document.createElement("p");
	addressInput.className = "address-input input";
	addressInput.contentEditable = "true";
	
	

	const lowerRow2 = document.createElement("div");
	lowerRow2.className = "lower-row2";
	
	const hotelDiv = document.createElement("div");
	hotelDiv.className = "hotel-div";
	
	const div = document.createElement("div");
	div.className = "display-column";
	div.innerHTML = "Need Hotel";
	
	/* CHECKBOX */
	const hotelCheckbox = document.createElement("input");
	hotelCheckbox.type = "checkbox";
	hotelCheckbox.className = "checkbox";
	hotelCheckbox.id = "guestlist-hotel-cb"+count;
	
	const kingsDiv = document.createElement("div");
	kingsDiv.className = "display-column";
	kingsDiv.innerHTML = "Kings:"
	
	const kingsInput = document.createElement("p");
	kingsInput.className = "kings-input input";
	kingsInput.contentEditable = "true";
	
	const queensDiv = document.createElement("div");
	queensDiv.className = "display-column";
	queensDiv.innerHTML = "Queens:"
	
	const queensInput = document.createElement("p");
	queensInput.className = "queens-input input";
	queensInput.contentEditable = "true";
	
	
	
	const checkboxDiv1 = document.createElement("div");
	checkboxDiv1.className = "checkbox-div";
	const numInvitedDiv = document.createElement("div");
	numInvitedDiv.innerHTML = "# of PPL Invited";
	const numInvitedInput = document.createElement("p");
	numInvitedInput.className = "estppl-input input";
	numInvitedInput.contentEditable = "true";
	
	
	/* CHECKBOX */
	const checkboxDiv2 = document.createElement("div");
	checkboxDiv2.className = "checkbox-div";
	const inviteSentDiv = document.createElement("div");
	inviteSentDiv.innerHTML = "Invite Sent";
	const inviteSentCheckbox = document.createElement("input");
	inviteSentCheckbox.type = "checkbox";
	inviteSentCheckbox.className = "checkbox";
	inviteSentCheckbox.id = "guestlist-invitesent-cb"+count;
	
	/* CHECKBOX */
	const checkboxDiv3 = document.createElement("div");
	checkboxDiv3.className = "checkbox-div";
	const rsvpDiv = document.createElement("div");
	rsvpDiv.innerHTML = "RSVP Received";
	const rsvpCheckbox = document.createElement("input");
	rsvpCheckbox.type = "checkbox";
	rsvpCheckbox.className = "checkbox";
	rsvpCheckbox.id = "guestlist-rsvp-cb"+count;
	
	
	const checkboxDiv4 = document.createElement("div");
	checkboxDiv4.className = "checkbox-div";
	const numComingDiv = document.createElement("div");
	numComingDiv.innerHTML = "# of PPL Coming";
	const numComingInput = document.createElement("p");
	numComingInput.className = "finalppl-input input";
	numComingInput.contentEditable = "true";
	
	
	
	//localStorage.setItem(remove.id, "null");
	//removeArray.push(remove);
	//console.log(removeArray);
	//localStorage.setItem("remove"+removeArray.indexOf(remove), "null")
	
	
	//right
	form.appendChild(row);
	row.appendChild(rowInner);
	row.appendChild(rowInner2);
	row.appendChild(rowInner3);
	
	//right
	rowInner.appendChild(upperRow);
	rowInner.appendChild(lowerRow);
	rowInner.appendChild(lowerRow2);
	
	//right
	rowInner2.appendChild(checkboxDiv1);
	rowInner2.appendChild(checkboxDiv2);
	rowInner2.appendChild(checkboxDiv3);
	rowInner2.appendChild(checkboxDiv4);
	checkboxDiv1.appendChild(numInvitedDiv);
	checkboxDiv1.appendChild(numInvitedInput);
	checkboxDiv2.appendChild(inviteSentDiv);
	checkboxDiv2.appendChild(inviteSentCheckbox);
	checkboxDiv3.appendChild(rsvpDiv);
	checkboxDiv3.appendChild(rsvpCheckbox);
	checkboxDiv4.appendChild(numComingDiv);
	checkboxDiv4.appendChild(numComingInput);
	
	
	//right
	upperRow.appendChild(nameDiv);
	nameDiv.appendChild(nameLabel);
	nameDiv.appendChild(nameInput);
	upperRow.appendChild(emailDiv);
	emailDiv.appendChild(emailLabel);
	emailDiv.appendChild(emailInput);
	lowerRow.appendChild(addressDiv);
	addressDiv.appendChild(addressLabel);
	addressDiv.appendChild(addressInput);
	

	
	// right
	lowerRow2.appendChild(hotelDiv);
	hotelDiv.appendChild(div);
	hotelDiv.appendChild(kingsDiv);
	hotelDiv.appendChild(queensDiv);
	
	
	
	div.appendChild(hotelCheckbox);
	kingsDiv.appendChild(kingsInput);
	queensDiv.appendChild(queensInput);
	//console.log(form);
	//console.log(checkboxArray)
	
	updateStorage();
})
getData();
calculateSum();
//updateStorage(); // when you delete the guestListrow from local storage uncomment this