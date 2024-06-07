import { Component } from '@angular/core';

@Component({
  selector: 'app-order-admin-page',
  templateUrl: './order-admin-page.component.html',
  styleUrls: ['./order-admin-page.component.scss']
})
export class OrderAdminPageComponent {
  orders = [
    { id: 1, customer: 'Customer 1', total: 100, status: 'Pending', selected: false },
    { id: 2, customer: 'Customer 2', total: 200, status: 'Shipped', selected: false }
  ];

  selectedOrder: any = {};
  modalTitle: string = '';
  showAddNewOrderModal: boolean = false;
  showDetailOrderModal: boolean = false;
  showUpdateOrderModal: boolean = false;
  showDeleteOrderModal: boolean = false;
  currentPage: number = 1;
  totalPages: number = 5;
  pageName: string = 'orders';

  toggleSelectAll() {
    const allSelected = this.orders.every(order => order.selected);
    this.orders.forEach(order => order.selected = !allSelected);
  }

  openAddNewOrderModal() {
    this.selectedOrder = { id: null, customer: '', total: '', status: '', selected: false };
    this.modalTitle = 'Create Order';
    this.showAddNewOrderModal = true;
  }

  closeModal() {
    this.showAddNewOrderModal = false;
    this.showDetailOrderModal = false;
    this.showUpdateOrderModal = false;
    this.showDeleteOrderModal = false;
  }

  saveOrder(order: any) {
    if (this.modalTitle === 'Create Order') {
      order.id = this.orders.length + 1;
      this.orders.push(order);
    } else {
      const index = this.orders.findIndex(o => o.id === order.id);
      if (index !== -1) {
        this.orders[index] = order;
      }
    }
    this.closeModal();
  }

  viewOrder(id: number) {
    const order = this.orders.find(o => o.id === id);
    this.selectedOrder = { ...order };
    this.modalTitle = 'View Order';
    this.showDetailOrderModal = true;
  }

  editOrder(id: number) {
    const order = this.orders.find(o => o.id === id);
    this.selectedOrder = { ...order };
    this.modalTitle = 'Edit Order';
    this.showUpdateOrderModal = true;
  }

  deleteOrder(id: number) {
    this.selectedOrder = this.orders.find(o => o.id === id);
    this.modalTitle = 'Delete Order';
    this.showDeleteOrderModal = true;
  }

  confirmDelete(id: number) {
    this.orders = this.orders.filter(o => o.id !== id);
    this.closeModal();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  onSearch(searchTerm: string) {
    console.log('Search term:', searchTerm);
    // Add your search logic here
  }
}
