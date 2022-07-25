"use strict"

let rooms = {"Introduction": {"menu": "An introduction",
							 "main": "30~This is a choose your own adventure game, the bar at the top of the page will tell you the name of the room you are in, this bar will give a description of the room to allow you to decide what action you would like to take, the bar to the right will display a picture of the room you are in and the bar to the left will display items you currently have in your inventory. Finally the bar at the bottom will display all the options you have to act, clicking these will affect the outcome of your adventure. Enter your name below to begin.",
							 "right": "images/welcome.png",
							 "footer": [{"RoomName": "1.0",
										"MoveDesc": "Begin"}],
							"function": [["addInputBox"]]},

			"1.0": {"menu": "A Dull Room",
 						  "main": "30~You wake up in a dull room feeling slightly sick, you're wearing overalls and a red hat with a letter etched onto it. You have a weird feeling that you can only describe as feeling like...~200~ an Italian plumber?~30~ You look around the room and all you can see is a Wooden door, slightly ajar and a trap door with a bolt on it. What do you do",				
 						  "right": "images/1.0.png",
						  "footer": [{"RoomName": "1.2",
									"MoveDesc": "Reach for the door"},
								   {"RoomName": "2.1",
								    "MoveDesc": "Reach for the trapdoor"}],
	    				"function": [["updateHead"]]},

			 "1.1": {"menu": "A Dull Room",
 						   "main": "30~You find yourself back in the dull room, looking around there is still just the wooden door you entered through and the trap door with a bolt on it.",				
 						   "right": "images/1.0.png",
						   "footer": [{"RoomName": "1.2",
									"MoveDesc": "Reach for the door"},
								   {"RoomName": "2.1",
								    "MoveDesc": "Reach for the trapdoor"}],
						"function": []},

			"1.2": {"menu": "Outside",
					 	 "main": "30~You open the door and step outside, blinded by the light you stumble onto the dirt and notice something odd about it. It seems~200~… low res?~30~’That’s weird’ you think to yourself, seems like something a lazy game developer would do. You get up and look around this strange place. In front of you is a large green pipe.",
					 	 "right": "images/1.2.png",
					 	 "footer": [{"RoomName": "1.4",
									"MoveDesc": "Walk away from the pipe"},
							   		{"RoomName": "1.3",
									"MoveDesc": "Go down the pipe"}],
						"function": []},

			"1.3": {"menu": "In the pipe",
					 	 "main": "30~You step closer to the pipe and peer inside, the stench of raw sewage billowing out of it. For some reason you feel like jumping inside, weirdo. There’s a large brick block nearby, the perfect height to clamber up to the pipe, how convenient. You jump onto the brick and into the pipe with a shrill ‘Lets-a-go’. You quickly regret your decision as you realise it was in fact a sewage pipe and now you appear to be stuck at a narrowing in the pipe.",
					 	 "right": "images/1.3.png",
					 	 "footer": [{"RoomName": "1.6",
									"MoveDesc": "get out"},
							   		{"RoomName": "1.5",
									"MoveDesc": "Go more down the pipe"}],
						"function": [["addToInventory", "sewage"]]},

			"1.4": {"menu": "Turtle Encounter",
						 "main": "30~You carry on past the pipe wondering why anyone would every want to go near a sewage pipe. A little while later you find a turtle lying on the ground minding its own business. How cute.",
						 "right": "images/1.4.png",
						 "footer": [{"RoomName": "1.7",
									"MoveDesc": "Befriend the turtle"},
								   {"RoomName": "1.4.1",
									"MoveDesc": "Ignore the turtle"}],
						"function": []},

			"1.4.1": {"menu": "Turtle Encounter",
						 "main": "30~Well that’s just rude~750~, ~30~let’s try that again~750~. ~30~ You carry on past the pipe wondering why anyone would every want to go near a sewage pipe. A little while later you find a turtle lying on the ground minding its own business. ",
						 "right": "images/1.4.1.png",
						 "footer": [{"RoomName": "1.8",
									"MoveDesc": "Stomp the turty"},
								   {"RoomName": "1.7",
									"MoveDesc": "Befriend the turtle"},
								   {"RoomName": "1.4.2",
									"MoveDesc": "Ignore the turtle"}],
						"function": []},

			"1.4.2": {"menu": "Turtle Encounter",
						 "main": "30~Now you’re just being cruel~750~, ~30~I’m sure the turtle wouldn’t want to be your friend now~750~. ~30~ You carry on past the pipe wondering why anyone would every want to go near a sewage pipe. A little while later you find a turtle lying on the ground minding its own business. What an uninteresting thing.",
						 "right": "images/1.4.2.png",
						 "footer": [{"RoomName": "1.8",
									"MoveDesc": "Stomp the turty"},
								   {"RoomName": "1.8",
									"MoveDesc": "Stomp the turty"},
								   {"RoomName": "1.4.3",
									"MoveDesc": "Ignore the turtle"}],
						"function": []},

			"1.4.3": {"menu": "Turtle Encounter",
						 "main": "30~You heartless monster~750~, ~30~Now you’re going to make me do something terrible, all because you could make friends with a turtle~750~. ~30~ You carry on past the pipe wondering why anyone would every want to go near a sewage pipe. A little while later you find a turtle lying on the ground minding its own business. What a disgusting creature.",
						 "right": "images/1.4.3.png",
						 "footer": [{"RoomName": "1.8",
									"MoveDesc": "Stomp the turty"},
								   {"RoomName": "1.8",
									"MoveDesc": "Stomp the turty"},
								   {"RoomName": "1.8",
									"MoveDesc": "Stomp the turty"}],
						"function": []},

			"1.5":  {"menu": "Stuck in pipe",
						 "main": "30~For some reason you decide to wriggle further into the raw sewage. It’s like you want to have a bad time. I give you this lovely world to explore and instead you jump in the first sewage filled hole you can find. Why are you like this? Well you’re stuck now aren’t you and you have no one to blame but yourself. This is where your story ends, stuck in some stench ridden hole, I really had higher hopes for you.",
						 "right": "images/game over.png",
						 "footer": [{"RoomName": "Introduction",
									"MoveDesc": "Restart"}],
						"function": []},
			
			"1.6": {"menu": "Mocking",
						 "main": "30~'You clamber out of the pipe in a most undignified manor. Your clothes are covered in muck, the palms of your hands are dripping with the slime that covered the inside of the pipe and~200~*wretches*~30~ oh no, it looks like you even got some in your hair. Well why did you think that was a good idea huh?",
						 "right": "images/1.3.png",
						 "footer": [{"RoomName": "1.2",
									"MoveDesc": "Because I'm a silly plumber"}],
						"function": []},
			
			"1.7": {"menu": "A new Friend",
						 "main": "30~Oh well don’t you look so cute. Let’s name him~200~…Tony? Yes Tony the turtle. ~30~ You reach out you hand to introduce yourself to Tony. He wriggles towards you, it’s adorable. You imagine the scene looks similar to that of Michelangelo’s masterpiece on the Sistine Chapel. Tony reaches you and you reach out your hand to pat him on the head~300~…*crunch*~30~ The bastard bit your finger. A wave of rage rushes over you.",
						 "right": "images/1.7.png",
						 "footer": [{"RoomName": "1.8",
									"MoveDesc": "Stomp the turty"}],
						"function": []},

			"1.8": {"menu": "Stomp the turty",
						 "main": "30~You can’t hold yourself back, you spring to your feet and with a shrill ~200~’Wahoo’~30~ you leap into the air and land on the turtles back ~200~*crunch*~30~ You’re still filled with rage, it’s like you’ve completely lost control",
						 "right": "images/1.8.png",
						 "footer": [{"RoomName": "1.9",
									"MoveDesc": "Stomp on it again"}],
						"function": []},

			"1.9": {"menu": "Greif",
						 "main": "30~You stomp on it again, and again, and again. You look down at what’s left of Tony, no more than a pile of bloodied flesh and broken shell. ~200~What have you done?",
						 "right": "images/1.9.png",
						 "footer": [{"RoomName": "1.10",
									"MoveDesc": "I'm a monster"}],
						"function": []},

			"1.10": {"menu": "Game Over",
						 "main": "30~You are over come by greif and can't continue your adventure",
						 "right": "images/game-over.png",
						 "footer": [{"RoomName": "Introduction",
									"MoveDesc": "Restart"}],
						"function": []},

			"": {"menu": "",
						 "main": "",
						 "right": "",
						 "footer": [{"RoomName": "",
									"MoveDesc": ""},
								   {"RoomName": "",
									"MoveDesc": ""}],
						"function": []},
					}


