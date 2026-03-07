let button = document.getElementById("bookBtn");

button.addEventListener("click", function(){
alert("Table booking coming soon!");
});


document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault(); 

alert("Message sent successfully!");

});