import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '@app/shared/services/auth.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'protectedImage',
  pure: false
})
export class ProtectedImagePipe implements PipeTransform, OnDestroy {
  private subscription = new Subscription();
  private transformValue = new BehaviorSubject<string>('');

  private latestValue!: string | SafeUrl;

  constructor(
    public authService: AuthService,
    private httpClient: HttpClient,
    private domSanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {
    this.setUpSubscription();
  }

  transform(imagePath: string): string | SafeUrl {
    this.transformValue.next(imagePath);
    return this.latestValue;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setUpSubscription(): void {
    const transformSubscription = this.transformValue
    .asObservable()
    .pipe(
      filter((v): v is string => !!v),
      distinctUntilChanged(),
      switchMap((imagePath: string) =>
        this.httpClient
        .get(imagePath, {observe: 'response', responseType: 'blob'})
        .pipe(
          map((response: HttpResponse<Blob>) =>
            URL.createObjectURL(response.body)
          ),
          map((unsafeBlobUrl: string) =>
            this.domSanitizer.bypassSecurityTrustUrl(unsafeBlobUrl)
          ),
          filter((blobUrl) => blobUrl !== this.latestValue)
        )
      ),
      tap((imagePath: string | SafeUrl) => {
        this.latestValue = imagePath;
        this.cdr.markForCheck();
      })
    )
    .subscribe();
    this.subscription.add(transformSubscription);
  }
}
