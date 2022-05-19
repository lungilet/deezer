import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HelperService } from 'src/app/_services/helper.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  artistId: any;
  artistData: any;
  albums: any;
  topTracks: any;
  showNoResult = false;
  hideDetails = false;

  constructor(private _activatedRoute: ActivatedRoute, private _helperService: HelperService) { }

  ngOnInit(): void {
    // get artist id from the url
    this._activatedRoute.paramMap.subscribe((paramMap: ParamMap)=> {
      this.artistId = paramMap.get('id');
    });

    /**
     * get single artist data
     */
    this._helperService.getSingleArtist(this.artistId).subscribe((data: any) => {
      this.artistData = data;
      if (this.artistData) {
        this.showNoResult = false;
        this.hideDetails = true;
      } else {
        this.showNoResult = true;
        this.hideDetails = false;
      }
    })

    /**
     * get top 5 tracks
     */
    this._helperService.getTop(this.artistId).subscribe((data: any) => {
      this.topTracks = data.data;
    })

    /**
     * get albums of the top 5 tracks
     */
    this._helperService.getAlbums(this.artistId).subscribe((albumData: any) => {
      this.albums = albumData.data;
    })
  }


}
