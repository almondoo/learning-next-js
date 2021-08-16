import { useState } from 'react';
import Style from './style';
// import cropApi from '../../../api/fetch/register';
import ReactCrop from 'react-image-crop';
import type { Crop as TypeCrop } from 'react-image-crop';
import Modal from '../modal/index';
import Button from '../button/index';

type Props = {
  open: boolean;
  aspect: number;
  src: string;
  isCircle: boolean;
  handleClose: () => void;
  handleSetState: (src: string) => void;
};

// type Crop = {
//   aspect: number;
//   unit: 'px' | '%';
//   width: number;
//   height: number;
//   x: number;
//   y: number;
// };

const Crop = ({
  open,
  aspect,
  src,
  isCircle,
  handleClose,
  handleSetState,
  ...props
}: Props): JSX.Element => {
  const [cropData, setCropData] = useState<TypeCrop>({
    unit: 'px',
    aspect: aspect,
    width: 100,
    height: 0,
    x: 0,
    y: 0,
  });
  const [imageRef, setImageRef] = useState<HTMLImageElement>();
  const [completeImage, setCompleteImage] = useState<string>('');
  const [previewUrl, setPreviewUrl] = useState('');

  const handleImageLoaded = (image: HTMLImageElement) => {
    setImageRef(image);
  };

  const handleCropComplete = (crop: TypeCrop) => {
    void makeClientCrop(crop);
  };

  const handleCropChange = (crop: TypeCrop): void => {
    setCropData(crop);
  };

  const makeClientCrop = async (crop: TypeCrop) => {
    if (imageRef && crop.width && crop.height) {
      const croppedImageUrl = await getCroppedImg(imageRef, crop);
      console.log(croppedImageUrl);
      console.log(typeof croppedImageUrl);
      if (croppedImageUrl) {
        setCompleteImage(croppedImageUrl);
      }
    }
  };

  const getCroppedImg = (image: HTMLImageElement, crop: TypeCrop): Promise<string> => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width || 0;
    canvas.height = crop.height || 0;
    const ctx = canvas.getContext('2d');
    console.log(crop);
    if (
      ctx &&
      crop.x != undefined &&
      crop.y != undefined &&
      crop.width != undefined &&
      crop.height != undefined
    ) {
      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height,
      );
    } else {
      return new Promise((resolve) => {
        resolve('');
      });
    }

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        // blob.name = fileName;
        window.URL.revokeObjectURL(previewUrl);
        const createUrl = window.URL.createObjectURL(blob);
        setPreviewUrl(createUrl);
        resolve(createUrl);
      }, 'image/jpeg');
    });
  };

  const getCroppedUrl = () => {
    console.log('crop');
    handleSetState(completeImage);
    handleClose();
    return false;
  };

  // const handleFixCrop = async () => {
  //   if (!previewUrl) {
  //     makeClientCrop(cropData);
  //   } else {
  //     const url = await getCroppedUrl();
  //     if (!url) {
  //       alert('画像のクロップに失敗しました。\n再度登録してください。');
  //       return false;
  //     }
  //   }
  // };

  return (
    <Modal open={open}>
      <Style.Wrapper {...props}>
        <Style.CropWrap>
          <ReactCrop
            circularCrop={isCircle ? true : false}
            src={src}
            crop={cropData}
            ruleOfThirds
            onImageLoaded={handleImageLoaded}
            onChange={handleCropChange}
            onComplete={handleCropComplete}
          />
        </Style.CropWrap>
        <Style.ButtonWrap>
          <Button onClick={getCroppedUrl}>クロップ</Button>
        </Style.ButtonWrap>
      </Style.Wrapper>
    </Modal>
  );
};

export default Crop;
