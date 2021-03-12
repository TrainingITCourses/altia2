import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class AdapterInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      filter((event) => event instanceof HttpResponse),
      map((event) => event as HttpResponse<unknown>),
      map((response) => this.adaptResponse(response))
    );
  }

  private adaptResponse(respose: HttpResponse<any>) {
    const body = respose.body;
    const adaptedBody = body['data'] || body;
    const adaptedResponse = respose.clone({ body: adaptedBody });
    return adaptedResponse;
  }
}
