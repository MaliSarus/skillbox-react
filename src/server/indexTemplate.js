export const indexTemplate = (content) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Skillbox-React</title>
  <script src="./static/client.js"></script>
</head>
<body>
  <div id="app">${content}</div>
</body>
</html>
`