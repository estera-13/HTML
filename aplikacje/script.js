function addMovie() {
    var movieTitle = document.getElementById("inputTitle").value;
    if (movieTitle == "") {
        alert("Movie title cannot be empty");
        return;
    }
    var movieYear = document.getElementById("inputYear").value;
    if (movieYear == "") {
        alert("Movie year cannot be empty");
        return;
    }
    var movieActors = document.getElementById("inputActors").value;
         if (movieActors == "") {
        alert("Actors cannot be empty");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = "<input type='checkbox'> " + movieTitle + ", " + movieYear + ", " + movieActors + "</input>";
    document.getElementById("movieslist").appendChild(li);
    movieTitle = document.getElementById("inputTitle").value = "";
    movieYear = document.getElementById("inputYear").value = "";
    movieActors = document.getElementById("inputActors").value = "";
}