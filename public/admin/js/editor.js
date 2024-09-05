document.addEventListener('DOMContentLoaded', () => {
    const editor = document.querySelector('.editor');
    
    document.querySelector('.bold').addEventListener('click', () => {
      document.execCommand('bold', false, null);
    });
  
    document.querySelector('.italic').addEventListener('click', () => {
      document.execCommand('italic', false, null);
    });
  
    document.querySelector('.underline').addEventListener('click', () => {
      document.execCommand('underline', false, null);
    });
  
    // Thêm sự kiện cho các thẻ khác tại đây
  });  