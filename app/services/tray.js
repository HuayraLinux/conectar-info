import Ember from 'ember';

export default Ember.Service.extend({
  tray: null,

  onInit: Ember.on("init", function() {

    if (is_nodewebkit) {
      var gui = requireNode('nw.gui');

      var tray = new gui.Tray({
        icon: 'trayicon_1.png',
        iconsAreTemplates: false
      });

      var menu = new gui.Menu();

      menu.append(new gui.MenuItem({
        label: 'Preferencias',
        click: function() {
          let win = gui.Window.get();
          win.show();
        }
      }));

      tray.menu = menu;

      window.onbeforeunload = function(){
         tray.remove();
      };

      this.set("tray", tray);
    }

  }),

});
