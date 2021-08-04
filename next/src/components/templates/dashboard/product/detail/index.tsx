import { useState, useEffect, useCallback, ChangeEvent } from 'react';
import Style from './style';
import DashboardWrap from '../../../../organisms/dashboardWrap/index';
import TextField from '../../../../atoms/textField/index';
import TextArea from '../../../../atoms/textarea/index';
import Button from '../../../../atoms/button/index';
import Switch from '../../../../atoms/switch/index';
import ImageInput from '../../../../atoms/ImageInput/index';
import type { ProductEdit } from '../../../../../models/product';

type Props = {
  product: ProductEdit;
};

const ProductDetail = ({ product, ...props }: Props): JSX.Element => {
  const [data, setData] = useState<ProductEdit>({
    id: 0,
    ProductCategoryId: 0,
    title: '',
    thumbnail: '',
    price: 0,
    description: '',
    verticalLength: 0,
    horizontalLength: 0,
    isPublished: 0,
    productImages: [],
  });

  useEffect(() => {
    setData(product);
  }, [product]);

  const handleSave = () => {
    console.log('更新');
    //- 更新API
  };

  return (
    <DashboardWrap>
      <Style.Wrapper {...props}>
        <Style.List>
          <Style.ListItem>
            <TextField
              onChange={useCallback(
                (v: ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, title: v.target.value });
                },
                [data],
              )}
              value={data.title}
            >
              タイトル
            </TextField>
          </Style.ListItem>
          <Style.ListItem>
            <TextField
              type="number"
              onChange={useCallback(
                (v: ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, price: Number(v.target.value) });
                },
                [data],
              )}
              value={data.price}
            >
              金額
            </TextField>
          </Style.ListItem>
          <Style.ListItem>
            <TextArea
              onChange={useCallback(
                (v: ChangeEvent<HTMLTextAreaElement>) => {
                  setData({ ...data, description: v.target.value });
                },
                [data],
              )}
              value={data.description}
            >
              説明文
            </TextArea>
          </Style.ListItem>
          <Style.ListItem>
            <TextField
              type="number"
              isFloat
              onChange={useCallback(
                (v: ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, verticalLength: Number(v.target.value) });
                },
                [data],
              )}
              value={data.verticalLength}
            >
              縦の長さ（mm）
            </TextField>
          </Style.ListItem>
          <Style.ListItem>
            <TextField
              type="number"
              isFloat
              onChange={useCallback(
                (v: ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, horizontalLength: Number(v.target.value) });
                },
                [data],
              )}
              value={data.horizontalLength}
            >
              横の長さ（mm）
            </TextField>
          </Style.ListItem>
          <Style.ListItem>
            <Style.Field>
              <Style.FieldName>公開状態</Style.FieldName>
              <Switch
                id="isPublished"
                value={data.isPublished ? true : false}
                on="公開"
                off="非公開"
                onChange={useCallback(() => {
                  setData({ ...data, isPublished: data.isPublished ? 0 : 1 });
                }, [data])}
              />
            </Style.Field>
          </Style.ListItem>
          <Style.ListItem>
            <ImageInput />
          </Style.ListItem>
        </Style.List>
        <Style.SaveButtonGroup>
          <Button onClick={handleSave}>保存</Button>
        </Style.SaveButtonGroup>
      </Style.Wrapper>
    </DashboardWrap>
  );
};

export default ProductDetail;
