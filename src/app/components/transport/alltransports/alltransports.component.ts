import { Component, OnInit, Signal, signal } from '@angular/core';
import { ITransport } from '../../../models/transport';
import { TransportService } from '../../../services/transport.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TitleService } from '../../../services/title.service';

@Component({
  selector: 'app-alltransports',
  standalone: true,
  imports: [
    CommonModule, RouterLink,  ButtonModule, TableModule,
  ],
  templateUrl: './alltransports.component.html',
  styleUrl: './alltransports.component.scss'
})
export class AlltransportsComponent implements OnInit{

  allTransports: Signal<ITransport[]> = signal([]);

  constructor(
    private readonly transportService: TransportService,
    private readonly titleService : TitleService
  ) {}

  ngOnInit(): void {
    this.allTransports = this.transportService.transports;
    this.titleService.setTitle('All transports');
  }
}
