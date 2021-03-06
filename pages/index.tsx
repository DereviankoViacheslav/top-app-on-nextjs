import React, { useState } from 'react';
import {
  Button,
  Htag,
  Ptag,
  Tag,
  Rating,
  EnumTag,
  EnumAppearance,
  EnumArrow,
  EnumParagraphSize,
  EnumTagSize,
  EnumColor
} from '../components';
import { withLayout } from '../layout/Layout';

const Home = (): JSX.Element => {
  const [rating, setRating] = useState<number>(0);

  return (
    <>
      <Htag tag={EnumTag.h1}>text</Htag>
      <Htag tag={EnumTag.h2}>text</Htag>
      <Htag tag={EnumTag.h3}>text</Htag>
      <Button appearance={EnumAppearance.primary} arrow={EnumArrow.down}>
        Кнопка1
      </Button>
      <Button arrow={EnumArrow.right}>Кнопка2</Button>
      <Button arrow={EnumArrow.down}>Кнопка3</Button>
      <Button>Кнопка4</Button>
      <Ptag size={EnumParagraphSize.small}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
        aliquid.
      </Ptag>
      <Ptag>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
        aliquid.
      </Ptag>
      <Ptag size={EnumParagraphSize.large}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
        aliquid.
      </Ptag>
      <Tag>text</Tag>
      <hr />
      <Tag size={EnumTagSize.medium}>text</Tag>
      <Tag size={EnumTagSize.medium} color={EnumColor.red}>
        text
      </Tag>
      <Tag size={EnumTagSize.medium} color={EnumColor.grey}>
        text
      </Tag>
      <Tag size={EnumTagSize.medium} color={EnumColor.green}>
        text
      </Tag>
      <Tag size={EnumTagSize.medium} color={EnumColor.primary}>
        text
      </Tag>
      <hr />
      <Tag>text</Tag>
      <Tag color={EnumColor.red}>text</Tag>
      <Tag color={EnumColor.grey}>text</Tag>
      <Tag color={EnumColor.green}>text</Tag>
      <Tag color={EnumColor.primary}>text</Tag>
      <hr />
      <Tag color={EnumColor.primary} href='/'>
        text
      </Tag>
      <hr />
      <Rating rating={4} />
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
};

export default withLayout(Home);
