import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, of, pipe, delay } from 'rxjs';

import { environment } from 'src/environments/environment';
import { StatusStore } from './status.store';

export abstract class CrudApi<T> {
  protected url = environment.apiUrl + this.endPoint + '/';
  private statusPipe = pipe(
    tap(() => this.notifyIdle()),
    catchError((err) => {
      this.notifyError(err.message);
      return of(err);
    })
  );

  constructor(
    protected http: HttpClient,
    protected endPoint: string,
    protected statusStore: StatusStore
  ) {}

  public getAll$(): Observable<T[]> {
    this.notifyWorking();
    return this.http
      .get<T[]>(this.url, { headers: { ['X-API-Key']: 'my-secret' } })
      .pipe(this.statusPipe);
  }

  public getById$(id: string): Observable<T> {
    this.notifyWorking();
    return this.http
      .get<T>(this.url + id, { headers: { ['X-API-Key']: 'my-secret' } })
      .pipe(this.statusPipe);
  }

  public getByText$(text: string | null): Observable<T[]> {
    if (text === null || text == '') {
      return this.getAll$();
    }
    return this.http
      .get<T[]>(this.url + '?q=' + text, {
        headers: { ['X-API-Key']: 'my-secret' },
      })
      .pipe(delay(1000));
  }

  public post(payload: T) {
    this.notifyWorking();
    return this.http
      .post(this.url, payload, {
        headers: {
          ['X-API-Key']: 'my-secret',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .pipe(this.statusPipe);
  }

  private notifyWorking() {
    return this.statusStore.setState({ isWorking: true, errorMessage: '' });
  }

  private notifyIdle() {
    return this.statusStore.setState({ isWorking: false, errorMessage: '' });
  }

  private notifyError(message: string) {
    return this.statusStore.setState({
      isWorking: false,
      errorMessage: message,
    });
  }

  private createAuthorizationHeader(headers: Headers) {
    headers.append('X-API-Key', 'my-secret');
  }
}
