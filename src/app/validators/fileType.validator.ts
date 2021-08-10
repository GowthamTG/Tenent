import { Observable, Observer, of } from 'rxjs';
import { AbstractControl } from '@angular/forms';

export const mimeType = (
  control: AbstractControl
):
  | Promise<{ [key: string]: any } | null>
  | Observable<{ [key: string]: any } | null> => {
  if (typeof control.value === 'string') {
    return of(null);
  }
  const file = control.value as File;
  const fileReader = new FileReader();
  const frObs = new Observable(
    (observer: Observer<{ [key: string]: any } | null>) => {
      fileReader.addEventListener('loadend', () => {
        const arr = new Uint8Array(fileReader.result as ArrayBuffer).subarray(
          0,
          4
        );
        let header = '';
        let isValid = false;
        for (const i of arr) {
          header += i.toString(16);
        }
        switch (header) {
          // PNG
          case '89504e47':
            isValid = true;
            break;
          // XML ( SVG )
          case '3c737667':
          case '3c3f786d':
            isValid = true;
            break;
          // JPEG
          case 'ffd8ffDB':
          case 'ffd8ffe0':
          case 'ffd8ffe1':
          case 'ffd8ffe2':
          case 'ffd8ffe3':
          case 'ffd8ffe8':
            isValid = true;
            break;
          default:
            isValid = false;
            break;
        }
        if (isValid) {
          observer.next(null);
        } else {
          observer.next({ invalidFileType: true });
        }
        observer.complete();
      });
      fileReader.readAsArrayBuffer(file);
    }
  );
  return frObs;
};

// import { AbstractControl, FormControl } from "@angular/forms";
// export function requiredFileType(type: string[]) {
//   return function (control: FormControl) {
//     // return (control: AbstractControl): { [key: string]: any } | null => {
//     const file = control.value;
//     var existValue: boolean = false;
//     if (file) {
//       var path = file.replace(/^.*[\\\/]/, "");

//       const extension = path.split(".")[1].toUpperCase();
//       for (var i = 0; i < type.length; i++) {
//         let typeFile = type[i].toUpperCase();
//         if (typeFile === extension.toUpperCase()) {
//           existValue = true;
//         }
//       }
//       if (existValue == true) {
//         return null;
//       } else {
//         return {
//           requiredFileType: true,
//         };
//       }
//     }
//     return null;
//   };
// }

// static alreadyExistsValidator(
//   controlName: string,
//   idControlName: string,
//   customerDataService: CustomerDataService
// ) {
//   return (formGroup: FormGroup): void => {
//     const control = formGroup.controls[controlName];
//     const idControl = formGroup.controls[idControlName];

//     if (idControl.value === -1) {
//       if (controlName === 'companyName') {
//         of(control.value).pipe(
//           delay(500),
//           switchMap((val) =>
//             customerDataService.ifCompanyNameExists(val).pipe(
//               map((res) => {
//                 console.log(res);
//                 res
//                   ? control.setErrors({ alreadyExists: true })
//                   : control.setErrors(null);
//               })
//             )
//           )
//         );
//       } else if (controlName === 'customerName') {
//         of(control.value).pipe(
//           delay(500),
//           switchMap((val) =>
//             customerDataService.ifCustomerNameExists(val).pipe(
//               map((res) => {
//                 res
//                   ? control.setErrors({ alreadyExists: true })
//                   : control.setErrors(null);
//               })
//             )
//           )
//         );
//       } else if (controlName === 'siteName') {
//         of(control.value).pipe(
//           delay(500),
//           switchMap((val) =>
//             customerDataService.ifSiteNameExists(val).pipe(
//               map((res) => {
//                 res
//                   ? control.setErrors({ alreadyExists: true })
//                   : control.setErrors(null);
//               })
//             )
//           )
//         );
//       }
//     }
//   };
// }
