checkPlegLine = () => {
  let firstInput = document.querySelector(".firstInput").value.split("\n")
  let secondInput = document.querySelector(".secondInput").value.split("\n")
  let firstOutput = document.querySelector(".firstOutput")
  let secondOutput = document.querySelector(".secondOutput")
  let firstOutputStr = ""
  let matched = false

  for(word of firstInput){
    for(sWord of secondInput){
      if(word == sWord){
        matched = true
        break
      }
    }
    if(matched){
      firstOutputStr += `<span style="color:red;">${word}</span> <br>`
      matched = false
    }
    else{
      firstOutputStr += `${word}  <br>`
    }
  }
  firstOutput.innerHTML = firstOutputStr


  let secondOutputStr = ""
  let sMatched = false

  for(word of secondInput){
    for(sWord of firstInput){
      if(word == sWord){
        sMatched = true
        break
      }
    }
    if(sMatched){
      secondOutputStr += `<span style="color:red;">${word}</span> <br>`
      sMatched = false
    }
    else{
      secondOutputStr += `${word} <br>`
    }
  }
  secondOutput.innerHTML = secondOutputStr
}




checkPlegWord = () => {
  let firstLineInput = document.querySelector(".firstInput").value.split("\n")
  let secondLineInput = document.querySelector(".secondInput").value.split("\n")
  let firstWordInput = document.querySelector(".firstInput").value.split(" ")
  let secondWordInput = document.querySelector(".secondInput").value.split(" ")
  let firstOutput = document.querySelector(".firstOutput")
  let secondOutput = document.querySelector(".secondOutput")
  let firstOutputStr = ""
  let matched = false

  for(line of firstLineInput){
    line = line.split(" ");
    for(word of line){
      for(sWord of secondWordInput){
        if(word == sWord){
          matched = true
          break
        }
      }
      if(matched){
        firstOutputStr += `<span style="color:red;">${word}</span> `
        matched = false
      }
      else{
        firstOutputStr += `${word} `
      }
    }
    firstOutputStr += `<br>`
  }
  firstOutput.innerHTML = firstOutputStr


  let secondOutputStr = ""
  let sMatched = false

  for(line of secondLineInput){
    line = line.split(" ");
    for(word of line){
      for(sWord of firstWordInput){
        if(word == sWord){
          sMatched = true
          break
        }
      }
      if(sMatched){
        secondOutputStr += `<span style="color:red;">${word}</span> `
        sMatched = false
      }
      else{
        secondOutputStr += `${word} `
      }
    }
    secondOutputStr += '<br>'
  }
  secondOutput.innerHTML = secondOutputStr
}


