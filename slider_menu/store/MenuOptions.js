/**
 * @class SliderMenu.store.MenuOptions
 * @extends Ext.data.Store
 *
 * Defines store of MenuOptions that are showed inside SliderMenu.view.Menu.
 * It must be modified to adapt SliderMenu at your app.
 * By default, the data is hardcored inside class, but you can get it using a
 * proxy (Ajax, Rest, LocalStorage...).
 *
 * @author Xevi Gallego (wozznik@gmail.com) (@wozznik)
 */
Ext.define('SliderMenu.store.MenuOptions', {
    extend: 'Ext.data.Store',

    requires: [,
			'SliderMenu.view.Option1',
    ],

    config: {
    	model: 'SliderMenu.model.MenuOption',
		storeId: 'MenuOptionsStore',

		//Customize your menu options
		data: [
			//One option working with this store as example...
			{id: 1, view: 'SliderMenu.view.Option1', iconCls: 'action', iconMask:true, text:'Option 1'},
		]
    }
});
