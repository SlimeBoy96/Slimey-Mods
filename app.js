const filesList = document.getElementById('filesList');
let filesArray = [];

function uploadFiles() {
    const fileInput = document.getElementById('fileInput');
    const files = Array.from(fileInput.files);

    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const fileData = {
                name: file.name,
                url: e.target.result
            };
            filesArray.push(fileData);
            displayFiles();
        };
        reader.readAsDataURL(file);
    });

    fileInput.value = ''; // Clear the input
}

function displayFiles() {
    filesList.innerHTML = ''; // Clear previous file list

    filesArray.forEach(file => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = file.url;
        link.textContent = file.name;
        link.download = file.name;

        const downloadBtn = document.createElement('button');
        downloadBtn.innerHTML = '<i class="fas fa-download"></i>';
        downloadBtn.onclick = () => {
            const a = document.createElement('a');
            a.href = file.url;
            a.download = file.name;
            a.click();
        };

        li.appendChild(link);
        li.appendChild(downloadBtn);
        filesList.appendChild(li);
    });
}
