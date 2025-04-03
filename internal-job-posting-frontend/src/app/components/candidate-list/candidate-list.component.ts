import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidate-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  candidates: any[] = [];

  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    this.candidateService.getCandidates().subscribe(response => {
      if (Array.isArray(response)) {
        this.candidates = response;
        console.log(this.candidates);
      } else {
        console.error('Expected an array but received:', response);
      }
    });
  }
}

