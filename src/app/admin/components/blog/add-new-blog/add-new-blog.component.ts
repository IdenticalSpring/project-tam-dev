import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-add-new-blog',
  templateUrl: './add-new-blog.component.html',
  styleUrls: ['./add-new-blog.component.scss']
})
export class AddNewBlogComponent implements OnChanges {
  @Input() blog: any = {};
  @Input() modalTitle: string = '';
  @Input() isVisible: boolean = false;
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<void> = new EventEmitter();

  ngOnChanges() {
    if (this.isVisible) {
      this.showModal();
    } else {
      this.closeModal();
    }
  }

  showModal() {
    this.isVisible = true;
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
