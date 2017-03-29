<?function isAjax(){
	return (isset($_SERVER['HTTP_X_REQUESTED_WITH'])
			&& !empty($_SERVER['HTTP_X_REQUESTED_WITH'])
			&& strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') ? true: false;
}?>
<?ob_start();?>
<div class="home" data-view="Page1">
	<a href="/static/">Home</a>
	<a href="/static/page1.php">Page1</a>
	Page1
</div>

<?$content = ob_get_clean();

if (isAjax()){
	$arr = array(
	'title' => 'Заголовок страницы',
	'body' => $content,
	'sectionId' => '0',
	'jsview' => 'Page1'
	);
	echo json_encode($arr);
}else{
	include $_SERVER['DOCUMENT_ROOT']."/header.php";
	echo $content;
	include $_SERVER['DOCUMENT_ROOT']."/footer.php";
}?>