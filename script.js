//mengambil DOM dari setiap elemen
const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
npcResult = document.querySelector(".npc_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

alert("Selamat datang di GBK!");
alert("Gunting Batu Kertas!");
let nama = prompt("Masukkan nama anda : ");

// loop through each option image element
optionImages.forEach((image,index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = npcResult.src = "images/rock.png";
        result.textContent = "Wait...";

        // If the current index doesn't match the clikced again
        // Remove the "active" class from the other option images
        optionImages.forEach((image2,index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        let time = setTimeout(() => {
        gameContainer.classList.remove("start");

        // Get the source of the clikced option image
        let imageSrc = e.target.querySelector("img").src;
        // Set the user image to the clicked opiton image
        userResult.src = imageSrc;

        // Generate a random number between 0 and 2
        let randomNumber = Math.floor(Math.random() * 3);
       
        // Create an array of NPC image options 
        let npcImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
        // Set the NPC iamge to a random option from the array
        npcResult.src = npcImages[randomNumber];

        // Assign a letter value to the NPC option (B for rock/batu, G for scissors/gunting, K for paper/kertas)
        let npcValue = ["R", "P", "S"][randomNumber];
        // Assign a letter value to the clicked option (based on index)
        let userValue = ["R", "P", "S"][index];

        // Create an object with all possible outcomes
        let outcomes ={
            RR: "Draw",
            RP: "NPC",
            RS: nama,
            PR: nama,
            PP: "Draw",
            PS: "NPC",
            SR: "NPC",
            SP: nama,
            SS: "Draw",
        };

        // Look up at the outcome value based on user and NPC options
        let outComeValues = outcomes[userValue + npcValue];

        result.textContent = userValue === npcValue ? "Match Draw" : `${outComeValues} Won!!`;
    }, 2500);
    } )
}) 

