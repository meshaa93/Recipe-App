var url = "https://api.edamam.com/search?app_id=b97cd4e3&app_key=705cbbb0078729243678aacfa2e5789a&count=10&Health=vegan&q=";
var term = "";
var params = "";

$("#searchButton").click(function(){
	$('#resultsContent').html('');
	params = "";
	term = $("#foodInput").val();

	params += "&from=" + $("#from").val();
	params += "&to=" + $("#to").val();

	if( $('#healthOptions').val() == "vegan" ){
		params += "&health=vegan";
	} else if( $('#healthOptions').val() == "vegetarian" ){
		params += "&health=vegetarian";
	} else if( $('#healthOptions').val() == "low calorie" ){	
		params += "&health=lowcalorie";
	}


	$.getJSON(url + term, function(recipeData){
		recipeData.hits.forEach(function(r,i){

	$('#resultsContent').append('div class="recipeItem"><h1 class="recipeName">' +
		recipeData.hits[i].recipe.label + '</h1><img src="' + recipeData.hits[i].
		recipe.image + '" class="recipeImg"><ul class="recipeIngredients" id="recipe'
		+ i +'"></ul></div>');

		recipeData.hits[i].recipe.ingredients.forEach(function(ing){
			$("#recipe" + i).append('<li>' + ing.text + '</li>');
		});
	});
	$('.recipeItem').click(function(){
		if( $(this).css('height') == "375px" ){
			$(this).css('height', 'auto');
		} else {
			$(this).css('height', '375px');
		}
	});
	})
}
)

