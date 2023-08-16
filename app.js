const getColor = () => {
    // hex code 
    const randomNumber = Math.floor(Math.random() * 16777215);
    // console.log(randomNumber);
    const randomcode = "#" +randomNumber.toString(16); //conver in hexa code 
    // console.log(randomNumber, randomcode);
    document.body.style.backgroundColor = randomcode;
    document.getElementById("color-codes").innerText = randomcode; //change color code

    navigator.clipboard.writeText(randomcode) //copy color code automatically


}

document.getElementById("btn1").addEventListener(
    "click",
    getColor //click on button color change
)
getColor(); //when page refresh change color