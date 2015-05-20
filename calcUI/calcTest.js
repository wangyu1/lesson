QUnit.test("It should handle key press", function( assert ) {
	$('#1').click();
	$('#2').click();
	$('#3').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 123 , "Passed!" );
    $('#AC').click();
});
QUnit.test("It should multiply two numbers", function( assert ) {
	$('#4').click();
	$('#multiply').click();
	$('#3').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 12 , "Passed!" );
    $('#AC').click();
});
QUnit.test("It should multiply two numbers", function( assert ) {
	$('#2').click();
	$('#dot').click();
	$('#3').click();
	$('#multiply').click();
	$('#1').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 2.3 , "Passed!" );
    $('#AC').click();
});
QUnit.test("It should plus two numbers", function( assert ) {
	$('#1').click();
	$('#plus').click();
	$('#1').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 2 , "Passed!" );
     $('#AC').click();
});
QUnit.test("It should plus two numbers", function( assert ) {
	$('#6').click();
	$('#dot').click();
	$('#1').click();
	$('#plus').click();
	$('#2').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 8.1 , "Passed!" );
    $('#AC').click();
});
QUnit.test("It should minus two numbers", function( assert ) {
	$('#0').click();	
	$('#minus').click();
	$('#5').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == -5 , "Passed!" );
    $('#AC').click();
});
QUnit.test("It should minus two numbers", function( assert ) {
	$('#5').click();
	$('#minus').click();
	$('#4').click();
	$('#dot').click();
	$('#5').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 0.5 , "Passed!" );
    $('#AC').click();
});
QUnit.test("It should divide two numbers", function( assert ) {
	$('#5').click();	
	$('#divide').click();
	$('#2').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 2.5, "Passed!" );
});
QUnit.test("It should divide two numbers", function( assert ) {
	$('#8').click();
	$('#dot').click();
	$('#4').click();
	$('#4').click();
	$('#divide').click();
	$('#2').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 4.22, "Passed!" );
});

