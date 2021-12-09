$('#btn_data').click(function() {
    $('#data').load('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json');
});

$('#btn_data2').click(function() {
    $("#data2").load('https://raw.githubusercontent.com/paullabkorea/10000hour/main/index.html h1');
});

$('#btn_data3').click(function() {
    $("#data3").load('https://raw.githubusercontent.com/paullabkorea/10000hour/main/index.html h1', function(responseText, statusText, xhr){
            console.log(responseText);
            console.log(statusText);
            console.log(xhr);
            console.log(xhr.status);
        }
    );
});

$('#btn_data4').click(function() {
    //$.ajax({경로, 동기화 여부, 성공하면 할 일})
    //$.ajax({url:'경로', async: false, success:function(result){}})
    $.ajax({
        url:'https://raw.githubusercontent.com/paullabkorea/10000hour/main/index.html', 
        async: true, 
        success:function(result){
            $("#data4").html(result);
        }
    });
});