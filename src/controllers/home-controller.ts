const path = require('path');

export default class HomeController {
  handle(request, response) {
    response.sendFile(path.join(__dirname + '/views/index.html'));
  }
}
