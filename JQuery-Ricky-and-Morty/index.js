$(document).ready(function(){
  $("#loadCharacters").click(function(){

    var url = "https://rickandmortyapi.com/api/character"
    $.get(url, function(data){
      $("#characters").append("<tr><th>Nombre</th>Especie</tr>")   
      $.each(data.results, function(index, character){ 
        colName = `<td>${character.name}</td>`
        colSpecie = `<td>${character.species}</td>` 
        colButton = `<td><input type="button" value="Detalle" id="idButton"></input></td>`
        idButton = `${character.id}`
        row = `<tr>${colName}${colSpecie}${colButton}</tr>`
        $("#characters").append(row)
        $(`#${idButton}`).click(function(){
          url = `https://rickandmortyapi.com/api/character/avatar/${idButton}.jpeg`
          $.get(url, function(data){
            var htmlImage = `<img src"${data.image}">`
            $("#characters").append(htmlImage)
          })
        })
      })
    })
  })
})





