Meteor.methods({
    getRoute: function(from, to){
        //var response = HTTP.get("http://randomword.setgetgo.com/get.php", {
        //
        //});



        var expectedResponse = Assets.getText('jsonContract/getLinkedArticlesResponse.json')

        return expectedResponse;
    }
});