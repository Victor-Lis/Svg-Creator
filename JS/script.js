const img = document.getElementById("img")
img.style.display = "none"

const gerar = () =>{

    var selected = ''

    var inputName = document.getElementById("nome").value

    var inputMale = document.getElementById("male")

    var inputFemale = document.getElementById("female")  

    var inputInitial = ""

    console.log(inputName)

    if(inputMale.checked == true && inputFemale.checked == true || inputMale.checked == true && inputInitial.checked == true || inputInitial.checked == true && inputFemale.checked == true || inputFemale.checked == false && inputMale.checked == false){

        alert("Selecione apenas 1")
        return

    }else if(inputName == ""){

        alert("Preencha seu nome!")

    }else{

        img.style.display = "inherit"

        if(inputMale.checked == true){

            selected = "male"

        }else if(inputFemale.checked == true){

            selected = "female"

        }else if(inputInitial.checked == true){

            selected = "initial"

        }

        inputName = inputName.toLowerCase()

        img.src = `https://avatars.dicebear.com/api/${selected}/${inputName}.svg`

    }

}