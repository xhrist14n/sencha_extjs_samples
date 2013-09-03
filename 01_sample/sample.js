

Ext.onReady(
	function(){
		Ext.Msg.show( 
			{
		       title:'Mensaje',
		       msg: 'Hola mundo',
		       buttons: Ext.MessageBox.OK,
		       fn: function(){
		       		console.log("esto funciona");
		       		return;
		       },
		       icon: Ext.MessageBox.QUESTION
			}
		);
		return;

	}
);
