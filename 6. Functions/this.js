const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    //old method -- After ES6 use arrow function
    this.tags.forEach(
      //   function (tag) {
      //     console.log(this.title, tag);
      //   }.bind(this)
      // New method
      (tag) => {
        console.log(this.title, tag);
      }
    );
  },
};

video.showTags();
