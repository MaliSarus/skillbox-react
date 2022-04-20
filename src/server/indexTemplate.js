export const indexTemplate = (content, token) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Skillbox-React</title>
    <script src="./static/client.js"></script>
    <script>
      window.__token__ = '${token}'
  </script>
  </head>
  <body>
    <div id="app">${content}</div>
  </body>
  </html>
`