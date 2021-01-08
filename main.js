$(function () {
    $.ajax({
        url: "https://api.themoviedb.org/3/tv/popular",
        method: "get",
        dataType: "json",
        data: {
            api_key: "a0a7eacd4f6c8e5b706e77e585e48f18",
            language: "fr-FR",
            include_image_language: "fr,null"
        }
    }).done(function (recupData) {
        console.log(recupData);
        for (let index = 0; index < recupData.results.length; index++) {
            console.log(recupData.results[index].name)
        }
    })
})