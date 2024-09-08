document.addEventListener('DOMContentLoaded', function() {
  // Lấy các nút định dạng và editor
  const boldBtn = document.getElementById('bold-btn');
  const italicBtn = document.getElementById('italic-btn');
  const underlineBtn = document.getElementById('underline-btn');
  const alignLeftBtn = document.getElementById('align-left-btn');
  const alignCenterBtn = document.getElementById('align-center-btn');
  const alignRightBtn = document.getElementById('align-right-btn');
  const alignJustifyBtn = document.getElementById('align-justify-btn');
  const editor = document.getElementById('editor');

  // Hàm thực hiện định dạng văn bản
  function formatText(command) {
    document.execCommand(command, false, null);
  }

  // Gán sự kiện click cho các nút định dạng
  boldBtn.addEventListener('click', () => formatText('bold'));
  italicBtn.addEventListener('click', () => formatText('italic'));
  underlineBtn.addEventListener('click', () => formatText('underline'));
  alignLeftBtn.addEventListener('click', () => formatText('justifyLeft'));
  alignCenterBtn.addEventListener('click', () => formatText('justifyCenter'));
  alignRightBtn.addEventListener('click', () => formatText('justifyRight'));
  alignJustifyBtn.addEventListener('click', () => formatText('justifyFull'));

  // Sự kiện submit để lưu nội dung editor vào input ẩn trước khi gửi form
  document.getElementById('form-create-products').addEventListener('submit', function() {
    const editorContent = editor.innerHTML;
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = 'content';
    hiddenInput.value = editorContent;
    this.appendChild(hiddenInput);
  });
});