let inventory = ['wrench', 'pipe'];
let skip = false
let finished = false
let addButtons
document.addEventListener("keydown", keyDownTextField, false);

function getInventory(){

    var table = document.getElementById("table");
    table.innerHTML = ""
    let header = table.createTHead()
    let row = header.insertRow(0);  
    let cell = row.insertCell(0);
    cell.innerHTML = "<b>Inventory</b>";
    for(let i = 0; i < inventory.length; i++){
        let newRow = table.insertRow(table.length);
           let cell = newRow.insertCell();
           cell.innerHTML = inventory[i];
    }
}

function moveRoom(RoomName){
	if(RoomName == "Introduction"){
		resetTemplate()
	}
	if(RoomName == "1.0"){
		document.title = document.getElementById("inputBox").value + "'s Epic Adventure"
	}
	console.log(RoomName)
	document.getElementById("item4").src = rooms[RoomName]["right"]
	document.getElementById("item1").innerHTML = rooms[RoomName]["menu"]
	getInventory()
	finished = false
	printMain(rooms[RoomName]["main"])
	document.getElementById("item5").innerHTML = ""
	addButtons = setInterval(function() {checkDone(RoomName)}, 1000)
	try{
		rooms[RoomName]["function"].forEach(executeFunction)
	}catch(TypeError){
		console.log("no function")
	}
}

