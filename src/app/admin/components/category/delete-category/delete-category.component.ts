import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss']
})
export class DeleteCategoryComponent {
  @Input() modalTitle!: string;
  @Input() isVisible!: boolean;
  @Input() category: any;
  @Output() confirmDelete = new EventEmitter<number>();
  @Output() close = new EventEmitter<void>();

  onDelete() {
    this.confirmDelete.emit(this.category.id);
  }

  onClose() {
    this.close.emit();
  }
}
