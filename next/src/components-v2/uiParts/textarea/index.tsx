import { ReactNode, ChangeEvent } from 'react';
import Style from './style';
import ErrorText from '../errorText/index';

type Props = {
  rows?: number;
  width?: string;
  isRequired?: boolean;
  value: string;
  errors?: [];
  onChange?: (v: ChangeEvent<HTMLTextAreaElement>) => void;
  children: ReactNode;
};

/**
 * テキストエリア
 * @param {Int} rows 行数
 * @param {String} width 幅
 * @param {Boolean} isRequired 必須
 * @param {String} value 値 isRequired
 * @param {Array} error エラー
 * @param {String} children
 */
const TextArea = ({
  rows = 4,
  width = '100%',
  isRequired = false,
  value,
  errors = [],
  children,
  ...props
}: Props): JSX.Element => {
  const height = `${rows * 26 + 20}px`;
  return (
    <Style.Wrapper width={width}>
      <Style.Field height={height}>
        <Style.Input value={value} height={height} errors={errors} {...props} />
        <Style.Label isInput={value}>
          {children}
          {isRequired ? <Style.Required>*</Style.Required> : ''}
        </Style.Label>
      </Style.Field>
      <ErrorText errors={errors} />
    </Style.Wrapper>
  );
};

export default TextArea;
