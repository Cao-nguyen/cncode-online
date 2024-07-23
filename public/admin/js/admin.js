// Form search
const formSearch = document.querySelector('#form-search')
if(formSearch) {
    let url = new URL(window.location.href)

    formSearch.addEventListener('submit', (e) => {
        e.preventDefault()
        const keyword = e.target.elements.keyword.value

        if(keyword) {
            url.searchParams.set('keyword', keyword)
        } else {
            url.searchParams.delete(keyword)
        }

        window.location.href = url.href
    })
}

// Pagination
const buttonsPagination = document.querySelectorAll('[button-pagination]')
if(buttonsPagination) {
    let url = new URL(window.location.href)

    buttonsPagination.forEach(button => {
        button.addEventListener('click', () => {
            const page = button.getAttribute('button-pagination')

            url.searchParams.set('page', page)
            window.location.href = url.href
        })
    })
}

// Delete
const buttonDelete = document.querySelectorAll('[button-delete]');
if (buttonDelete.length > 0) {
    const formDeleteItem = document.querySelector('#form-delete-item');
    const path = formDeleteItem.getAttribute('data-path');
    const confirmBox = document.getElementById('confirmBox');
    const confirmYes = document.getElementById('confirmYes');
    const confirmNo = document.getElementById('confirmNo');
    let currentButton;

    buttonDelete.forEach(button => {
        button.addEventListener('click', () => {
            currentButton = button;
            confirmBox.style.display = 'flex';
        });
    });

    confirmYes.addEventListener('click', () => {
        const id = currentButton.getAttribute('data-id');
        formDeleteItem.action = `${path}/${id}?_method=DELETE`;
        formDeleteItem.submit();
        confirmBox.style.display = 'none';
    });

    confirmNo.addEventListener('click', () => {
        confirmBox.style.display = 'none';
    });
}

// Thông báo
const showAlert = document.querySelector("[show-alert]")
if(showAlert) {
    const time = parseInt(showAlert.getAttribute("data-time"))
    const close = showAlert.querySelector("[close]")
    setTimeout(() => {
        showAlert.classList.add('tb-none')
    }, time)

    close.addEventListener('click', () => {
        showAlert.classList.add('tb-none')
    })
}

// Preview uploads
const uploadImage = document.querySelector("[upload-image]")
if(uploadImage) {
    const uploadImg = document.querySelector("[upload-img]")
    const uploadImgPreview = document.querySelector("[upload-img-preview]")
    const deletePreview = document.querySelector("[deletePreview]")
    uploadImg.addEventListener("change", (e) => {
        const file = e.target.files[0]
        if(file) {
            uploadImgPreview.style.display="block"
            deletePreview.style.display="block"
            uploadImgPreview.src = URL.createObjectURL(file)
        }
    })
    if(deletePreview) {
        deletePreview.addEventListener('click', (e) => {
            uploadImg.value = ""
            uploadImgPreview.src = ""
            uploadImgPreview.style.display="none"
            deletePreview.style.display="none"
        })
    }
}