// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler,
//   HttpErrorResponse,
// } from '@angular/common/http';
// import { catchError } from 'rxjs/operators';
// import { throwError } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';

// import { ErrorComponent } from './error/error.component';
// import { ErrorService } from './error/error.service';

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//   constructor(private dialog: MatDialog, private errorService: ErrorService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     return next.handle(req).pipe(
//       catchError((error: HttpErrorResponse) => {
//         let errorMessage = 'An unknown error occurred!';
//         console.log(error);
//         if (error.error.errorMessage) {
//           errorMessage = error.error.errorMessage;
//         }

//         this.dialog.open(ErrorComponent, {
//           data: { message: errorMessage },
//         });

//         return throwError(error);
//       })
//     );
//   }
// }
