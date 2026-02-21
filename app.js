// my javascript file

// get all the elements i need
var myFile = document.getElementById("myFile")
var myBtn = document.getElementById("myBtn")
var resultImg = document.getElementById("resultImg")
var resultDiv = document.getElementById("resultDiv")
var downloadLink = document.getElementById("downloadLink")

// when the button is clicked
myBtn.addEventListener("click", function() {

  // check if user picked a file
  if (myFile.files.length == 0) {
    alert("Please select an image first!")
    return
  }

  var file = myFile.files[0]

  // put the image in formdata so we can send it
  var formData = new FormData()
  formData.append("file", file)

  // tell the user its loading
  myBtn.textContent = "Loading..."
  myBtn.disabled = true

  // send the image to the backend
  fetch("http://localhost:8000/remove-bg", {
    method: "POST",
    body: formData
  })
  .then(function(response) {
    return response.blob()
  })
  .then(function(blob) {
    // turn the response into an image url
    var imageUrl = URL.createObjectURL(blob)

    // show the result
    resultImg.src = imageUrl
    resultDiv.style.display = "block"
    downloadLink.href = imageUrl

    // reset the button
    myBtn.textContent = "Remove Background"
    myBtn.disabled = false
  })
  .catch(function(error) {
    alert("Something went wrong! Make sure the backend is running.")
    console.log(error)

    myBtn.textContent = "Remove Background"
    myBtn.disabled = false
  })

})