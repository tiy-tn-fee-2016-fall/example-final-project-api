const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Profile extends JsonApiView {
  get attributes() {
    return ['first_name', 'last_name', 'bio'];
  }

}

module.exports = Profile;
