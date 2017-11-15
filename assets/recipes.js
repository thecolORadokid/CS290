var recipeDict = {
    '1': 'sausage.html'
};

(function() {
   // your page initialization code here
   // the DOM will be available

   $('#recipe-menu li').click(function(){
       console.log(this.id);
       recipeFetcher(this.id);
   });
})();

function recipeFetcher(id){
    //console.log(id);
    $("#recipe-content").load("sausage.html");
}
