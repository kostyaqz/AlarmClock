function timer() {
	
	var timer = setInterval(function() {
		
		chrome.notifications.create(
			'name-for-notification', 
			{
			
				type: 'basic',
			
				iconUrl: 'jpg.jpg',
			
				title: 'Hey, man!',
			
				message: 'Time to afk!',
		
			});
	
		}, 
		60*60*1000
	);

}


timer();