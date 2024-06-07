import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-delete-blog',
  templateUrl: './delete-blog.component.html',
  styleUrls: ['./delete-blog.component.scss']
})
export class DeleteBlogComponent implements OnChanges {
  @Input() blog: any = {};
  @Input() modalTitle: string = '';
  @Input() isVisible: boolean = false;
  @Output() delete: EventEmitter<number> = new EventEmitter();
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

  confirmDelete() {
    this.delete.emit(this.blog.id);
    this.closeModal();
  }
}
