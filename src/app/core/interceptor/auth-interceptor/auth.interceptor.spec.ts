import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { authInterceptor } from './auth.interceptor'; // Asegúrate de que el nombre sea correcto.

describe('AuthInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true }
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add an Authorization header', () => {
    const token = 'test-token'; // Simula el token
    spyOn(localStorage, 'getItem').and.returnValue(token); // Simula localStorage

    // Hacemos una solicitud HTTP de prueba
    httpClient.get('/data').subscribe();

    const req = httpMock.expectOne('/data');
    expect(req.request.headers.has('Authorization')).toBeTrue(); // Verifica el encabezado
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${token}`); // Verifica el valor del encabezado
  });
});
