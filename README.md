# Pina Styles for Bootstrap 4 form elements and custom imperia components in editmode
&copy; pirobase imperia gmbh 2021
======================

The Pina skin provides predefined styles and flex modules and depends on Bootstrap.
You will find the pina skin files in /htdocs/pina.
Following the given examples you could easily style form elements like buttons, inputs, selects, checkboxes, custom imperia elements (link input), etc.

## Usage

### Editmode
1. Include pina_editmode.css after bootstrap.css in the template and pina_editmode.js  /editmode only/ 
2. Wrap the content of the template (or flex, slot etc.) in a <div class="pina">
3. Use the bootstrap 4 syntax to create form controls (https://getbootstrap.com/docs/4.6/components/forms/) or the imperia custom elements syntax.

## Pina Flexmodules

### Pina Article-Image and Pina Article-text

For the Flexmodules 'Article Image' and 'Article text' you have to include pina.css in savemode.

Default width of the floated images is 300px and of the centered image: 800px; 
You can change this in /htdocs/pina/styles/_variables.scss ($pina-fleximage-width, $pina-fleximage-centered-width).

Adjust also the correct sizes of the created image variants (img_small, img_big) in the PI of the img tag in the flexmodule itself. (image width * 2 for optimal dispaly on retina)
    
    
## Pina containers in Editmode

There are three pina classes for containers:

- 'pina': applies the pina style to the child form components (mandatory);
- 'pina-wrapper': centers the content and applies max-width of 800px;
- 'pina-section': applies additional indent of the content

## Structure example

```
<div class='pina'>

    <div class='pina-wrapper'>

        <h2>Section 1</h2>
        <div class='pina-section'>
            ...
        </div>
        <hr />

        <h2>Section 2</h2>
        <div class='pina-section'>
            ...
        </div>

    </div>

</div>

```

## Custom imperia controls

### custom imperia checkboxes & radios; 

```
<label class="i-material-checkbox">
    <input type="checkbox" >
    <span>Check me out</span>
</label>

<label class="i-material-checkbox">
    <input type="checkbox" >
    <span>checkbox</span>
</label>

<label class="i-material-checkbox">
    <input type="checkbox" disabled>
    <span>Check me out disabled</span>
</label>

<label class="i-material-checkbox">
    <input type="checkbox" disabled>
    <span>radio disabled</span>
</label>

```

### Custom imperia link field

```
<!-- pina link input -->
<div class="pina-input-group pina-internal-link-wrapper" >
    <input name="IMPERIA:link" type="text" class="form-control pina-internal-link" style="padding-right: 42px;">
    <i class="fa5 far fa-times pina-clear-icon"></i>
    <a href="IMPERIA:DOC:link" class="pina-link-btn">
        <i class="fa5 far fa-link"></i>
        <?imperia mam copy title:link_text?>
    </a>
</div>
<!-- /pina link input -->
```

### Toggle Button and collapsible Settings Container

You can create a combination of a button and a div to store more settings. 
The initial state of the settings div is collapsed.

#### Usage

Add a button as in the example below, *immediately followed* by a DIV with a 'pina-flex-settings' class. 
The rest is handled by pina_editmode.js

```
<!-- pina toggle combo -->
<button type="button" class="i-button i-secondary-btn pina-toggle-flex-settings">
    <span class="btn-icon"></span>
    <span class="btn-label">_Your custom button label here_</span>
</button>

<div class="pina-flex-settings"> 
    _settings here_
</div>
<!-- /pina toggle combo -->
```

