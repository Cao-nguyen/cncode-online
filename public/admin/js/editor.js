document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    const buttons = {
        bold: document.querySelector('span.bold'),
        italic: document.querySelector('span.italic'),
        underline: document.querySelector('span.underline'),
        alignLeft: document.querySelector('span.align-left'),
        alignCenter: document.querySelector('span.align-center'),
        alignRight: document.querySelector('span.align-right'),
        alignJustify: document.querySelector('span.align-justify'),
        insertImage: document.querySelector('span.insert-image'),
        insertTable: document.querySelector('span.insert-table'),
        quote: document.querySelector('span.quote'),
        code: document.querySelector('span.code'),
        list: document.querySelector('span.list')
    };

    const handleButtonClick = (command, value = null) => {
        document.execCommand(command, false, value);
    };

    // Các sự kiện cho các nút định dạng văn bản
    buttons.bold.addEventListener('click', () => handleButtonClick('bold'));
    buttons.italic.addEventListener('click', () => handleButtonClick('italic'));
    buttons.underline.addEventListener('click', () => handleButtonClick('underline'));
    
    // Các sự kiện cho các nút căn chỉnh
    buttons.alignLeft.addEventListener('click', () => handleButtonClick('justifyLeft'));
    buttons.alignCenter.addEventListener('click', () => handleButtonClick('justifyCenter'));
    buttons.alignRight.addEventListener('click', () => handleButtonClick('justifyRight'));
    buttons.alignJustify.addEventListener('click', () => handleButtonClick('justifyFull'));

    // Các sự kiện cho các tính năng bổ sung
    buttons.quote.addEventListener('click', () => handleButtonClick('formatBlock', 'blockquote'));
    buttons.code.addEventListener('click', () => handleButtonClick('formatBlock', 'pre'));
    buttons.list.addEventListener('click', () => handleButtonClick('insertUnorderedList'));

    // Xử lý phím tắt
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'b') {
            e.preventDefault();
            buttons.bold.click();
        }
        if (e.ctrlKey && e.key === 'i') {
            e.preventDefault();
            buttons.italic.click();
        }
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            buttons.underline.click();
        }
        if (e.ctrlKey && e.key === 'l') {
            e.preventDefault();
            buttons.alignLeft.click();
        }
        if (e.ctrlKey && e.key === 'e') {
            e.preventDefault();
            buttons.alignCenter.click();
        }
        if (e.ctrlKey && e.key === 'r') {
            e.preventDefault();
            buttons.alignRight.click();
        }
        if (e.ctrlKey && e.key === 'j') {
            e.preventDefault();
            buttons.alignJustify.click();
        }
        if (e.ctrlKey && e.shiftKey && e.key === 'i') {
            e.preventDefault();
            buttons.insertImage.click();
        }
        if (e.ctrlKey && e.key === 't') {
            e.preventDefault();
            buttons.insertTable.click();
        }
        if (e.ctrlKey && e.key === 'q') {
            e.preventDefault();
            buttons.quote.click();
        }
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            buttons.code.click();
        }
        if (e.ctrlKey && e.key === 'l') {
            e.preventDefault();
            buttons.list.click();
        }
    });
});