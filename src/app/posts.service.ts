import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { IPosts } from './posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}
  private _url = 'https://jsonplaceholder.typicode.com/posts';
  public path!: number;

  //Create Subject to create method passPath ..
  private _pathSource = new Subject<number>();
  pathMessage$ = this._pathSource.asObservable();

  //getPath from component (Posts-title-component)
  passPath(path: number) {
    this._pathSource.next(path);
    this.path = path;
  }

  getData(): Observable<IPosts[]> {
    return this.http.get<IPosts[]>(this._url).pipe(
      catchError((error) => {
        console.log('error' + error);

        return throwError(error);
      })
    );
  }

  //get data for specific element

  getElementData(): Observable<IPosts> {
    let stringifyPath = this.path.toString();
    return this.http.get<IPosts>(this._url.concat('/', stringifyPath)).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }
}
