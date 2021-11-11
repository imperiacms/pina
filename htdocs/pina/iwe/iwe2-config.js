CKEDITOR.editorConfig = function( config ) {

  config.uiColor = '#ffffff';
  config.extraPlugins = ['autogrow', 'editorplaceholder'];
  config.autoGrow_minHeight = 100;
  config.autoGrow_onStartup = true;
  config.format_tags = 'p;h2;h3';
  config.contentsCss = '/pina/styles/typography.css';
  config.editorplaceholder = 'Inhalt eingeben';


  config.toolbar_Imperia = [
    ['Format'],
    ['Bold','Italic', 'Strike'],
    ['Link', 'Unlink'],
    ['CopyFormatting', 'RemoveFormat'],
    ['Undo','Redo']
  ];

  config.toolbar_ImperiaBasic = [
    ['Bold','Italic'],
    ['Link', 'Unlink'],
    ['BulletedList'],
    ['RemoveFormat']
  ];

  

};