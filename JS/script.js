const img = document.getElementById("img")
img.style.display = "none"

var imgFullScreenTrack = "no full"

const gerar = () =>{

    var selected = ''

    var inputName = document.getElementById("nome").value

    for(var i = 0; i < inputName.length; i++){

        if(inputName[i] == " "){

            inputName = inputName.replace(" ", "%20")

        }

    }

    console.log(inputName)

    var inputMale = document.getElementById("male")

    var inputFemale = document.getElementById("female")  

    var inputBotts = document.getElementById("botts")  

    console.log("InputMale: "+inputMale.checked)
    console.log("InputFemale: "+inputFemale.checked)
    console.log("InputBotts: "+inputBotts.checked)

    if(inputMale.checked == true && inputFemale.checked == true || inputMale.checked == true && inputBotts.checked == true 
        || inputBotts.checked == true && inputFemale.checked == true || inputFemale.checked == false && inputMale.checked == false && inputBotts.checked == false
    ){

        window.navigator.vibrate(200);

        setTimeout(() => {

            alert("Selecione 1")

        },300)

        return
        
    }else if(inputName == ""){

        window.navigator.vibrate(200);

        setTimeout(() => {

            alert("Selecione 1")

        },300)

        return

    }else{

        img.style.display = "inherit"

        if(inputMale.checked == true){

            selected = "avataaars"

        }else if(inputFemale.checked == true){

            selected = "micah"

        }else if(inputBotts.checked == true){

            selected = "bottts"

        }

        inputName = inputName.toLowerCase()

        console.log(`https://avatars.dicebear.com/api/${selected}/${inputName}.svg`)
        img.src = `https://avatars.dicebear.com/api/${selected}/${inputName}.svg`

        window.navigator.vibrate(200,10,200);

        img.requestFullscreen()
        imgFullScreenTrack = 'no full'

        setTimeout(() => {

            document.exitFullscreen();
            window.navigator.vibrate(200,10,200);
            imgFullScreenTrack = 'full'

        },3000)

    }

}

img.addEventListener("click", () => {

    if(imgFullScreenTrack == "no full"){

        img.requestFullscreen()
        window.navigator.vibrate(200,10,200);

        imgFullScreenTrack = "full"

    }else{

        document.exitFullscreen();
        window.navigator.vibrate(200,10,200);

        imgFullScreenTrack = "no full"

    }

})