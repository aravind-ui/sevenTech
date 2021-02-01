import { TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AlertDialogService } from './alert-dialog.service';

describe('AlertDialogService', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [MatDialogModule],
      providers : [{ provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  });
  it('should be created', () => {
    const service: AlertDialogService = TestBed.get(AlertDialogService);
    expect(service).toBeTruthy();
  });
});
