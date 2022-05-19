import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  public apiUrl = environment.apiUrl;
  public artistUrl = 'search/artist/?q=';

  constructor(private http: HttpService) { }

  /**
   * Get all artists
   * @param artistName search query name
   * @returns list of artis
   */
  getArtist(artistName: string): Observable<any> {
    const endPoint = `search/artist/?q=${artistName}`;
    return this.http.getHttp(endPoint);
  }

  /**
   * Get a single artist
   * @param artistId artist id
   * @returns single artist data in an object
   */
  getSingleArtist(artistId: string): Observable<any> {
    const endPoint = 'artist/' + artistId;
    return this.http.getHttp(endPoint);
  }

  /**
   * Get albums data
   * @param id album id
   * @returns albums list in an object
   */
  getAlbums(id: any): Observable<any> {
    const endPoint = 'artist/' + id + '/albums';
    return this.http.getHttp(endPoint);
  }

  /**
   * Get a single album
   * @param id single album id 
   * @returns object of an album data
   */
  getSingleAlbum(id: any): Observable<any> {
    const endPoint = 'album/' + id;
    return this.http.getHttp(endPoint);
  }

  /**
   * get album tracks
   * @param albumId single album
   * @returns list of tracts object
   */
  getAlbumTracks(albumId: any): Observable<any> {
    const endPoint = 'album/' + albumId + '/tracks';
    return this.http.getHttp(endPoint);
  }

  /**
   * Get top 5 tracks
   * @param artistId single artist id
   * @returns top 5 list of tracks
   */
  getTop(artistId: any): Observable<any> {
    const endPoint = 'artist/' + artistId + '/top';
    return this.http.getHttp(endPoint);
  }

}
