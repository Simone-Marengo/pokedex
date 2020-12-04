import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class CustomToastsService {
  constructor(
    private _toastController: ToastController,
    private _translateService: TranslateService
  ) {}

  public loadingErrorToast = async (header: string) => {
    const toast = await this._toastController.create({
      header: this._translateService.instant(header),
      color: "danger",
    });
    toast.present();
  };
}
