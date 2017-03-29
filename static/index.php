<?function isAjax(){
	return (isset($_SERVER['HTTP_X_REQUESTED_WITH'])
			&& !empty($_SERVER['HTTP_X_REQUESTED_WITH'])
			&& strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') ? true: false;
}?>
<?ob_start();?>
<div class="home" data-view="Home">
	<a href="/static/">Home</a>
	<a href="/static/page1.php?asd=asd">Page1</a>
	Home
</div>

<?$content = ob_get_clean();

if (isAjax()){
	$arr = array(
	'title' => 'Заголовок страницы',
	'body' => $content,
	'sectionId' => '0',
	'jsview' => 'Home'
	);
	echo json_encode($arr);
}else{
	include $_SERVER['DOCUMENT_ROOT']."/static/header.php";
	echo $content;
	include $_SERVER['DOCUMENT_ROOT']."/static/footer.php";
}?>