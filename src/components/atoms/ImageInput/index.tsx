import { useEffect, useState } from 'react';
import Style from './style';

const MAX_SIZE = 1000;

const ImageInput = () => {
  const [images, setImages] = useState<{ id: number; value: string }[]>([]);
  const [image, setImage] = useState<string>('');

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; ++i) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = () => {
          drawImage(String(reader.result));
        };
      }
      e.target.value = '';
    }
  };

  const drawImage = async (url: string): Promise<void> => {
    const canvas = document.createElement('canvas');
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    const image = new Image();
    image.src = url;
    image.onload = () => {
      let width = image.width;
      let height = image.height;
      if (width > MAX_SIZE) {
        const division = MAX_SIZE / width;
        width = MAX_SIZE;
        height = height * division;
      } else if (height > MAX_SIZE) {
        const division = MAX_SIZE / height;
        width = width * division;
        height = MAX_SIZE;
      }
      canvas.width = width;
      canvas.height = height;
      if (ctx) {
        ctx.drawImage(image, 0, 0, width, height);
        const base64 = canvas.toDataURL('image/jpeg');
        setImage(base64);
      } else {
        alert('変換に失敗しました。');
      }
    };
  };

  useEffect(() => {
    if (image) {
      setImages([...images, { id: images.length + 1, value: image }]);
      setImage('');
    }
  }, [image, images]);

  return (
    <Style.Wrapper>
      {images.length ? (
        <Style.List state={images} setState={setImages}>
          {images.map((v) => {
            return (
              <Style.Item key={v.id}>
                <Style.Image src={v.value} />
              </Style.Item>
            );
          })}
        </Style.List>
      ) : (
        ''
      )}
      <Style.Input type="file" onChange={onSelectFile} multiple />
    </Style.Wrapper>
  );
};

export default ImageInput;
