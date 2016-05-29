
// Repara el problema de copiar-pegar en osx.
if (is_nodewebkit) {
  var gui = requireNode('nw.gui');
  win = gui.Window.get();

  var nativeMenuBar = new gui.Menu({type: "menubar"});

  try {
    nativeMenuBar.createMacBuiltin("My App");
    win.menu = nativeMenuBar;
  } catch (ex) {

  }
}

// Implementa live-reloading
var DELAY = 2000;
var refresh = false;

if (is_nodewebkit) {
  var fs = requireNode('fs');

  fs.watchFile('index.html', function() {
    if (refresh === false) {
      refresh = true;
      console.log("Detectando cambio en el archivo index.html, actualizando ...");
      setTimeout(function() {
        requireNode('nw.gui').Window.get().reloadIgnoringCache();
      }, DELAY);
    }
  });
}
