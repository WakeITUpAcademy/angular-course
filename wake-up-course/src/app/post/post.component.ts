import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  template: `<figure class=”post”>
      <img
        src="https://starecat.com/content/wp-content/uploads/when-your-program-is-a-complete-mess-but-it-does-its-job-pigeon-flying.jpg"
        alt="post">
      <figcaption>This image is awesome!</figcaption>
    </figure>
    <div class=”tags-container”>
      <span>#image</span>
      <span>#angular</span>
    </div>`,
  styles: ['.post { font-weight: 700; }']
})
export class PostComponent {

}
