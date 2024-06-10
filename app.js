<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SeedMap - Game Mods & Resources</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header>
        <h1>SeedMap</h1>
    </header>
    <main>
        <section id="upload">
            <input type="file" id="fileInput" multiple>
            <button onclick="uploadFiles()"><i class="fas fa-upload"></i> Upload</button>
        </section>
        <section id="files">
            <h2>Available Files</h2>
            <ul id="filesList"></ul>
        </section>
    </main>
    <script src="app.js"></script>
</body>
</html>

