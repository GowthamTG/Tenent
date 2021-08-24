import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, retry } from 'rxjs/operators';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
})
export class DashComponent implements OnInit {
  filteredStreets: Observable<string[]> | undefined;
  availableFrom: { value: string; content: string }[] = [
    { value: '0', content: 'Now' },
    { value: '30', content: 'One Month' },
    { value: '90', content: "Three Month's" },
    { value: '180', content: "Six Month's" },
  ];

  furnishedStatus: { value: string; content: string }[] = [
    { value: 'No', content: 'Not Furnished' },
    { value: 'Partial', content: 'Partially Furnished' },
    { value: 'Full', content: 'Fully Furnished' },
  ];

  houses = [1, 3];

  ageOfProperty: { value: string; content: string }[] = [
    { value: '0', content: 'New' },
    { value: '2', content: "2 Year's" },
    { value: '5', content: "5 Year's" },
    { value: '10', content: "5 Year's" },
  ];
  ammenditiesArr: { value: string; content: string }[] = [
    { value: 'water', content: 'Water Facility' },
    { value: 'bus_stop', content: 'Near Bus Stop' },
    { value: 'parking', content: 'Parking' },
  ];
  panelOpenState = false;
  rooms: string[] = ['1', '2', '3', '4'];
  filterForm: FormGroup = this.fb.group({
    range: [],
    location: [],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.filteredStreets = this.filterForm.controls[
      'location'
    ].valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  formatLabel(value: number) {
    return Math.round(value / 1000000) + 'M';
  }

  streets: string[] = [
    'Champs-Élysées',
    'Lombard Street',
    'Abbey Road',
    'Fifth Avenue',
  ];

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    if (value.length >= 4) {
      return this.streets.filter((street) =>
        this._normalizeValue(street).includes(filterValue)
      );
    }
    return [];
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  onSubmit() {}
}
