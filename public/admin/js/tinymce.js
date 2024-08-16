tinymce.init({
    selector: 'textarea.tinymce',
    valid_elements: '*[*]',
    extended_valid_elements: 'a[href|target=_blank]',
    plugins: 'quote codesample advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste help wordcount',
    toolbar: 'bold italic backcolor quote | formatselect | image table | link codesample | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | undo redo',
    file_picker_callback: function (cb, value, meta) {
        var input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');

        input.onchange = function () {
            var file = this.files[0];

            var reader = new FileReader();
            reader.onload = function () {
                var id = 'blobid' + (new Date()).getTime();
                var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                var base64 = reader.result.split(',')[1];
                var blobInfo = blobCache.create(id, file, reader.result);
                blobCache.add(blobInfo);

                cb(blobInfo.blobUri(), { title: file.name });
            };
            reader.readAsDataURL(file);
        };
        input.click();
    },
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