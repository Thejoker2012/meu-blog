export default class Post {

  constructor(title = '', date = '', category = '', comments = [], text = [], images = '') {
    this.title = title;
    this.date = date;
    this.category = category;
    this.comments = [comments];
    this.text = [text];
    this.images = [images]

  }
}
