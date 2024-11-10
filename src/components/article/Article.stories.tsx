import type { Meta, StoryObj } from '@storybook/react';
import { defaultArticleState } from '../../constants/articleProps';
import { Article } from './Article';

const meta = {
	/* Название компонента и путь, по которому его нужно отобразить на витрине */
	title: 'components/Article',

	/* Передаём сам компонент */
	component: Article,

	/* Тег autodocs просит Storybook сгенерировать отдельную историю с документацией компонента */
	tags: ['autodocs'],

	/* satisfies помогает точнее определить тип */
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaul: Story = {
	/* Для React-компонентов args === props */
	args: {
		props: defaultArticleState,
	},
};
