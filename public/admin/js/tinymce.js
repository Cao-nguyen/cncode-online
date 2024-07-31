tinymce.init({
    selector: 'textarea.tinymce',
    valid_elements: '*[*]',
    extended_valid_elements: 'a[href|target=_blank]',
    plugins: 'quote codesample advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste help wordcount',
    toolbar: 'bold italic backcolor quote | formatselect | image table | link codesample | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | undo redo',
    menubar: false,
    setup: function(editor) {
        editor.ui.registry.addButton('quote', {
            icon: 'quote',
            onAction: function () {
                editor.insertContent('<blockquote>Your quote here</blockquote>');
            }
        })
    }
});