import { Injectable } from '@angular/core';
import {ProductDetails} from "../../models/product-details";
import {FileHandler} from "../../models/file-handler";
import {DomSanitizer} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer: DomSanitizer) { }

    public createImages(product: ProductDetails){
      const productImages: any = product.productImages;
      const productImagesToFileHandle: FileHandler[] = [];

      for (let i = 0; i < product.productImages.length; i++){
          const imageFileData = productImages[i];

          const imageBlop = this.dataUrltoBlop(imageFileData.picByte, imageFileData.type);

          const imageFile = new File([imageBlop], imageFileData.name, {type: imageFileData.type});

          const finalFileHandle : FileHandler = {
              file: imageFile,
              url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
          };
          productImagesToFileHandle.push(finalFileHandle);
      }

      product.productImages = productImagesToFileHandle;
      return product;
    }

    public dataUrltoBlop(picBytes, imageType){
      const byteString = window.atob(picBytes);
      const arrayBuffer = new ArrayBuffer(byteString.length);
      const int8Array = new Uint8Array(arrayBuffer);

      for (let i = 0; i < byteString.length; i++){
          int8Array[i] = byteString.charCodeAt(i);
      }

      const blop = new Blob([int8Array], { type: imageType});
      return blop;
    }

}
