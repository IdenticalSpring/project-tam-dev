import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.scss']
})
export class UpdateBlogComponent implements OnChanges {
  @Input() blog: any = {};
  @Input() modalTitle: string = '';
  @Input() isVisible: boolean = false;
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<void> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isVisible']) {
      this.isVisible = changes['isVisible'].currentValue;
    }
  }

  closeModal() {
    this.isVisible = false;
    this.close.emit();
  }

  submitForm() {
    this.save.emit(this.blog);
    this.closeModal();
  }
}
