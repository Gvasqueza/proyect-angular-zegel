import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs'; // Importa el operador 'of'

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard, AuthService],
    });

    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should return true if user is authenticated', () => {
    spyOn(authService, 'estaAutenticado').and.returnValue(true); // Simula que el usuario está autenticado
    
    const result = guard.canActivate();

    expect(result).toBeTrue();
  });

  it('should redirect to /login if user is not authenticated', () => {
    spyOn(authService, 'estaAutenticado').and.returnValue(false); // Simula que el usuario NO está autenticado
    const routerSpy = spyOn(router, 'parseUrl').and.returnValue({} as any); // Simula la navegación

    const result = guard.canActivate();

    expect(routerSpy).toHaveBeenCalledWith('/login'); // Verifica si se llamó a la redirección
    expect(result).toEqual({} as any); // El resultado debería ser un UrlTree, pero como simulamos la navegación, será un objeto vacío
  });
});
