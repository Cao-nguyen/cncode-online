// Permission
const tablePermission = document.querySelector("[permission-table]");
if (tablePermission) {
    const buttonSubmit = document.querySelector("[button-submit]");

    buttonSubmit.addEventListener("click", () => {
        let permissions = [];

        const rows = tablePermission.querySelectorAll("[data-name]");

        rows.forEach(row => {
            const name = row.getAttribute("data-name");
            const inputs = row.querySelectorAll("input");

            if (name === "id") {
                inputs.forEach(input => {
                    const id = input.value;
                    permissions.push({
                        id: id,
                        permission: [] // 'permission' là mảng
                    });
                });
            } else {
                inputs.forEach((input, index) => {
                    const checked = input.checked;
                    const permissionName = input.getAttribute("data-permission");

                    if (checked) {
                        if (permissions[index]) {
                            permissions[index].permission.push(permissionName);
                        }
                    }
                });
            }
        });

        if (permissions.length > 0) {
            const formChangePermission = document.querySelector("#form-change-permission");
            const inputPer = formChangePermission.querySelector("input[name='permissions']");

            inputPer.value = JSON.stringify(permissions); // Chuyển đổi dữ liệu thành chuỗi JSON
            formChangePermission.submit();
        }
    });
}

// Checked
const dataRoles = document.querySelector("[data-roles]")
if(dataRoles) {
    const roles = JSON.parse(dataRoles.getAttribute("data-roles"))
    const tablePermission = document.querySelector("[permission-table]");

    roles.forEach((role, index) => {
        const permissions = role.permissions

        permissions.forEach(permission => {
            const row = tablePermission.querySelector(`[data-name="${permission}"]`)
            const input = row.querySelectorAll("input")[index]

            input.checked = true
        })
    })
}