function checkDone(RoomName){
	if(finished){
		rooms[RoomName]["footer"].forEach(appendToFooter)
		clearInterval(addButtons)
	}
}

function printMain(main){
	skip = false
	let app = document.getElementById("item3")
	app.innerHTML = ""
	let arr = main.split("~")
	let txt = ''
	let speeds = []
	for(let i = 0; i < arr.length; i = i+2){
		txt = txt + '~' + arr[i+1]
		speeds.push(parseInt(arr[i]))
    }
    typeWriter(txt, 0, app, speeds, -1)
	
}

function appendToFooter(room){
	let button = document.createElement("div")
	button.id = "txtbtn"
	button.innerHTML = room["MoveDesc"]
	let body = document.getElementById("item5")
	body.appendChild(button)

	button.addEventListener ("click", function() {
  		moveRoom(room["RoomName"])
	})
}

function executeFunction(arr){
	if(arr.length == 1){
		console.log("No parameter")
		window[arr[0]]()
	}
	else{
		console.log("With parameter")
		window[arr[0]](arr.slice(1))
	}
}

function addInputBox(){
	console.log("addInputBox")
	let button = document.createElement("INPUT")
	button.setAttribute("type", "text")
	button.id = "inputBox"
	let body = document.getElementById("item5")
	body.appendChild(button)
}


function updateHead(){
	document.title = document.getElementById("inputBox").value
}

function addToInventory(item){
	console.log("add to inv")
	if(!inventory.includes(item[0])){
		inventory.push(item[0])
	}
}

function resetTemplate(){
	document.title = "An Epic Adventure"
	inventory = inventory = ['wrench', 'pipe'];
}

function typeWriter(txt, i, location, speeds, j) {
	if (i < txt.length) {
		if(txt.charAt(i) == '~'){
			j++
			i++
		}
		location.innerHTML += txt.charAt(i);
		i++;
		setTimeout(function(){typeWriter(txt, i, location, speeds, j)}, (skip ? 0 : speeds[j]))
	}else{
		finished = true
	}
	
}



function keyDownTextField(e) {
	var keyCode = e.keyCode;
	if(keyCode==13) {
		skip = true
	}
}

moveRoom("Introduction")



