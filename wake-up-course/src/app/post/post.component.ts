import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.scss']
})
export class PostComponent {

  public imgSrc = 'https://starecat.com/content/wp-content/uploads/when-your-program-is-a-complete-mess-but-it-does-its-job-pigeon-flying.jpg';
  public imgAlt = 'post';
  public imgCaption = 'This image is awesome!';
  public tags = ['#image', '#angular'];

}
