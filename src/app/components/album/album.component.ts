import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HelperService } from 'src/app/_services/helper.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  albumId: any;
  albumTracks: any;
  albumData: any;
  artistId: any;
  showNoResult = false;
  hideDetails = false;

  constructor(private _activatedRoute: ActivatedRoute, private _helperService: HelperService, private _router: Router) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.albumId = paramMap.get('id');
    });

    /**
     * get single album data
     */
    this._helperService.getSingleAlbum(this.albumId).subscribe((data: any) => {
      this.albumData = data;
      this.artistId = this.albumData.artist.id;
      if (this.albumData) {
        this.showNoResult = false;
        this.hideDetails = true;
      } else {
        this.showNoResult = true;
        this.hideDetails = false;
      }
    })

    /**
     * get all tracks for an album
     */
    this._helperService.getAlbumTracks(this.albumId).subscribe((data: any) => {
      this.albumTracks = data.data;
    })
  }

  /**
   * Go back to artist
   */
  backToArtist() {
    this._router.navigate([`/artist/${this.artistId}`])
  }

}
