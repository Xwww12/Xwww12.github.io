let pageTitle = '博客';
let subTitle = document.getElementById("subtitle").innerHTML;
if (subTitle) {
	pageTitle = pageTitle + "-" + subTitle;
}
document.title = pageTitle;
