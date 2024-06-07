import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-admin-page',
  templateUrl: './blog-admin-page.component.html',
  styleUrls: ['./blog-admin-page.component.scss']
})
export class BlogAdminPageComponent {
  blogs = [
    { id: 1, name: 'Blog 1', image: '/assets/images/blog1.jpg', content: 'Content of Blog 1', selected: false },
    { id: 2, name: 'Blog 2', image: '/assets/images/blog2.jpg', content: 'Content of Blog 2', selected: false }
  ];

  selectedBlog: any = {};
  modalTitle: string = '';
  showAddNewBlogModal: boolean = false;
  showDetailBlogModal: boolean = false;
  showUpdateBlogModal: boolean = false;
  showDeleteBlogModal: boolean = false;
  currentPage: number = 1;
  totalPages: number = 5;
  pageName: string = 'blogs';

  toggleSelectAll() {
    const allSelected = this.blogs.every(blog => blog.selected);
    this.blogs.forEach(blog => blog.selected = !allSelected);
  }

  openAddNewBlogModal() {
    this.selectedBlog = { id: null, name: '', image: '', content: '', selected: false };
    this.modalTitle = 'Create Blog';
    this.showAddNewBlogModal = true;
  }

  closeModal() {
    this.showAddNewBlogModal = false;
    this.showDetailBlogModal = false;
    this.showUpdateBlogModal = false;
    this.showDeleteBlogModal = false;
  }

  saveBlog(blog: any) {
    if (this.modalTitle === 'Create Blog') {
      blog.id = this.blogs.length + 1;
      this.blogs.push(blog);
    } else {
      const index = this.blogs.findIndex(b => b.id === blog.id);
      if (index !== -1) {
        this.blogs[index] = blog;
      }
    }
    this.closeModal();
  }

  viewBlog(id: number) {
    const blog = this.blogs.find(b => b.id === id);
    if (blog) {
      this.selectedBlog = { ...blog };
      this.modalTitle = 'View Blog';
      this.showDetailBlogModal = true;
    }
  }

  editBlog(id: number) {
    const blog = this.blogs.find(b => b.id === id);
    if (blog) {
      this.selectedBlog = { ...blog };
      this.modalTitle = 'Edit Blog';
      this.showUpdateBlogModal = true;
    }
  }

  deleteBlog(id: number) {
    const blog = this.blogs.find(b => b.id === id);
    if (blog) {
      this.selectedBlog = blog;
      this.modalTitle = 'Delete Blog';
      this.showDeleteBlogModal = true;
    }
  }

  confirmDelete(id: number) {
    this.blogs = this.blogs.filter(b => b.id !== id);
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
  }
}
