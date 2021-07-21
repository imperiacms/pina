CKEDITOR.editorConfig = function( config ) {

  config.uiColor = '#ffffff';
  config.extraPlugins = 'autogrow';
  config.autoGrow_minHeight = 100;
  config.autoGrow_onStartup = true;
  config.format_tags = 'p;h2;h3';
  config.contentsCss = '/pina/iwe/ckbody.css';


  config.toolbar_Imperia = [
    ['Format'],
    ['Bold','Italic', 'Strike'],
    ['Link', 'Unlink'],
    ['CopyFormatting', 'RemoveFormat'],
    ['Undo','Redo']
  ];

  

};