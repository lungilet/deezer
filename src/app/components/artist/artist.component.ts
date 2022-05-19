import { Component, OnInit } from '@angular/core';
import { Artist } from '../../_interfaces/artist';
import { HelperService } from '../../_services/helper.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artistData: Artist[] = [];
  searchQuery: any;
  artistDetails: any;
  showNoResult = false;
  hideDetails = false;

  constructor(public api: HelperService) { }

  ngOnInit(): void {
  }

  /**
   * search for artist
   */
  searchArtist(): void {
    if (this.searchQuery) {
      this.api.getArtist(this.searchQuery).subscribe((artistData: any) => {
        if (artistData.data.length !== 0) {
          this.artistData = artistData.data;
          this.showNoResult = false;
          this.hideDetails = true;
        } else {
          this.showNoResult = true;
          this.hideDetails = false;
        }
      })
    } else {
      this.showNoResult = false;
      this.hideDetails = false;
    }
  }

}
