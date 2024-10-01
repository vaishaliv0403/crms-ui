import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentPage = 1;
  pageSize = 15; // Number of questions per page
  
  paginatedQuestions: any[] = [];
  customer = [
    { id: 1, name: 'Customer 1', account_no: '0001', current_stage: '1', recommended_stage:'', status: "To be reviewed by Business Team",last_staging_date:'12-09-2024',action:"" },
    { id: 2, name: 'Customer 2', account_no: '0002', status: "Agreed by Business Team", action:"" },
    { id: 3, name: 'Customer 3', account_no: '0003', status: "Agreed by Business Team", action:"" },
    { id: 4, name: 'Customer 4', account_no: '0004', status: "Disagreed by Business Team", action:"" },
    { id: 5, name: 'Customer 5', account_no: '0005', status: "To be reviewed by Business Team", action:"" },
    { id: 6, name: 'Customer 6', account_no: '0006', status: "Agreed by Business Team", action:"" },
    { id: 7, name: 'Customer 7', account_no: '0007', status: "Agreed by Business Team", action:"" },
    { id: 8, name: 'Customer 8', account_no: '0008', status: "Agreed by Business Team", action:"" },
    { id: 9, name: 'Customer 9', account_no: '0009', status: "Disagreed by Business Team", action:"" },
    { id: 10, name: 'Customer 10', account_no: '0010', status: "Agreed by Business Team", action:"" },
    { id: 11, name: 'Customer 11', account_no: '0011', status: "To be reviewed by Business Team", action:"" },
    { id: 12, name: 'Customer 12', account_no: '0012', status: "Agreed by Business Team", action:"" },
    { id: 13, name: 'Customer 13', account_no: '0013', status: "To be reviewed by Business Team", action:"" },
    { id: 14, name: 'Customer 14', account_no: '0014', status: "Agreed by Business Team", action:"" },
    { id: 15, name: 'Customer 15', account_no: '0015', status: "Disagreed by Business Team", action:"" },
    { id: 16, name: 'Customer 16', account_no: '0016', status: "Disagred by Business Team", action:"" },
    { id: 17, name: 'Customer 1', account_no: '0017', status: "Reviewed by Business Team", action:"" },
    { id: 18, name: 'Customer 2', account_no: '0018', status: "New", action:"" },
    { id: 19, name: 'Customer 3', account_no: '0019', status: "Reviewed by Business Team", action:"" },
    { id: 20, name: 'Customer 4', account_no: '0020', status: "New", action:"" },
    { id: 21, name: 'Customer 5', account_no: '0005', status: "Reviewed by Business Team", action:"" },
    { id: 22, name: 'Customer 6', account_no: '0006', status: "Reviewed by Business Team", action:"" },
    { id: 23, name: 'Customer 7', account_no: '0007', status: "Reviewed by Business Team", action:"" },
    { id: 24, name: 'Customer 8', account_no: '0008', status: "New", action:"" },
    { id: 25, name: 'Customer 1', account_no: '0001', status: "Reviewed by Business Team", action:"" },
    { id: 26, name: 'Customer 2', account_no: '0002', status: "New", action:"" },
    { id: 27, name: 'Customer 3', account_no: '0003', status: "Reviewed by Business Team", action:"" },
    { id: 28, name: 'Customer 4', account_no: '0004', status: "New", action:"" },
    { id: 29, name: 'Customer 5', account_no: '0005', status: "Reviewed by Business Team", action:"" },
    { id: 30, name: 'Customer 6', account_no: '0006', status: "Reviewed by Business Team", action:"" },
    { id: 31, name: 'Customer 7', account_no: '0007', status: "Reviewed by Business Team", action:"" },
    { id: 32, name: 'Customer 8', account_no: '0008', status: "New", action:"" },
    
   
  
  ];
  totalPages = Math.ceil(this.customer.length / this.pageSize); // Calculate total pages dynamically
  // constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.paginateData();
  }
  paginateData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedQuestions = this.customer.slice(startIndex, endIndex);
  }
  loadPage(page: number): void {
    this.currentPage = page;
    this.paginateData();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateData();
    }
  }
  
  get visiblePages(): number[] {
    const pages = [];
    const start = Math.max(1, this.currentPage - 1); // Start from current page - 1
    const end = Math.min(this.totalPages, this.currentPage + 1); // End at current page + 1

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Ensure the total displayed pages is at most 3
    return pages.length > 3 ? pages.slice(0, 3) : pages;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateData();
    }
  }

  fetchCustomers(page: number) {
    // const apiUrl = `https://your-backend-api.com/api/customers?page=${page}&pageSize=${this.pageSize}`;

    // this.http.get(apiUrl).subscribe((response: any) => {
    //   this.questions = response.data;
    //   this.totalPages = response.totalPages;
    //   this.currentPage = response.currentPage;

    //   // Create an array of page numbers for displaying the pagination buttons
    //   this.totalPagesArray = Array.from({ length: this.totalPages }, (v, k) => k + 1);
    // });

    this.totalPages = 10;
      this.currentPage = 1;

      // Create an array of page numbers for displaying the pagination buttons
     // this.totalPagesArray = Array.from({ length: this.totalPages }, (v, k) => k + 1);
  }


  

}
