Package.describe({
  summary: "Magnific Popup package for Meteor"
});

Package.on_use(function (api) {
  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('Magnific-Popup');
  api.add_files(path.join(asset_path, 'dist', 'magnific-popup.css'), 'client');
  api.add_files(path.join(asset_path, 'dist', 'jquery.magnific-popup.js'), 'client');

});
