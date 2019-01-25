({
    doInit : function(component, event, helper) {
        var beer = component.get('v.beer');
		console.log('INIT FOR '+beer);
	},
    
    onRender : function(component, event, helper) {
        var beer = component.get('v.beer');
		console.log('LINE RENDERED FOR '+beer);
	}
})