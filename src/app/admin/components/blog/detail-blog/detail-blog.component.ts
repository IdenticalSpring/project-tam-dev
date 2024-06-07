import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.scss']
})
export class DetailBlogComponent {
  @Input() blog: any = {};
  @Input() modalTitle: string = '';
  @Input() isVisible: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter();

  closeModal() {
    this.isVisible = false;
    this.close.emit();
  }
}
