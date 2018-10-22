
// LOAD DATA FROM EXTERNAL SOURCE========================//
$(function(){
  $("#blca-genes").load("data/blca.html"); 
});
$(function(){
  $("#brca-genes").load("data/brca.html");
});
$(function(){
  $("#cesc-genes").load("data/cesc.html");
});
$(function(){
  $("#coad-genes").load("data/coad.html");
});
$(function(){
  $("#esca-genes").load("data/esca.html");
});
$(function(){
  $("#gbm-genes").load("data/gbm.html");
});
$(function(){
  $("#hnsc-genes").load("data/hnsc.html");
});
$(function(){
  $("#kirc-genes").load("data/kirc.html");
});
$(function(){
  $("#kirp-genes").load("data/kirp.html");
});
$(function(){
  $("#laml-genes").load("data/laml.html");
});
$(function(){
  $("#lgg-genes").load("data/lgg.html");
});
$(function(){
  $("#lihc-genes").load("data/lihc.html");
});
$(function(){
  $("#luad-genes").load("data/luad.html");
});
$(function(){
  $("#lusc-genes").load("data/lusc.html");
});
$(function(){
  $("#ov-genes").load("data/ov.html");
});
$(function(){
  $("#paad-genes").load("data/paad.html");
});
$(function(){
  $("#read-genes").load("data/read.html");
});
$(function(){
  $("#sarc-genes").load("data/sarc.html");
});
$(function(){
  $("#skcm-genes").load("data/skcm.html");
});
$(function(){
  $("#stad-genes").load("data/stad.html");
});
$(function(){
  $("#ucec-genes").load("data/ucec.html");
});

// ENTREZ API CALL=======================================//
var RequestTimeout = setTimeout(function(){
        }, 8000);
$( "tbody" ).click(function(e) {
    var table = $(e.target).closest( "tbody" ).attr( "id" );
    var id = $(e.target).next().text();
    var c = $(e.target).attr( "class" );
    
if (c == 'name'){
    var infoid = '#' + table + '-info';
    $( infoid ).empty();
    $.ajax({
        url: 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=gene&id=' + id,
        dataType: "xml",
        jsonp: "callback",
        async: true,
        success: function( response ) {
            var temp = $(response).find( "Description" ).text(); 
            var description = temp.toUpperCase();
            clearTimeout(RequestTimeout);
            $( infoid ).append('<p><b>' + description  + '<a href="https://www.ncbi.nlm.nih.gov/gene/?term=' + id + '"target="_blank"><br>(Go to NCBI&#8667;)</a></p>');
        }
    });
};

// CLEAR DESCRIPTION BOX=================================//
$( ".btn" ).click(function(){
	$( infoid ).empty();
	$( infoid ).append('<p><b>Gene Description<br>(click name)</b></p>');
});
});

// SEARCH BAR============================================//
$(document).ready(function(){
  $( "input" ).on("keyup", function() {
    var inputid = $(this).closest( "input" ).attr( "id" );
    console.log(inputid);
    var value = $(this).val().toUpperCase();
    // var div = '#' + $( "tbody" ).attr( "id" ) + ' tr';
    var div = '#' + inputid + '-genes' + ' tr';
    console.log(div);
    $(div).filter(function() {
      $(this).toggle($(this).text().toUpperCase().indexOf(value) > -1)
    });
  });
});

// SCROLL TO ID==========================================//
$( "li" ).click(function() {
    var temp = $( "li" ).index(this) + 0.98;
    // if (temp<8){
    // 	var num = 770 * temp;
    // }
    // else{
    // 	var num = 773 * temp;
    // }
    var num = 773 * temp;
    window.scrollTo({ top: num, left: 0, behavior: 'smooth' });
});

