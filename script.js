const categories = document.querySelectorAll(".categories span");

categories.forEach(cat=>{
cat.addEventListener("click",()=>{

categories.forEach(c=>c.classList.remove("active"));
cat.classList.add("active");

});
});