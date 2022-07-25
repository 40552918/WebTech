var testArray = ['test'];

$('#storeInv').on('click', function(){
    localStorage.setItem('myArray', testArray);
});

$('#getInv').on('click', function(){
    var myArray = localStorage.getItem('myArray');
    alert(myArray);
});